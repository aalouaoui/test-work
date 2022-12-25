import { Style } from '../style';
export declare class Display extends Style {
    static matches: RegExp;
    static key: string;
    static semantics: {
        hidden: string;
        hide: string;
        block: string;
        table: string;
        flex: string;
        grid: string;
        contents: string;
        inline: string;
        'inline-block': string;
        'inline-flex': string;
        'inline-grid': string;
        'inline-table': string;
        'table-cell': string;
        'table-caption': string;
        'flow-root': string;
        'list-item': string;
        'table-row': string;
        'table-column': string;
        'table-row-group': string;
        'table-column-group': string;
        'table-header-group': string;
        'table-footer-group': string;
    };
}
