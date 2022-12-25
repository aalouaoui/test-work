import { Style } from '../style';
export declare class BorderRadius extends Style {
    static id: string;
    static matches: RegExp;
    static semantics: {
        rounded: string;
        round: string;
    };
    get props(): {
        [key: string]: any;
    };
    get order(): number;
}
