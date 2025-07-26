import React from "react"
import Autocomplete from "@mui/material/Autocomplete"
import CircularProgress from "@mui/material/CircularProgress"
const GHAutocomplete = ({
    noOptionsText = "",
    innerWidth = 300,
    innerFontSize = '12px',
    backgroundColor = '#FFFFFF',
    loadingState,
    allowClear = false,
    dir = "ltr",
    ...props
}) => {
    return (
        <Autocomplete
            componentsProps={{
                paper: {
                    sx: {
                        width: innerWidth,
                        maxWidth: '90vw',
                        direction: dir,
                        position: "absolute",
                        fontSize: innerFontSize,
                        right: dir === "rtl" ? "0" : "unset"
                    }
                }
            }}
            sx={{
                direction: dir,
                position: "relative",
                background: backgroundColor,
                borderRadius: 0,
                fontSize: innerFontSize
            }}
            size="small"
            isOptionEqualToValue={(option, value) => option?.value === value?.value}
            disableClearable={!allowClear}
            forcePopupIcon={false}
            noOptionsText={noOptionsText}
            loading={loadingState}
            loadingText={loadingState ? <CircularProgress /> : noOptionsText}
            renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                    <input type="text" {...params.inputProps} className='form-input' />
                </div>
            )}
            {...props}
        />
    )
}
export default GHAutocomplete
