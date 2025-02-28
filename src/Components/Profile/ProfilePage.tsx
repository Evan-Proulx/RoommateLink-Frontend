import Aside from "./Aside/Aside.tsx";
import ProfileComponents from "./ProfileComponents/ProfileComponents.tsx";

function ProfilePage() {
    return (
        <div className="flex overflow-y-auto h-screen bg-gray-300">
            <Aside />
            <div className="flex-1 ml-10 p-4">
                <ProfileComponents />
            </div>
        </div>
    );
}

export default ProfilePage;

