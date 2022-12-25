import { Style } from './style';
declare const MutationObserver: {
    new (callback: MutationCallback): MutationObserver;
    prototype: MutationObserver;
} | ObjectConstructor;
export declare class StyleSheet extends MutationObserver {
    private container?;
    constructor(container?: Element);
    readonly element: HTMLStyleElement;
    readonly styles: Style[];
    readonly styleOfName: {};
    readonly countOfName: {};
    static root: StyleSheet;
    static Styles: typeof Style[];
    observe(target: Node, options?: MutationObserverInit): this;
    disconnect(): void;
    /**
     * 尋找匹配的 Style 生成實例
     */
    static findAndNew(name: string): Style | Style[];
    /**
     * 尋找匹配的 Style
     */
    static find(name: string): typeof Style | (typeof Style)[];
    /**
     * 全部 sheet 根據目前蒐集到的所有 DOM class 重新 findAndNew
     */
    static refresh(): void;
    /**
     * 根據目前蒐集到的所有 DOM class 重新 findAndNew
     */
    refresh(): void;
    destroy(): void;
    /**
     * 1. where
     * 2. normal
     * 3. where selectors
     * 4. normal selectors
     * 5. media where
     * 6. media normal
     * 7. media selectors
     * 8. media width where
     * 9. media width
     * 10. media width selectors
     */
    insert(style: Style): void;
    delete(className: string): void;
    findAndInsert(className: string): void;
}
declare global {
    interface Window {
        MasterStyleSheet: typeof StyleSheet;
    }
}
export {};
