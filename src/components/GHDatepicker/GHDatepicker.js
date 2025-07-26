import React from "react"
import DatePicker from "react-multi-date-picker";
import { renderCalendarLocaleSwitch, renderCalendarSwitch } from "../../utils/calendarLang";

const GHDatepicker = ({
    onCorrectInput,
    onWrongInput,
    language = "en",
    ...props }) => {
    return (
        <DatePicker
            calendar={renderCalendarSwitch(language)}
            locale={renderCalendarLocaleSwitch(language)}
            calendarPosition="bottom-right"
            onOpen={false}
            onOpenPickNewDate={false}
            onChange={(date, { input, isTyping }) => {
                const actualInput = input.querySelector("input")
                if (!isTyping) return onCorrectInput(date) // user selects the date from the calendar and no needs for validation.

                if (actualInput.value.includes("–")) {
                    onWrongInput(date)
                    return actualInput.value
                }
                const strings = actualInput.value.split("/");
                const numbers = strings.map(Number);
                const [year, month, day] = numbers;

                if (actualInput.value && numbers.some((number) => isNaN(number))) {
                    return false; //in case user enter something other than digits
                }

                if (month > 12 || month < 0) return false; //month < 0 in case user want to type 01
                if (day < 0 || (date && day > date.day)) return false;
                if (strings.some((val) => val.startsWith("00"))) return false;

                return onCorrectInput(date);
            }}
            {...props}
        />
    )
}
export default GHDatepicker