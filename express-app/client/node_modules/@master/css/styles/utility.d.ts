import { Style } from '../style';
export declare class Utility extends Style {
    static semantics: {
        'center-content': {
            'justify-content': string;
            'align-items': string;
        };
        'sr-only': {
            position: string;
            width: string;
            height: string;
            padding: string;
            margin: string;
            overflow: string;
            clip: string;
            'white-space': string;
            'border-width': string;
        };
        full: {
            width: string;
            height: string;
        };
        center: {
            left: number;
            right: number;
            'margin-left': string;
            'margin-right': string;
        };
        middle: {
            top: number;
            bottom: number;
            'margin-top': string;
            'margin-bottom': string;
        };
        'break-spaces': {
            'white-space': string;
        };
        'break-word': {
            'overflow-wrap': string;
            overflow: string;
        };
    };
}
