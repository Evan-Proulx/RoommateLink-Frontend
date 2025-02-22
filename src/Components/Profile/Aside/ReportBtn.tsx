function ReportBtn() {
    return (
        <button
            type="button"
            className="flex items-center text-white bg-black border border-black
            hover:bg-black hover:text-red-600 hover:border-black
            font-medium rounded-lg text-sm px-6 py-3 text-center
            min-w-[160px] m-5 transition-all duration-300 pr-9.5"
        >
            {/* Flag Icon */}
            <svg
                className="w-5 h-5 me-4 transition-all duration-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 14v7M5 4.971v9.541c5.6-5.538 8.4 2.64 14-.086v-9.54C13.4 7.61 10.6-.568 5 4.97Z"
                    className="stroke-white hover:stroke-red-600 transition-all duration-300"
                />
            </svg>

            Report User
        </button>
    );
}

export default ReportBtn;
