import { Buff } from "./buff";

export class Skill {
    name: string = '';
    description: string = '';
    buffs: Buff[] = [];
    subSkills: Skill[] = [];
}
export enum SelectStatus {
    None = 0,
    Some = 1,
    All = 2,
    Selected = 3,
}
export class AikaEnigmaIndex {
    id: number = -1;
    name: string = '';
    enable: boolean = false;
    parent: AikaEnigmaIndex | null = null;
    data: any = null;

    constructor(name?: string, enable?: boolean, parent?: AikaEnigmaIndex) {
        this.name = name || '';
        this.enable = enable || false;
        this.parent = parent || null;
    }
}
export class AikaEnigmaSection {
    name: string = '';
    aid: number = -1; // actress id
    area: AikaEnigmaArea[] = [];
    index: AikaEnigmaIndex;

    // custom
    id: number = -1;
    slot: { [key: string]: AikaPsvSkillSlot[] } = {};
    selected: SelectStatus = SelectStatus.None;
}
export class AikaEnigmaArea {
    id: number = -1;
    name: string = '';
    psvskills: AikaEnigmaPsvSkill[] = [];
    index: AikaEnigmaIndex;
    selected: SelectStatus = SelectStatus.None;
}
export class AikaEnigmaPsvSkill {
    // base
    gid: number = -1;
    name: string = '';
    grade: string = '';
    level: number = 0;
    maxLv: number = 0;
    desc: string = '';
    effect: string = '';
    upgrade: AikaEnigmaPsvSkillUpgrade;
    index: AikaEnigmaIndex;
    tags: number[] = [];
    uc: number = 0;

    // custom
    selected: SelectStatus = SelectStatus.None;
    cost: number = 0; // cost in points
    costPoint: string = ''; // ●
    tagStyles: { name: string, color: string }[] = []; // tag styles for display
    id: number = -1;
    effects: AikaSkillEffect[] = []; // parsed effects for display
    // areaName: string = ''; // area name for display
    // areaNameTag: string = ''; // area name tag for display
    descOneLine: string = '';
}
export class AikaEnigmaPsvSkillUpgrade {
    level: number = 0;
    cost: string[] = [];
}
export function parseSkillDataJson(jsonString: string): AikaEnigmaSection[] {
    const result: AikaEnigmaSection[] = [];
    const json = JSON.parse(jsonString);
    Object.keys(json).forEach((name) => {
        const actress = json[name];

        const section = new AikaEnigmaSection();
        section.name = name;
        section.aid = actress.aid;

        Object.keys(actress.enigma).forEach((areaName) => {
            const area = new AikaEnigmaArea();
            area.name = areaName;

            const psvskills = actress.enigma[areaName];
            for (const rawPsvskill of psvskills) {
                const psvskill = new AikaEnigmaPsvSkill();
                psvskill.gid = rawPsvskill.gid;
                psvskill.name = rawPsvskill.name;
                psvskill.grade = rawPsvskill.grade;
                psvskill.cost = Number(psvskill.grade);
                psvskill.costPoint = ''; // ●
                for (let i = 0; i < psvskill.cost; i++) {
                    psvskill.costPoint += '●'; // fill with ●
                }
                psvskill.level = rawPsvskill.level;
                psvskill.maxLv = rawPsvskill.maxLv;
                psvskill.desc = rawPsvskill.desc;
                psvskill.descOneLine = rawPsvskill.desc.replace(/[\r\n]/g, '');
                psvskill.effect = rawPsvskill.effect;
                psvskill.tags = rawPsvskill.tags;
                psvskill.uc = rawPsvskill.uc;
                if (rawPsvskill.upgrade) {
                    psvskill.upgrade = new AikaEnigmaPsvSkillUpgrade();
                    psvskill.upgrade.level = rawPsvskill.upgrade.level;
                    psvskill.upgrade.cost = rawPsvskill.upgrade.cost;
                }

                psvskill.effects = [];
                if (psvskill.effect) {
                    const effectLines = psvskill.effect.split('\n');
                    effectLines.forEach((line) => {
                        let trimmedLine = line.trim();
                        const effect = new AikaSkillEffect();
                        effect.text = line.trim();
                        if (effect.text) {
                            if (trimmedLine.startsWith('[疊加]')) {
                                effect.疊加 = true;
                                trimmedLine = trimmedLine.replace('[疊加]', '').trim();
                            }
                            trimmedLine = trimmedLine.replace(/^\((.+)\)$/, '$1').trim(); // remove parentheses at the start and end
                            const lineSplit = trimmedLine.split(' ');
                            effect.name = lineSplit[0]; // first word is the name
                            effect.value = lineSplit[1];

                            if (effect.value) {
                                if (effect.value.endsWith('%')) {
                                    effect.valuePct = parseFloat(effect.value.replace('%', ''));
                                    effect.isPct = true; // mark as percentage
                                } else {
                                    effect.valueNumber = parseFloat(effect.value);
                                }
                            }

                            psvskill.effects.push(effect);
                        }
                    });
                }

                // if(psvskill.name.startsWith('抑圧からの解放E')){
                //     debugger;
                // }

                // psvskill.areaName = areaName;
                // psvskill.areaNameTag = `[${areaName.substring(0, 3).toUpperCase()}]`;
                area.psvskills.push(psvskill);
            }
            section.area.push(area);
        });

        Object.keys(actress.slot).forEach((characterCid) => {
            if (section.slot[characterCid] === undefined) {
                section.slot[characterCid] = [];
            }

            const slotDatas = actress.slot[characterCid];
            slotDatas.forEach((slotData: any) => {
                const slot = new AikaPsvSkillSlot();
                slot.index = slotData.index;
                slot.tag = slotData.tag;
                slot.tagName = slotData.tagName;
                slot.cost = slotData.cost;
                slot.defaultSkill = slotData.defaultSkill;
                slot.enable = slotData.enable == 1;

                // custom
                slot.selectedPsvSkillGid = -1; // default to -1, meaning no skill selected
                slot.costPoint = ''; // ●
                for (let i = 0; i < slot.cost; i++) {
                    slot.costPoint += '●'; // fill with ●
                }

                section.slot[characterCid].push(slot);
            });

        });

        result.push(section);
        // console.log('name:', name, 'data:', data);
    });

    return result;
}

export class AikaPsvSkillSlot {
    // base
    index: number = -1;
    tag: number = -1;
    tagName: string = '';
    cost: number = 0;
    defaultSkill: number = -1;
    enable: boolean = false;

    // custom
    selectedPsvSkillGid: number = -1;
    selectedPsvSkill: AikaEnigmaPsvSkill | null = null; // reference to the selected skill
    costPoint: string = ''; // ●
    psvSkill: AikaEnigmaPsvSkill | null = null; // reference to the selected skill
    tagStyle: { name: string, color: string } = { name: '', color: '' }; // tag style for display
}
export class AikaSkillEffect {
    text: string = '';
    疊加: boolean = false;
    name: string = '';
    value: string = '';
    isPct: boolean = false; // true if value is a percentage
    valueNumber: number = 0;
    valuePct: number = 0;
}
