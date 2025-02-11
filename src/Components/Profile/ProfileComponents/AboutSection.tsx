function AboutSection() {
    return (
        <div className="p-4">
            <div className="bg-white p-4 m-2 border border-black max-w-[580px]">
                <ul className="space-y-2 text-black text-base list-inside">
                    <li className="flex items-center">
                        <svg className="w-4 h-4 me-2 text-green-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        Looking for a roommate
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
                        </svg>
                        Price/month: $600
                    </li>
                    <li className="flex items-center">
                        <svg className="w-4 h-4 me-2 text-green-500 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        Move Immediately
                    </li>
                </ul>
            </div>
            <h1 className="text-lg font-bold m-2 mb-2">About Me</h1>

            <div className="max-w-[580px] bg-white p-4 m-2 border border-black">
                <p className="text-base text-black">
                    Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
                </p>
            </div>
        </div>
    );
}

export default AboutSection;
