function PlaceSection() {

    return (
        <div className="p-4">

            <h1 className="text-lg font-bold m-2 mb-2">Amenities</h1>

            <div className="bg-white p-4 m-2 border border-black max-w-[580px]">
            <ul className="space-y-2 text-black text-base list-inside">
                <li className="flex items-center">
                    <svg className="w-4 h-4 me-2 text-green-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    Internet
                </li>

                <li className="flex items-center">
                    <svg className="w-4 h-4 me-2 text-green-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    Laundry
                </li>

                <li className="flex items-center">
                    <svg className="w-4 h-4 me-2 text-green-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    Private Closet
                </li>
            </ul>
            </div>



                <h1 className="text-lg font-bold m-2 mb-2">Place's Images</h1>
            <div className="bg-white p-4 m-2 border border-black max-w-[580px]">
                <p>Displaying Images here</p>
            </div>



        </div>
    )

}

export default PlaceSection