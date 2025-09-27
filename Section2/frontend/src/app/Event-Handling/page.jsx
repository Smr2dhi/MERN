'use client';
import React from 'react'

const EventHandling = () => {

    return (
        <div className='h-screen' onMouseMove={ (e) => { 
			const box= document.getElementById('box');
			box.style.left =e.pageX-10 +'px';
			box.style.top =e.pageY-10+'px';

		}}>
            <h1 className='text-center mt-10 text-3xl font-bold'>
                Event Handling
            </h1>
			<div  id='box' className='bg-red-500 size-10 rounded-full absolute'>
				
			</div>

            <div className='container mx-auto mt-10'>
                <button className='border p-3'
                    onClick={() => alert('button was clicked')}
                >
                    Click Me
                </button>

                <input type="text"
                    className='border p-3 ml-5'
                    onChange={(e) => console.log(e.target.value)}
                />

				  <input type="text"
                    className='border p-3 ml-5'
                    onKeyDown={(e) => console.log(e.code)}
                />
            </div>
        </div>
    )
}

export default EventHandling;