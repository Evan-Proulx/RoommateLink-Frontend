function Name() {
    return (
        <div className="flex flex-row space-x-4 max-w-3xl mx-auto m-4">
            <div className="flex flex-col space-y-4 flex-1">
                <label className="block mb-2 header3-text inter">First Name</label>
                <input
                    type="text"
                    className="p-2 mt-1 bg-white border-2 border-black text-gray-900 rounded-lg block w-full"
                />
            </div>

            <div className="flex flex-col space-y-4 flex-1">
                <label className="block mb-2 header3-text inter">Last Name</label>
                <input
                    type="text"
                    className="p-2 mt-1 bg-white border-2 border-black text-gray-900 rounded-lg block w-full"
                />
            </div>
        </div>
    );
}

export default Name;
