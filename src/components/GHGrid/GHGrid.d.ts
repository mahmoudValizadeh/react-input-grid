export default GHGrid;
type ColumnObject = {
    /**
     * Shown in the header (th) for the column.
     */
    header?: string;
    /**
     * Function that returns the node used inside the column td.
     */
    content: any;
    /**
     * Cell width, used like inline CSS
     */
    width?: string;
    /**
     * Minimum cell width, used for responsive designs.
     */
    minWidth?: string;
}
type FooterObject = {
    /**
     * Function that returns the node used inside the footer td.
     */
    content?: any;
    colSpan: number;
}
declare function GHGrid({ title, fieldArrayName, fieldArrayKey, fieldArrayValues, fieldArrayErrors, columns, footer, addRowFunction, rowFocusFunction, rowFocusState, removeRowOperation, showFooter, showDelete, showAddButton, customUpperButtonFunction }: {
    /**
     * Title shown above the grid.
     */
    title: any;
    /**
     * Name specified for the formik field array.
     */
    fieldArrayName: any;
    /**
     * A field containing a unique identifier in the object used to populate the array.
     */
    fieldArrayKey: any;
    /**
     * Location of the FieldArray values in formik.
     */
    fieldArrayValues: any;
    /**
     * Location of the FieldArray errors in formik.
     */
    fieldArrayErrors: any;
    /**
     * Array of cells used to construct the grid body.
     */
    columns: ColumnObject[];
    /**
     * Array of cells used to construct the grid footer.
     */
    footer: FooterObject[];
    /**
     * Function that triggers when add row button is clicked.
     * Usually used to add an object to the formik FieldArray
     */
    addRowFunction: any;
    /**
     * Function that triggers when a row is focused.
     * Usually used to set the rowFocusState
     */
    rowFocusFunction: any;
    /**
     * Determines the state for the focused row to be stored in.
     */
    rowFocusState: any;
    /**
     * Any additional operations to be made after a row is removed.
     * (Row removal will modify the formik FieldArray by default)
     */
    removeRowOperation?: () => void;
    /**
     * Defaults to true.
     * Change to false in order to hide footer.
     */
    showFooter?: boolean;
    /**
     * Defaults to true.
     * Change to false in order to hide delete column.
     */
    showDelete?: boolean;
    /**
     * Defaults to true.
     * Change to false in order to hide add row button.
     */
    showAddButton?: boolean;
    /**
     * Defaults to true.
     * Change to false in order to hide index column
     */
    showIndex?:boolean;
    /**
     * default: "ردیف"
     */
    indexHeader? : string;
    /**
     * return a <td> tag with what you want inside first column of your grid (index cell)
     */
    customIndexCell? : any;
    /**
     * Use this in tandem with showAddButton: false to create your own buttons with custom functionalities.
     * This function returns a node in lieu of the predefined add button above grid.
     */
    customUpperButtonFunction: any;
    /**
     * Used to disable the delete button on a row
     */
    disableRemoveExpr? : () => boolean;
    /**
     * this function shall translate your string if you pass a "t" function from the useTranslation or any other similar hook
     * @param value any string
     * @returns translated string
     */
    translatorFunction?: (value: string) => string;
}): any;
