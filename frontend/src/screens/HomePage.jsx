import React from 'react'
import NavBar from '../components/NavBar'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import ToDo from '../assets/ToDo.png'

import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {

  // const count = useSelector((state)=> state.counter)
  // const dispatch = useDispatch()

  // const Increase = () =>{
  //   dispatch(actions.increase(3))
  // }

  // const Decrease = () =>{
  //   dispatch(actions.decrease(3))
  // }

  return (
    <>
      <NavBar/>

       <div className="text-center mt-30 bg-gray-300">
          {/* <h1>{count}</h1>
          <h1>Count</h1>
          <div>
            <button onClick={()=> dispatch(actions.increase(10))} className="bg-green-500  py-2 text-white px-3 ">Increase</button>
            <button onClick={()=>dispatch(actions.decrease(10))} className="bg-red-500 py-2 text-white px-3 ">Decrease</button>
            <button onClick={()=>dispatch(actions.division(2))} className="bg-blue-500 py-2 text-white px-3 ">Division</button>
          </div> */} 

      <div className='min-h-screen   flex items-center justify-center mt-7 p-4'>
        <div className='w-full max-w-3xl bg-white shadow-lg overflow-hidden rounded-2xl'>
          <header className='bg-gradient-to-r from-gray-400 to-gray-500 text-black p-6'>
            <p className='text-2xl font-semibold italic mt-6 text-center'>Mange Your Task Efficiently and Effectivily</p>
            <img src={ToDo} alt="" className='flex  mx-auto h-75 p-4 rounded-3xl' /> 

          </header>
          <main className='p-6 space-y-6'>
            <AddTodo />
            <TodoList />
          </main>
        </div>
      </div>

    </div>

    </>

  ) 
}

export default HomePage
