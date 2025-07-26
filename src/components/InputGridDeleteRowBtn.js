import React from "react"
import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const InputGridDeleteRowBtn = (props) => {
    return (
        <IconButton
            variant="contained"
            color="error"
            className='kendo-action-btn'
            {...props}
        >
            <DeleteIcon />
        </IconButton>
    )
}

export default InputGridDeleteRowBtn