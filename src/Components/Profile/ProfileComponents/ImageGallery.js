import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Property Images
// Component to display an image gallery
import { useEffect, useState } from "react";
function ImageGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        console.log(images);
    }, []);
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
    return (_jsxs("div", { children: [images.length > 0 ? (_jsxs("div", { className: "grid grid-cols-2 gap-2 mt-2", children: [_jsx("div", { className: "col-span-1", children: _jsx("img", { src: images[0], alt: "Main Property", className: "w-full h-full object-cover rounded-lg cursor-pointer", onClick: () => openImage(0) }) }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [images.slice(1, 4).map((src, index) => (_jsx("img", { src: src, alt: `Property ${index + 2}`, className: "w-full h-24 object-cover rounded-lg cursor-pointer", onClick: () => openImage(index + 1) }, index))), images.length > 4 ? _jsxs("div", { className: "relative cursor-pointer", onClick: () => openImage(4), children: [_jsx("img", { src: images[4], alt: "More Properties", className: "w-full h-24 object-cover rounded-lg" }), _jsxs("div", { className: "absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center text-white font-bold text-lg", children: ["+", images.length - 4] })] }) : null] })] })) : (
            // No Images Message
            _jsx("div", { className: "flex justify-center items-center h-40 text-gray-500 font-semibold", children: "No images available" })), selectedImage && (_jsxs("div", { className: "fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50", onClick: closeModal, children: [_jsx("button", { className: "absolute left-4 text-white text-3xl", onClick: prevImage, children: "\u276E" }), _jsx("img", { src: selectedImage, alt: "Enlarged", className: "max-w-full max-h-[90vh] rounded-lg shadow-lg" }), _jsx("button", { className: "absolute right-4 text-white text-3xl", onClick: nextImage, children: "\u276F" })] }))] }));
}
export default ImageGallery;
