import * as React from 'react';
interface LoginPopupProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const LoginPopup: React.FC<LoginPopupProps>;
export default LoginPopup;
