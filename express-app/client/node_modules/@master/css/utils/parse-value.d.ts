export declare function parseValue(token: string | number, defaultUnit?: string, colors?: Record<string, Record<string, string>>, values?: Record<string, Record<string, string>>, rootSize?: number): {
    value: any;
    unit: string;
    unitToken: string;
};
