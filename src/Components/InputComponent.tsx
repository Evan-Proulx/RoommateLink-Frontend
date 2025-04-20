import React from 'react';

const InputComponent = ({ label, type, value, onChange, placeholder }) => {
    return (
        <div>
            <div className="flex flex-col space-y-4 flex-1">
                <label className="block mb-2 header3-text inter">{label}</label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="p-2 mt-1 bg-white border-2 border-black text-gray-900 rounded-lg block w-full"
                />
            </div>
        </div>
    );
};

export default InputComponent;