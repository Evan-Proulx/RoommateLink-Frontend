import Aside from "./Aside/Aside.tsx";
import ProfileComponents from "./ProfileComponents/ProfileComponents.tsx";

function ProfilePage() {
    return (
        <div className="flex">
            <Aside />

            <div className="ml-64 flex-1 overflow-y-auto h-screen p-4">
                <ProfileComponents />
            </div>
        </div>
    );
}

export default ProfilePage;
