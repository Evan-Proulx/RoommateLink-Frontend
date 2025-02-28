function InterestedPeople() {

    {/* This component displays a list of users that match with this user. */}


    return (
        <div className="p-4">

            <h1 className="text-lg font-bold m-2 mb-2">Interested People</h1>

            <div className="bg-white p-4 m-2 border border-black max-w-[580px]">

                <div className="flex flex-wrap gap-4 justify-center">

                    <div className="flex flex-col items-center gap-2">
                        <img className="w-10 h-10 rounded-full"
                             src="https://cdn-icons-png.flaticon.com/256/11748/11748483.png"
                             alt="Profile" />

                        <div className="font-medium dark:text-black">
                            <div>First & last Name</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InterestedPeople;
