import { Style } from '../style';
export declare class BackgroundClip extends Style {
    static matches: RegExp;
    static key: string;
    get props(): {
        [key: string]: any;
    };
    static values: {
        content: string;
        border: string;
        padding: string;
    };
}
