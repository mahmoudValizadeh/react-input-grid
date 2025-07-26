import React,{ useState } from "react"


const GHInput = ({ inputType = "text", ...props }) => {
    const [type, setType] = useState(inputType)
    return (
        <input
            className="form-input"
            type={type}
            autoComplete="off"
            {...props}
        />
    )
}
export default GHInput