import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import ReactDom from 'react-dom';
import { Close } from "@mui/icons-material";
const Modal = ({ open, close, children, width = "auto" }) => {
    if (!open)
        return null;
    useEffect(() => {
        console.log("MODAL");
    }, []);
    return ReactDom.createPortal(_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50", onClick: close, children: _jsxs("div", { className: `relative bg-white ${width === "rating" ? "w-2/3" : "w-auto"} rounded-lg shadow-xl z-50`, onClick: (e) => e.stopPropagation(), children: [_jsx("button", { onClick: close, className: "absolute top-3 right-3 hover:text-text", children: _jsx(Close, { sx: { fontSize: 32 } }) }), children] }) }), document.getElementById("modal-root"));
};
export default Modal;
