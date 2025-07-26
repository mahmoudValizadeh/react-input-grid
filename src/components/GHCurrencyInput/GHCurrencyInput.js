import React from "react"
import CurrencyInput from "react-currency-input-field"

const GHCurrencyInput = (props) => {
    return (
        <CurrencyInput
            className={`form-input`}
            decimalsLimit={2}
            autoComplete="off"
            {...props}
        />
    )
}
export default GHCurrencyInput