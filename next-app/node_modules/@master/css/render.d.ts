import { StyleSheet } from './';
import './polyfills/css-escape';
export declare function render(html: string, options: {
    StyleSheet: typeof StyleSheet;
}): {
    css: string;
    html: string;
};
