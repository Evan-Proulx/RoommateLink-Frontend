import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ShadowButton from "../../Shadow-Button";
const ButtonNav = () => {
    return (_jsx("div", { className: "fixed bottom-1 z-0 w-full hidden md:block", children: _jsxs("div", { className: "flex justify-between mx-5 p-8", children: [_jsx(ShadowButton, { value: "Back", color: "red" }), _jsx(ShadowButton, { value: "Next" })] }) }));
};
export default ButtonNav;
