import {FlagOutlined} from "@mui/icons-material";

function ReportBtn({onReportClicked}) {
    return (
        <button onClick={onReportClicked}
            type="button"
            className="flex items-center text-white bg-gray-600
            hover:bg-gray-700
            font-medium rounded-lg text-sm px-6 py-3 text-center
            min-w-[160px] w-full m-5 transition-all duration-300 pr-9.5">
            {/* Flag Icon */}
            <FlagOutlined className={"me-4"}/>
            Report User
        </button>
    );
}

export default ReportBtn;
