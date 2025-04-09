import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (_jsxs("div", { className: "bg-primary h-screen flex flex-col items-center justify-center", children: [_jsx("h1", { className: "absolute top-0 left-0 logo", children: "Roommate Link" }), _jsx("h2", { className: "header3-text", children: "404 not found :( " }), _jsx(Link, { to: "/", className: "hover:underline", children: "Go Back" })] }));
};
export default ErrorPage;
