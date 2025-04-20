import React from 'react';

const ShadowButton = ({ value = "Submit", color, onClick = () => {}, width = "48", disabled = false, submitButton = true}) => {
    // Colors can't be set dynamically.
    // Mapping the color values allows us to get the style from the set value
    const buttonColours = {
        secondary: "bg-secondary",
        disabled: "bg-disabled",
        text: "bg-text",
    };

    const buttonColor = buttonColours[color] ?? "bg-secondary"
    //Set width, color and onClick behavior of the button
    return (
        <button type={submitButton ? 'submit' : 'button'} onClick={onClick}
                className={`items-center w-${width} p-2 mt-12 text-white text-3xl font-bold ${buttonColor} ${disabled ? "cursor-not-allowed" : "cursor-pointer"} shadow-btn ${disabled ?  "hover:bg-gray-500" : "hover:scale-105"} transform transition-all`}>
            {value}
        </button>

    );
};

export default ShadowButton;