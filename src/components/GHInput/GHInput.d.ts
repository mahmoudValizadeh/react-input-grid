export default GHInput;
declare function GHInput({ inputType, ...props }: {
    [x: string]: any;
    /**
     * Specify the HTML Input type. Defaults to "text".
     */
    inputType?: string;
}): any;