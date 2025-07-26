export default GHDatepicker;
declare function GHDatepicker({ onCorrectInput, onWrongInput, ...props }: {
    [x: string]: any;
    onCorrectInput: (date: object) => void;
    onWrongInput: (date?: string) => void;
    language? : string;
}): any;
