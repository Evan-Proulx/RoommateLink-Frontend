import Aside from "./Aside/Aside.tsx";
import ProfileComponents from "./ProfileComponents/ProfileComponents.tsx";

function ProfilePage() {
    return (
        <div className="flex overflow-y-auto h-screen">
            <Aside />
            <div className="flex-1 ml-40 p-4">
                <ProfileComponents />
            </div>
        </div>
    );
}

export default ProfilePage;

