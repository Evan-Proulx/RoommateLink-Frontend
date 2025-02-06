function Password() {

    return (
        <div className="flex flex-row space-x-4 max-w-3xl mx-auto mt-4">
            <div className="flex flex-col space-y-4 flex-1">
                <label className="font-bold text-red-500 mb-1">Password</label>
                <input
                    type="password"
                    className="border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>

            <div className="flex flex-col space-y-4 flex-1">
                <label className="font-bold text-red-500 mb-1">Repeat Password</label>
                <input
                    type="password"
                    className="border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>
        </div>
    )
}

export default Password