import {Flag, FlagOutlined} from "@mui/icons-material";

function ReportBtn({onReportClicked}) {
    return (
        <button onClick={onReportClicked}
            type="button"
            className="flex items-center text-white bg-black border border-black
            hover:bg-black hover:text-red-600 hover:border-black
            font-medium rounded-lg text-sm px-6 py-3 text-center
            min-w-[160px] w-full m-5 transition-all duration-300 pr-9.5">
            {/* Flag Icon */}
            <FlagOutlined className={"me-4"}/>
            Report User
        </button>
    );
}

export default ReportBtn;
