import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../Slices/userApiSlice.jsx'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../Slices/authSlice.jsx'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Loginuser] = useLoginMutation();

  const handleSubmit =  async (e) => {
    e.preventDefault()
    
    try{
      const res = await Loginuser({ email, password }).unwrap();
      dispatch(setCredentials(res));
      toast.success( "User Login Sucessfully!")
      // console.log("User Login Sucessfully!")

      navigate("/addtodo");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to Login User"
      )
    // console.log("Failed Login !")
  }

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">TO-Do APP</h2>
        <p className="text-center text-gray-500 mt-2">Manage YOur Task Efficiently</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
            onChange={ (e) => setEmail(e.target.value)}
            type="email" id="email" required placeholder="abc@gmail.com" className="w-full mt-2 p-3 border border-gray-300  rounded-lg  focus:ring focus:ring-teal-500"/>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
            onChange={ (e) => setPassword(e.target.value) }
            type="password" 
            id="password" 
            required placeholder="" 
            className="w-full mt-2 p-3 border border-gray-300  rounded-lg  focus:ring focus:ring-teal-500"/>
          </div>

          <button type="submit"
              className="mt-4 p-3 w-full hover:bg-black hover:text-white border border-black rounded-lg" >
              LOGIN
          </button>
          

        </form>

        <p>Don't have an Account? <Link to="/signup" className='text-gray-500 hover:underline'>SignUp</Link> </p>

      </div>
    </div>
  )
}

export default Login