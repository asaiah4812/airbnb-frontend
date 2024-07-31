import React from 'react';

interface button {
    title : String;
    onClick: () => void;
    className: String;
}

const CustomButton: React.FC<button> = ({title, onClick, className}) => {
    return (
        <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg bg-gradient-to-br text-white from-red-200 ${className} to-red-500 hover:bg-gradient-to-b`}>
            {title}
        </button>
    )
}

export default CustomButton