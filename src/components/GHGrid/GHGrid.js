import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import "../../style.css";
import { FieldArray } from "formik";
import React from "react";
import InputGridDeleteRowBtn from "../InputGridDeleteRowBtn";
import { useTheme } from "@mui/material";
import { CreateTableError } from "../../utils/createTableError";
import { findNextFocusable } from "../../utils/GridNavigation/GridNavigation";

const GHGridRow = React.memo(function GHGridRow({
    item,
    index,
    fieldArrayKey,
    columns,
    showDelete,
    remove,
    removeRowOperation,
    rowFocusFunction,
    rowFocusState,
    showIndex,
    customIndexCell,
    disableRemoveExpr
}) {
    return (
        <tr
            style={{ cursor: 'pointer' }}
            className={rowFocusState === index + 1 ? 'focus-row-bg' : ''}
            onFocus={(e) => rowFocusFunction(e)}
        >
            {customIndexCell === null ? (
                <td
                    className='text-center'
                    style={{
                        verticalAlign: 'middle',
                        width: '40px',
                        display: showIndex ? 'table-cell' : 'none'
                    }}
                >
                    {index + 1}
                </td>
            ) : (
                customIndexCell()
            )}
            {columns.map((column, columnIndex) =>
                column.show || typeof column.show === 'undefined' ? (
                    <td
                        key={columnIndex}
                        style={{
                            width: column.width ? column.width : 'auto',
                            minWidth: column.minWidth ? column.minWidth : 'auto'
                        }}
                    >
                        {column.content(index)}
                    </td>
                ) : null
            )}
            {showDelete ? (
                <td style={{ width: '40px' }}>
                    <input disabled hidden />
                    <InputGridDeleteRowBtn
                        onClick={() => {
                            removeRowOperation(index);
                            remove(index);
                        }}
                        disabled={disableRemoveExpr(index)}
                    />
                </td>
            ) : null}
        </tr>
    );
});

const GHGrid = ({
    title,
    fieldArrayName,
    fieldArrayKey,
    fieldArrayValues,
    fieldArrayErrors,
    columns,
    footer,
    addRowFunction,
    rowFocusFunction,
    rowFocusState,
    removeRowOperation = () => { },
    showFooter = true,
    showDelete = true,
    showAddButton = true,
    showIndex = true,
    indexHeader = "ردیف",
    customIndexCell = null,
    customUpperButtonFunction,
    translatorFunction = (value) => {return value},
    disableRemoveExpr = () => {return false} }) => {
    const theme = useTheme();

    return (
        <>
            <div className="row align-items-center">
                {typeof (title) !== "undefined" ?
                    <div className='content col-lg-6 col-6'>
                        <div className='title mb-0'>
                            <span className='span'> {title} </span>
                        </div>
                    </div> : null
                }
                {typeof (customUpperButtonFunction) === "undefined" ?
                    <div className={`content ${typeof (title) === "undefined" ? "col-12" : "col-lg-6 col-6"}`}>
                        {/* Copyright Ghafourian© Grid V4.0
                        All rights reserved */}
                        {showAddButton ?
                            <div className='d-flex justify-content-end'>
                                <Button
                                    variant="outlined"
                                    className="grid-add-btn"
                                    onClick={(e) => {
                                        addRowFunction()
                                        setTimeout(() => {
                                            let added = e.target.closest("div").parentElement.nextSibling.querySelector('tbody tr:last-child td:nth-child(2)')
                                            while (added.querySelector("button:not([aria-label='Clear'])") || added.querySelector("input").disabled) {
                                                added = findNextFocusable(added)
                                            }
                                            added.querySelector("input").focus()
                                        }, 0);
                                    }}
                                >
                                    <AddIcon />
                                </Button>
                            </div> : null}
                    </div>
                    : customUpperButtonFunction()}
                <div className='content col-lg-12 col-12'>
                    <div className={`table-responsive sticky-h-f gridRow ${theme.palette.mode === 'dark' ? 'dark' : ''}`}>
                        <table className="table table-bordered ">
                            <thead>
                                <tr className='text-center'>
                                    <th style={{ display: showIndex ? 'table-cell' : 'none' }}>{translatorFunction(indexHeader)}</th>
                                    {columns.map((column, index) => (
                                        column.show || typeof (column.show) === "undefined" ?
                                            <th key={index}>{column.header}</th> : null
                                    ))}
                                    {showDelete ? <th>{translatorFunction("حذف")}</th> : null}
                                </tr>
                            </thead>
                            <tbody>
                                <FieldArray
                                    name={fieldArrayName}
                                    validateOnChange={false}
                                    render={({ push, remove }) => (
                                        <React.Fragment>
                                            {fieldArrayValues?.map((item, arrayIndex) => (
                                                <GHGridRow
                                                    key={item[fieldArrayKey]}
                                                    item={item}
                                                    index={arrayIndex}
                                                    fieldArrayKey={fieldArrayKey}
                                                    columns={columns}
                                                    showDelete={showDelete}
                                                    remove={remove}
                                                    removeRowOperation={removeRowOperation}
                                                    rowFocusFunction={rowFocusFunction}
                                                    rowFocusState={rowFocusState}
                                                    showIndex={showIndex}
                                                    customIndexCell={customIndexCell}
                                                    disableRemoveExpr={disableRemoveExpr}
                                                />
                                            ))}
                                        </React.Fragment>
                                    )}
                                >
                                </FieldArray>
                            </tbody>
                            {showFooter ?
                                <tfoot>
                                    <tr>
                                        {footer.map((footerCell, index) => (
                                            <td
                                                key={index}
                                                colSpan={footerCell.colspan ? footerCell.colspan : 1}
                                            >
                                                {footerCell.content ? footerCell.content() : null}
                                            </td>
                                        ))}
                                    </tr>
                                </tfoot> : null}
                        </table>
                    </div>
                </div>
            </div>
            <div className='row align-items-start'>
                <div className='content col-lg-12 col-md-12 col-12'>
                    {fieldArrayErrors?.map((error, index) => (
                        <p className='error-msg' key={index}>
                            {error ? ` ${translatorFunction("ردیف")} ${index + 1} : ${CreateTableError(error)}` : null}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}
export default GHGrid
