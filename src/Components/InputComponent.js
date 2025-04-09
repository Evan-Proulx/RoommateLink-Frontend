import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const InputComponent = ({ label, type, value, onChange, placeholder }) => {
    return (_jsx("div", { children: _jsxs("div", { className: "flex flex-col space-y-4 flex-1", children: [_jsx("label", { className: "block mb-2 header3-text inter", children: label }), _jsx("input", { type: type, value: value, onChange: onChange, placeholder: placeholder, className: "p-2 mt-1 bg-white border-2 border-black text-gray-900 rounded-lg block w-full" })] }) }));
};
export default InputComponent;
