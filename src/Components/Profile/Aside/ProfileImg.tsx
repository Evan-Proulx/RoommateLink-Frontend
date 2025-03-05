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
        <div className="flex flex-col items-center justify-center mt-2">
            <img
                src="https://cdn-icons-png.flaticon.com/256/11748/11748483.png"
                alt="User Profile"
                className="w-32 rounded-full shadow-md"
            />
            <label className={`text-center font-black text-4xl ${getTextColor(percentage)}`}>
                {percentage} % Link
            </label>
        </div>

    );
}

export default ProfileImg;
