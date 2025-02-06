function Email() {

    return (
        <div className="flex flex-col space-y-4 flex-1 mt-2">
            <label className="font-bold text-red-500 mb-1">Email</label>
            <input
                type="email"
                className="border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
        </div>
    )
}

export default Email