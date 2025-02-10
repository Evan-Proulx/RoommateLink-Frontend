function FavoriteBtn() {
    return (
        <button
            type="button"
            className="flex items-center text-red-700 bg-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-3 text-center min-w-[160px] m-5 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-400 dark:focus:ring-red-800"
        >
            <svg
                className="w-5 h-5 text-red-700 me-2"
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
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
            </svg>

            Bookmark
        </button>
    )
}

export default FavoriteBtn;

