import { Style } from '../style';
export declare class Group extends Style {
    static id: string;
    static matches: RegExp;
    static unit: string;
    get props(): {
        [key: string]: any;
    };
}
