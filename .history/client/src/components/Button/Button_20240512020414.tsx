import React, {memo} from "react";

const Button = ({text, textColor, bgColor, onClick}) => {
    return(
        <button
            type="button"
            className={`py-[2px] px-[4px] ${textColor} ${bgColor} outline-none rounded-md hover:underline`}
            onCick={onClick}
        >
            {text}
        </button>
    )
}

export default memo(Button)