import { Style } from '../style';
export declare const Styles: Styles;
export declare function init(): void;
declare global {
    interface Window {
        MasterStyles: typeof Styles;
        MasterCSSManual: boolean;
    }
}
export interface Styles extends Array<typeof Style> {
    extend: (property: 'semantics' | 'values', ...settings: {
        [key: string]: {
            [key: string]: any;
        };
    }[]) => Styles;
    get: (query: string) => typeof Style;
}
