function Video() {

    {/* This component displays user's video*/}



    return (
        <div className="flex flex-col items-center mt-10 mb-10">
            <h1 className="text-3xl font-bold mb-4">My Video</h1>
            <iframe
                width="100%"
                height="auto"
                className="max-w-4xl"
                src="https://www.youtube.com/embed/p9jJX-BBbLo"
                title="My Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>


    )
}

export default Video