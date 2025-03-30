import React, {useEffect} from 'react';
import ReactDom from 'react-dom'
import UpdateProfile from "../UpdateProfile.tsx";

const UpdateModal = ({open, close, children}) => {
    if (!open) return null

    useEffect(() => {
        console.log("MODAL")
    }, [])

    return ReactDom.createPortal(
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
            onClick={close}>
            <div
                className="relative bg-white rounded-lg shadow-xl z-50"
                onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default UpdateModal;