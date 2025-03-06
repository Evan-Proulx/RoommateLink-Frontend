import React from "react";

const FirstSection = () => {
    return (
        <section className="bg-gradient-to-r from-white to-yellow-100 text-center py-10 pl-0 pr-10">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl m-3 pb-12 font-bold text-red-600">RoommateLink</h1>
                <h1 className="text-4xl font-bold text-red-600">Find the Perfect Roommate or Place with Ease!</h1>

                <div className="flex items-center justify-between mt-8 max-w-6xl mx-auto">
                    <div className="max-w-2xl">
                        <div className="bg-yellow-100 w-[450px] p-10 rounded-lg shadow-lg m-5">
                            <p className="text-2xl font-semibold text-red-600">
                                Join thousands of users finding their ideal roommates and housing. Safe, fast, and hassle-free!
                            </p>
                        </div>


                        <button className="mt-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600">
                            Join Now
                        </button>
                    </div>
                    <div>
                        <img src="/src/Components/LandingPage/img1.jpg" alt="Create Profile" className="mx-auto mb-4 p-5" style={{ width: '520px', filter: 'blur(2px)' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};





const LandingPage = () => {
    return (
        <div>
            <FirstSection />

        </div>
    );
};

export default LandingPage;
