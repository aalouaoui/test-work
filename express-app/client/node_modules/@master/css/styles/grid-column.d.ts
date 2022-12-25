import { Style } from '../style';
export declare class GridColumn extends Style {
    static matches: RegExp;
    static key: string;
    static unit: string;
    get parseValue(): any;
    order: number;
}
