import AboutSection from "./AboutSection.tsx";
import InfoSection from "./InfoSection.tsx";
import VerificationBadge from "./VerifictionBadge.tsx";
import IdealRoommatePlace from "./IdealRoommate-Place.tsx";
import PlaceSection from "./PlaceSection.tsx";
import MapSection from "./MapSection.tsx";
import InterestedPeople from "./InterestedPeople.tsx";

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
            <PlaceSection/>
            <MapSection/>
            <InterestedPeople/>


        </div>
    )

}

export default ProfileComponents