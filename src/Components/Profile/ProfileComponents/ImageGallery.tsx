// Property Images
// Component to display an image gallery
import React, {useContext, useEffect, useState} from "react";
function ImageGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Open the model with the selected image
    const openImage = (index) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    // Close the model
    const closeModal = () => {
        setSelectedImage(null);
    };

    // Navigate to the previous image
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        setSelectedImage(images[currentIndex > 0 ? currentIndex - 1 : images.length - 1]);
    };

    // Navigate to the next image
    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        setSelectedImage(images[currentIndex < images.length - 1 ? currentIndex + 1 : 0]);
    };

    return (
        <div>
            {/* Image Grid */}
            {images.length > 0 ? (
                <div className="grid grid-cols-2 gap-2 mt-2">
                {/* Main Large Image */}
                    <div className="col-span-1">
                        <img
                            src={images[0]}
                            alt="Main Property"
                            className="w-full h-full object-cover rounded-lg cursor-pointer"
                            onClick={() => openImage(0)}
                        />
                    </div>

                    {/* Smaller Images */}
                    <div className="grid grid-cols-2 gap-2">
                        {images.slice(1, 4).map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Property ${index + 2}`}
                                className="w-full h-24 object-cover rounded-lg cursor-pointer"
                                onClick={() => openImage(index + 1)}
                            />
                        ))}

                        {/* Last image with overlay for extra images */}
                    {images.length > 4 ? <div className="relative cursor-pointer" onClick={() => openImage(4)}>
                        <img src={images[4]} alt="More Properties" className="w-full h-24 object-cover rounded-lg"/>
                        <div
                            className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-white font-bold text-lg">
                            +{images.length - 4}
                        </div>
                    </div> : null}
                </div>
            </div>
            ) : (
                // No Images Message
                <div className="flex justify-center items-center h-40 text-gray-500 font-semibold">
                    No images available
                </div>
            )}

            {/* Modal for Enlarged Image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <button className="absolute left-4 text-white text-3xl" onClick={prevImage}>&#10094;</button>
                    <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-[90vh] rounded-lg shadow-lg" />
                    <button className="absolute right-4 text-white text-3xl" onClick={nextImage}>&#10095;</button>
                </div>
            )}
        </div>
    );
}

export default ImageGallery;