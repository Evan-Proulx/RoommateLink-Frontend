function Email() {

    return (
        <div className="flex flex-col space-y-4 flex-1 mt-2">
            <label className="block mb-2 header3-text inter">Email</label>
            <input
                type="email"
                className="p-2 mt-1 bg-white border-2 border-black text-gray-900 rounded-lg block w-full"
            />
        </div>
    )
}

export default Email