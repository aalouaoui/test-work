import { Style } from '../style';
export declare class BorderColor extends Style {
    static id: string;
    static matches: RegExp;
    static colorStarts: string;
    static colorful: boolean;
    get props(): {
        [key: string]: any;
    };
    get order(): number;
    static values: {
        current: string;
    };
}
