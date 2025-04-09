import { jsx as _jsx } from "react/jsx-runtime";
const ShadowButton = ({ value = "Submit", color = "secondary", onClick = () => { }, width = "48", disabled = false, submitButton = true }) => {
    //Set width, color and onClick behavior of the button
    return (_jsx("button", { type: submitButton ? 'submit' : 'button', onClick: onClick, className: `items-center w-${width} p-2 mt-12 text-white text-3xl font-bold bg-${color} ${disabled ? "cursor-not-allowed" : "cursor-pointer"} shadow-btn ${disabled ? "hover:bg-gray-500" : "hover:scale-105"} transform transition-all`, children: value }));
};
export default ShadowButton;
