import React from 'react'
import MyButton from './MyButton';

const Card = ({ image,title,price,category}) => {
    return (
        <div className='border bg-white rounded-xl'>
            <img className='rounded-t-xl block mx-auto h-72 py-20' src={image} alt="" />
            <div className='p-4 space-y-3'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p>{category}</p>
                <p className='font-bold text-lg'>₹ {price}</p>  
               <div class='flex '>
				 <button className='block ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg'>
                    Buy Now
                </button>
				<button className='block ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg'>
                   Add to Cart
                </button>
			   </div>
            </div>

			
        </div>
    )
}

export default Card;