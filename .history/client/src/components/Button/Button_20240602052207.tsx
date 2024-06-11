import React, {memo} from "react";

const Button = ({text, textColor, bgColor, onClick, className, icon}) => {
    return(
        <button
            type="button"
            className={`py-[2px] px-[4px] ${textColor} ${bgColor} ${className} flex justify-center items-center outline-none rounded-md hover:underline `}
            onClick={onClick}
        >
            <span className="pr-[5px] text-[166px]">{icon}</span>
            {text}
        </button>
    )
}

export default memo(Button)