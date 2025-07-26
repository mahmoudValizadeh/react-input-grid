import React, { useState } from "react"
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
    const [width, setWidth] = useState(innerWidth)
    const [fontSize, setFontSize] = useState(innerFontSize)
    const [bgColor, setBgColor] = useState(backgroundColor)
    return (
        <Autocomplete
            componentsProps={{
                paper: {
                    sx: {
                        width: { width },
                        maxWidth: '90vw',
                        direction: dir,
                        position: "absolute",
                        fontSize: { fontSize },
                        right: dir === "rtl" ? "0" : "unset"
                    }
                }
            }}
            sx={
                {
                    direction: dir,
                    position: "relative",
                    background: { bgColor },
                    borderRadius: 0,
                    fontSize: { fontSize }
                }
            }
            size="small"
            isOptionEqualToValue={(option, value) => option?.value === value?.value}
            disableClearable={!allowClear}
            forcePopupIcon={false}
            noOptionsText={noOptionsText}
            loading
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