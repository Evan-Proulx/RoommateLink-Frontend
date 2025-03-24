import {useEffect} from "react";

function ProfileImg({url, percentage}) {
    //Link Percentage
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
        <div className="flex flex-col items-center space-y-2">
            <img
                src={url ? url : "https://archive.org/download/instagram-plain-round/instagram%20dip%20in%20hair.jpg"}
                alt="User Profile"
                className="w-32 h-32 rounded-full shadow-md"
            />
            {percentage ? <label className={`text-center font-black text-3xl ${getTextColor(percentage)}`}>
                {percentage} % Link
            </label> : null}
        </div>

    );
}

export default ProfileImg;
