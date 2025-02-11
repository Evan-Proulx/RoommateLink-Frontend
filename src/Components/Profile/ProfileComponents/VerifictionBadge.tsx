import React from 'react';

function VerificationBadge({ isIDVerified, isPhoneVerified, isEmailVerified, isVideoVerified }) {
    return (
        <div className="flex flex-wrap gap-4 justify-center m-2">
            {/* ID Verification Badge */}
            {isIDVerified && (
                <span className="relative inline-flex items-center justify-center w-32 h-12 text-sm font-semibold text-white bg-blue-600 rounded-md group">
                    <label className="flex items-center text-center">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"/>
                        </svg>

                        ID Verified
                    </label>
                </span>
            )}

            {/* Phone Verification Badge */}
            {isPhoneVerified && (
                <span className="relative inline-flex items-center justify-center w-32 h-12 text-sm font-semibold text-white bg-blue-600 rounded-md group">
                    <label className="flex items-center text-center">
                        <svg className="w-5 h-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                        </svg>
                        Phone Verified
                    </label>
                </span>
            )}

            {/* Email Verification Badge */}
            {isEmailVerified && (
                <span className="relative inline-flex items-center justify-center w-32 h-12 text-sm font-semibold text-white bg-blue-600 rounded-md group">
                    <label className="flex items-center text-center">
                        <svg className="w-5 h-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16" width="24" height="24">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        Email Verified
                    </label>
                </span>
            )}

            {/* Video Verification Badge */}
            {isVideoVerified && (
                <span className="relative inline-flex items-center justify-center w-32 h-12 text-sm font-semibold text-white bg-blue-600 rounded-md group">
                    <label className="flex items-center text-center">
                        <svg className="w-5 h-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"/>
                        </svg>
                        Video Verified
                    </label>
                </span>
            )}
        </div>
    );
}

export default VerificationBadge;
