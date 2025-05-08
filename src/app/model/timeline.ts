export class TimeLine {
    id?: number;
    sort?: number;
    source: string;
    time?: string;
    location?: string;
    text?: string;
    type?: TimeLineType;
    comment?: string;
}
export type TimeLineType = '' | 'main_story' | 'event' | 'chr_story1' | 'chr_story2';
export namespace TimeLineType {
    export const MainStory = 'main_story';
    export const Event = 'event';
    export const ChrStory1 = 'chr_story1';
    export const ChrStory2 = 'chr_story2';
}
