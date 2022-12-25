import { StyleMedia } from './interfaces/style-media';
import { StyleSheet } from './sheet';
export interface StyleMatching {
    origin: 'matches' | 'semantics' | 'symbol';
    value?: string;
}
export declare const sheets: StyleSheet[];
export declare class Style {
    readonly name: string;
    readonly matching?: StyleMatching;
    readonly prefix: string;
    readonly symbol: string;
    readonly value: any | {
        [key: string]: string;
    };
    readonly token: string;
    readonly prefixSelector: string;
    readonly suffixSelector: string;
    readonly important: boolean;
    readonly media: StyleMedia;
    readonly at: Record<string, string>;
    readonly direction: string;
    readonly colorScheme: string;
    readonly unit: string;
    readonly unitToken: string;
    readonly text: string;
    readonly hasWhere: boolean;
    readonly prioritySelectorIndex: number;
    cssRule: CSSRule;
    static id: string;
    static key: string;
    static matches: RegExp;
    static colorStarts: string;
    static symbol: string;
    static unit: string;
    static colorful: boolean;
    static rootSize: number;
    static readonly values: Record<string, any>;
    static readonly semantics: {
        [key: string]: any;
    };
    static readonly breakpoints: {
        [key: string]: number;
    };
    static readonly mediaQueries: {
        [key: string]: string;
    };
    static readonly sheets: StyleSheet[];
    static readonly colors: Record<string, any>;
    static readonly classes: Record<string, string | string[]>;
    static readonly colorNames: string[];
    static readonly relations: Record<string, string[]>;
    static readonly colorSchemes: string[];
    static match(name: string): StyleMatching;
    constructor(name: string, matching?: StyleMatching);
    static extend(property: 'classes' | 'breakpoints' | 'colors' | 'mediaQueries', ...settings: Record<string, any>[]): typeof Style;
}
export interface Style {
    readonly parseValue?: any;
    readonly props?: {
        [key: string]: any;
    };
    readonly order?: number;
}
declare global {
    interface Window {
        MasterStyle: typeof Style;
    }
}
