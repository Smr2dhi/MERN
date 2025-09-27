import React from 'react'

const MyButton = ({children}) => {
    return (
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>
            {children}
        </button>
    )
};

export default MyButton;