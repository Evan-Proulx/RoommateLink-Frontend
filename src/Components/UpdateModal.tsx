import React, {useEffect} from 'react';
import ReactDom from 'react-dom'
import UpdateProfile from "./Profile/UpdateForms/UpdateProfile.tsx";
import {Close} from "@mui/icons-material";

const UpdateModal = ({open, close, children}) => {
    if (!open) return null

    useEffect(() => {
        console.log("MODAL")
    }, [])

    return ReactDom.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={close}>
            <div className="relative bg-white rounded-lg shadow-xl z-50"
                onClick={(e) => e.stopPropagation()}>
                <button onClick={close} className="absolute top-3 right-3 hover:text-text">
                    <Close sx={{fontSize: 32}}/>
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default UpdateModal;