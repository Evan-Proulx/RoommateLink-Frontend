import AboutSection from "./AboutSection.tsx";
import InfoSection from "./InfoSection.tsx";
import VerificationBadge from "./VerifictionBadge.tsx";
import IdealRoommatePlace from "./IdealRoommate-Place.tsx";

function ProfileComponents() {

    return (
        <div>
            <InfoSection/>
            <VerificationBadge
                isIDVerified={true}
                isPhoneVerified={true}
                isEmailVerified={true}
                isVideoVerified={true}
            />
            <AboutSection/>

            <IdealRoommatePlace isLookingForRoommate={true} />
            <IdealRoommatePlace isLookingForRoommate={false} />





        </div>
    )

}

export default ProfileComponents