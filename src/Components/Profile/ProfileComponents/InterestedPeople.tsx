const users = [
    // Example user data
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",
    "https://cdn-icons-png.flaticon.com/256/11748/11748483.png",

];

const InterestedPeople = () => {
    const maxDisplay = 7;
    const displayedUsers = users.slice(0, maxDisplay);
    const remainingUsers = users.length - displayedUsers.length;

    return (
        <div className="p-2">
            <h1 className="text-xl font-bold mt-2 mb-2">Interested Users</h1>
            <div className="bg-gray-200 p-1 m-2 max-w-[500px] rounded-3xl shadow-lg">
                <div className="flex flex-wrap gap-4 justify-center">
                    {displayedUsers.map((user, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <img className="w-10 h-10 rounded-full" src={user} alt={`User ${index + 1}`} />
                        </div>
                    ))}
                    {remainingUsers > 0 && (
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center ml-2 text-xl">
                                <span className="mr-1">+{remainingUsers}</span> <span>more</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default InterestedPeople;
