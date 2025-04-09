import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ShadowButton from "../../Shadow-Button";
const SurveyIntro = ({ onBtnClicked }) => {
    return (_jsxs("div", { className: "pt-40 content-center", children: [_jsx("h1", { className: "header2-text text-center", children: "We need to know a bit more about you before we can find your dream roommate." }), _jsx("div", { className: "flex justify-center", children: _jsx(ShadowButton, { onClick: onBtnClicked, value: "Get Started", submitButton: false }) })] }));
};
export default SurveyIntro;
