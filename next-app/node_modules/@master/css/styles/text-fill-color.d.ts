import { Style } from '../style';
export declare class TextFillColor extends Style {
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
