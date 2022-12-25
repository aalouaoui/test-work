import { Style } from '../style';
export declare class Gap extends Style {
    static id: string;
    static matches: RegExp;
    get props(): {
        [key: string]: any;
    };
    order: number;
}
