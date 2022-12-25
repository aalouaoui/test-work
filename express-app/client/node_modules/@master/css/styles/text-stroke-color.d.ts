import { Style } from '../style';
export declare class TextStrokeColor extends Style {
    static id: string;
    static matches: RegExp;
    static colorStarts: string;
    static colorful: boolean;
    get props(): {
        [key: string]: any;
    };
    static values: {
        current: string;
    };
}
