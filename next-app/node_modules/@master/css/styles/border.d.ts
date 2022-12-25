import { Style } from '../style';
export declare class Border extends Style {
    static id: string;
    static matches: RegExp;
    static colorful: boolean;
    get props(): {
        [key: string]: any;
    };
    get order(): number;
}
