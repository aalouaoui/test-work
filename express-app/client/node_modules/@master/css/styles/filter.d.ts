import { Style } from '../style';
export declare class Filter extends Style {
    static matches: RegExp;
    static key: string;
    static colorful: boolean;
    get parseValue(): string;
}
