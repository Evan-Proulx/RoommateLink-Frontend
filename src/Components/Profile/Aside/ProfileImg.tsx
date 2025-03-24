import {useEffect} from "react";

function ProfileImg({url}) {
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

    useEffect(() => {
        console.log(url)
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src={url ? url : "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg"}
                alt="User Profile"
                className="w-48 rounded-full shadow-md"
            />
            <label className={`text-center font-black text-3xl ${getTextColor(percentage)}`}>
                {percentage} % Link
            </label>
        </div>

    );
}

export default ProfileImg;
