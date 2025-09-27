'use client';

import React, { useState } from 'react'
const ToDoList = () => {
	//let count = 0;
	//const [count, setCount] = useState(0);

	const [taskList, setTaskList] = useState([
		{text:'Learn HTML',completed: false},
		{text:'Play Games',completed: false},
		{text:'Learn React',completed: false},

	]);

	const addTask = (e)=>{
	if(e.key === "Enter"){
		console.log(e.target.value);

		const newTask = {text:e.target.value, completed:false}
		setTaskList([newTask,...taskList]);
		console.log(taskList);

		e.target.value="";
		
		
	}
	
	}

	return (
		<div className='min-h-screen bg-gray-100 p-5'>
			{/* <h1 className='text-3xl'>{count}</h1>
			<button className='border-none p-3 rounded-2xl bg-pink-500 text-white ' onClick={() => {
				setCount(count+1); console.log(count);
			}}>Add Count</button> */}
			<div className='container mx-auto'>
				<h1 className='text-center font-bold text-3xl'>ToDoList</h1>
				<div className='rounded border mt-10 bg-white'>
					<div className='p-5'>
						<input type="text" 
						onKeyDown={addTask}
						placeholder='Add task here'
						className="border p-2 w-full rounded" />

					</div>
					<div className='border-t-1 p-5'>
						{/* <p className='text-center font-bold text-gray-500'>
							No ToDo's to show here
						</p> */}

						{
							taskList.map((task,index)=>{
								return <div key={index} className='flex justify-between items-center border-5 p-5 mb-4 rounded-md'
								 style={{borderColor:task.completed ? 'green' :'pink'}}>
								<div>
									<input type="checkbox" 
									checked={task.completed}  
									onChange={(e)=>{
										const temp = taskList;
										temp[index].completed = e.target.checked;
										setTaskList([...temp]);
									}}
									
									/>
									<p>{task.text}</p>
								</div>
									<button className='bg-red-600 text-white border p-3 text-white rounded'>
										Delete
									</button>
								</div>
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ToDoList
