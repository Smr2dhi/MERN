import Card from '@/components/Card';
import MyButton from '@/components/MyButton';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-3xl mt-8'>Welcome to Home</h1>

      <p style={{ color: 'red', textAlign: 'center', fontSize: 40 }}>
        Using Inline CSS
      </p>

      <br />
      <hr />
      <input type="text" />

      <div className='m-10 grid grid-cols-3 gap-4'>
        <Card image="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/u/w/z/-original-imahbkyjq9kpeq4b.jpeg?q=70"
            title={"Boat Chrome Horizon"}
            price={3599}
            category={"Smart Watch"}
        />

        <Card image="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/h/s/-original-imagpxgqj6x2zkhe.jpeg?q=70"
          title={"Asus Vivobook 15"}
          price={45990}
          category={"Laptop"}
        />

        <Card image="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/h/s/-original-imagpxgqj6x2zkhe.jpeg?q=70"
          title={"Asus Vivobook 15"}
          price={45990}
          category={"Laptop"}
        />



      </div>

      <MyButton>Submit</MyButton>
      <MyButton>Click me</MyButton>


    </div>
  )
}

export default Home;