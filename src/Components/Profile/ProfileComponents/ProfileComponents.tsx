import AboutSection from "./AboutSection.tsx";
import InfoSection from "./InfoSection.tsx";
import VerificationBadge from "./VerifictionBadge.tsx";

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




        </div>
    )

}

export default ProfileComponents