import {FlagOutlined} from "@mui/icons-material";

function ReportBtn({onReportClicked}) {
    return (
        <button
            onClick={onReportClicked}
            type="button"
            className="flex items-center justify-center text-white bg-gray-600
    hover:bg-gray-700
    font-medium rounded-lg sm:text-sm px-3 py-2 text-center
    sm:w-12 sm:h-12 w-8 h-8 sm:px-4 sm:py-3 sm:min-w-[160px] sm:m-5 transition-all duration-300"
        >
            {/* Flag Icon */}
            <FlagOutlined className={"me-0 sm:me-4"}/>
            <span className="hidden sm:inline">Report User</span>
        </button>
    );
}

export default ReportBtn;
