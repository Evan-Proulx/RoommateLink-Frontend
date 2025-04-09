import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ShadowButton from "../../Shadow-Button";
import { useFormContext } from "react-hook-form";
import { Error, Warning } from "@mui/icons-material";
const SubmitSurvey = ({ submissionError }) => {
    const { formState: { isValid, isDirty } } = useFormContext();
    return (_jsxs("div", { className: "py-40 content-center", children: [isValid ? (_jsxs("div", { children: [_jsx("h1", { className: "header-text-big text-center", children: "Survey Complete!" }), _jsx("h2", { className: "header3-text text-center text-black", children: "Your answers can be changed at anytime on the profile page. Now its time to find your perfect roommate! Click the \u201CSubmit\u201D button to navigate to the feed." })] })) : (_jsxs("h2", { className: "text-xl font-bold text-center text-black", children: [_jsx(Error, {}), "Please complete all the required fields before submitting your survey.", _jsx(Error, {})] })), _jsx("div", { className: "flex justify-center", children: isValid ? (_jsx(ShadowButton, { value: "Submit", width: "2/5" })) : (_jsx(ShadowButton, { value: "Submit", color: "disabled", disabled: true, width: "2/5" })) }), submissionError && _jsxs("p", { className: "pt-4 text-center font-bold text-text", children: [_jsx(Warning, {}), " There was an error submitting"] })] }));
};
export default SubmitSurvey;
