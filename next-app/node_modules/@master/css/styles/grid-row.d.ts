import { Style } from '../style';
export declare class GridRow extends Style {
    static matches: RegExp;
    static key: string;
    static unit: string;
    get parseValue(): any;
    order: number;
}
