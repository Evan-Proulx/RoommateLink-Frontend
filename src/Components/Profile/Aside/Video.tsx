function Video() {
    {/* This component displays user's video */}

    return (
        <div className="flex justify-center mt-10 mb-5 space-x-4">
            {/* First video */}
            <iframe
                width="100px"
                height="150px"
                className="max-w-4xl"
                src="https://www.youtube.com/embed/p9jJX-BBbLo"
                title="My Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            {/* Second video */}
            <iframe
                width="100px"
                height="150px"
                className="max-w-4xl"
                src="https://www.youtube.com/embed/p9jJX-BBbLo"
                title="My Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Video;
