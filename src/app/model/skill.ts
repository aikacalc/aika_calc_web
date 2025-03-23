import { Buff } from "./buff";

export class Skill {
    name: string = '';
    description: string = '';
    buffs: Buff[] = [];
    subSkills: Skill[] = [];
}
