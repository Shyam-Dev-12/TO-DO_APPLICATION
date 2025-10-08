import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { toast } from 'react-toastify'
import { useAddTodoMutation } from '../Slices/todoApiSlice.jsx'

 const AddTodo = () => {

    const [title, setTitle] = useState("")
    const [descr, setDescription] = useState("")
    const [status, setStatus] = useState("")

    const [ addTodo ] = useAddTodoMutation();

    const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(!title || !descr) {
      toast.error ("Title and Description are required!");
    }else{
    try{
      await addTodo({ title, descr, status }).unwrap();
      setTitle("")
      setDescription("");
      setStatus("pending");
      toast.success("Todo added successfully!");
    }catch (error) {
      toast.error("Error while adding Todo");
      }
    }
  }

  return (
    
    <>

      <NavBar />

      <div className='flex justify-center items-center mt-45 '>
        <form onSubmit={handleSubmit} className='bg-gray-50 p-10 rounded-lg shadow border border-gray-300 '>
          <h2 className='text-2xl font-semibold text-gray-700 mb-4 text-center'>Add a New Todo</h2>
          <div>

              <div>
                  <label className='block text-sm font-medium text-gray-600'>Title</label>
                  <input 
                      value={title}
                      onChange={ (e) => setTitle(e.target.value) }
                      type="text" 
                      placeholder='Enter Your Title'
                      className='w-full mt-1 px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500'
                  />
              </div>

              <div className='my-3'>
                  <label className='block text-sm font-medium text-gray-600'>Description</label>
                  <textarea 
                  value={descr}
                      onChange={ (e) => setDescription(e.target.value) }
                      placeholder='Enter Your Description'
                      className='w-full mt-1 px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 rows-3'>
                  </textarea>
              </div>

              <div className='mb-3'>
                <label className="block text-sm font-medium text-gray-600">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500"
                >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                </select>
              </div>

              <button 
                  type='submit' 
                  className='w-full hover:bg-gradient-to-r to-gray-600 from-gray-500 border border-gray-500  text-clack py-2 
                  rounded-lg shadow-sm transform hover:scale-110 transition-transform '>ADD TODO</button>

          </div>
        </form>
      </div>

    </>
  )
}

export default AddTodo

// bg-gradient-to-r to-gray-600 from-gray-500
// hover:bg-black hover:text-white