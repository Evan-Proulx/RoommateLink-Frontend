import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {UserProfile} from "../../../ProfileData";


const InterestedPeople = ({interestedPeople}) => {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    const maxDisplay = 7;

    const navigate = useNavigate();
    // const displayedUsers = users.slice(0, maxDisplay);
    // const remainingUsers = users.length - displayedUsers.length;


    useEffect(() => {
        console.log("FjdkslFJKLDS",interestedPeople)
    }, [interestedPeople]);



    const navigateToProfile = (profile: UserProfile) => {
        //This refreshes the page. Without it the /profile navigation
        // doesn't work since you're already on the profile page
        navigate(0);
        //Navigate back to the profile page with the profile
        navigate('/profile', {state: {profile: profile, myProfileDisplayed: false}});
    }
    return (
        <div className="sm:p-2">
            <h1 className="sm:text-xl font-bold">Interested Users</h1>
            <div className="bg-gray-200 p-1 m-2 max-w-[500px] rounded-3xl shadow-lg">
                <div className="flex flex-wrap gap-4 ">
                    {interestedPeople && interestedPeople.length > 0 ? (
                        interestedPeople.slice(0, maxDisplay).map((user) => (
                            <div key={user.personalData.account_id} title={user.profileData.first_name + " " + user.profileData.last_name}
                                 onClick={() => navigateToProfile(user)} className="flex flex-col items-center gap-2 cursor-pointer">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={imgUrl + user.profileData.profile_picture || '/default-profile.png'}
                                    alt={user.personalData.first_name || 'Interested user'}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 sm:p-2 p-1">No interested users yet</p>
                    )}
                </div>
            </div>
        </div>

    );
};

export default InterestedPeople;
