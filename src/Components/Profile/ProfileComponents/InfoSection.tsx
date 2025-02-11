function InfoSection() {

    //Link Percentage
    const percentage = 77;


    const getTextColor = (percentage) => {
        if (percentage >= 80) {
            return 'text-green-500'; // Green for 80-100%
        } else if (percentage >= 65) {
            return 'text-orange-500'; // Orange for 65-79%
        } else {
            return 'text-red-500'; // Red for 64 and below
        }
    };

    return (
        <div>
            <h1 className="text-5xl font-bold m-5 text-center">John Lastname</h1>
            <div className="flex justify-center items-center space-x-4">
                <h3 className="text-2xl font-bold">Male, </h3>
                <h3 className="text-2xl font-bold">26 Years Old</h3>
            </div>

            <div className="bg-white border border-black p-2 flex justify-center items-center m-5">
                <label className={`text-center font-semibold text-2xl ${getTextColor(percentage)}`}>
                    {percentage} % Link
                </label>
            </div>





        </div>
    )

}

export default InfoSection