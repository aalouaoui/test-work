import { Style } from '../style';
export declare class BackdropFilter extends Style {
    static matches: RegExp;
    static key: string;
    static colorful: boolean;
    get props(): {
        [key: string]: any;
    };
    get parseValue(): string;
}
