import React from "react";

const Button = ({text, textColor, bgColor}) => {
    return(
        <button
        type="button"
        className={`py-[2px] px-[4px] ${textColor} ${bgColor} outline-none rounded-md`}
        >
        </button>
    )
}