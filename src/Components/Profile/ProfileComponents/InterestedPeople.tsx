import {useEffect} from "react";
const InterestedPeople = ({interestedPeople}) => {
    const imgUrl = import.meta.env.VITE_ROOT_URL + "/storage/";
    const maxDisplay = 7;

    // const displayedUsers = users.slice(0, maxDisplay);
    // const remainingUsers = users.length - displayedUsers.length;


    useEffect(() => {
        console.log("FjdkslFJKLDS",interestedPeople)
    }, [interestedPeople]);

    return (
        <div className="p-2">
            <h1 className="text-xl font-bold mt-2 mb-2">Interested Users</h1>
            <div className="bg-gray-200 p-1 m-2 max-w-[500px] rounded-3xl shadow-lg">
                <div className="flex flex-wrap gap-4 justify-center">
                    {interestedPeople && interestedPeople.length > 0 ? (
                        interestedPeople.slice(0, maxDisplay).map((user) => (
                            <div key={user.id} title={user.name} className="flex flex-col items-center gap-2">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={imgUrl + user.profile_picture || '/default-profile.png'}
                                    alt={user.name || 'Interested user'}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 p-2">No interested users yet</p>
                    )}
                    {/*{remainingUsers > 0 && (*/}
                    {/*    <div className="flex flex-col items-center gap-2">*/}
                    {/*        <div className="w-10 h-10 rounded-full flex items-center justify-center ml-2 text-xl">*/}
                    {/*            <span className="mr-1">+{remainingUsers}</span> <span>more</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </div>
            </div>
        </div>

    );
};

export default InterestedPeople;
