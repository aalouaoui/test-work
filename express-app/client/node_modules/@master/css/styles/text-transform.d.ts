import { Style } from '../style';
export declare class TextTransform extends Style {
    static matches: RegExp;
    static key: string;
    static semantics: {
        uppercase: string;
        lowercase: string;
        capitalize: string;
    };
}
