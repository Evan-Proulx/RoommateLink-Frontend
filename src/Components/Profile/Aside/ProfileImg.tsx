function ProfileImg() {


    //Link Percentage
    const percentage = 97;


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
        <div className="flex flex-col items-center justify-center space-y-4 flex-1 mt-2 w-60 mb-10">
            <img
                src="https://cdn-icons-png.flaticon.com/256/11748/11748483.png"
                alt="User Profile"
                className="w-40 h-40 rounded-full shadow-md object-cover"
            />
            <label className={`w-full mr-2 text-center font-semibold text-4xl ${getTextColor(percentage)}`}>
                {percentage} % Link
            </label>
        </div>

    );
}

export default ProfileImg;
