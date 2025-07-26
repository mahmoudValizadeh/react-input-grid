export default GHAutocomplete;
declare function GHAutocomplete({ innerWidth, innerFontSize, backgroundColor, loadingState, allowClear, ...props }: {
    [x: string]: any;
    innerWidth?: number;
    innerFontSize?: string;
    backgroundColor?: string;
    loadingState: any;
    allowClear?: boolean;
    noOptionsText: string;
    dir?: string;
}): any;