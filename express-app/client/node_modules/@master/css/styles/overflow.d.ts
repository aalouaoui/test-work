import { Style } from '../style';
export declare class Overflow extends Style {
    static id: string;
    static matches: RegExp;
    get props(): {
        [key: string]: any;
    };
    get order(): number;
    static semantics: {
        overflow: string;
    };
}
