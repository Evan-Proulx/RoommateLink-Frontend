import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FlagOutlined } from "@mui/icons-material";
function ReportBtn({ onReportClicked }) {
    return (_jsxs("button", { onClick: onReportClicked, type: "button", className: "flex items-center text-white bg-gray-600\r\n            hover:bg-gray-700\r\n            font-medium rounded-lg text-sm px-6 py-3 text-center\r\n            min-w-[160px] w-full m-5 transition-all duration-300 pr-9.5", children: [_jsx(FlagOutlined, { className: "me-4" }), "Report User"] }));
}
export default ReportBtn;
