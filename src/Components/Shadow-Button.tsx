import React from 'react';

const ShadowButton = ({ value = "Submit", color = "blue"}) => {
    const bgColor = color === "red" ? "bg-[var(--color-back)]" : "bg-[var(--color-secondary)]";

    return (
        <button type='submit'
                className={`items-center w-48 p-2 mt-12 text-white text-3xl font-bold ${bgColor} cursor-pointer shadow-btn hover:scale-105 transform transition-all`}>
            {value}
        </button>

    );
};

export default ShadowButton;