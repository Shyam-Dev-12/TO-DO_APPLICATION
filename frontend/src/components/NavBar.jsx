import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ToDo from '../assets/ToDo.png'
import AddTodo from './AddTodo'
import { useLogoutMutation } from '../Slices/userApiSlice.jsx'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Slices/authSlice.jsx'

const NavBar = () => {

  const user = useSelector((state) => state.auth.userInfo);

   const navigate = useNavigate();

  const [logoutMutation] = useLogoutMutation();
  const dispatch = useDispatch();

  const logoutHandler = async ( e ) =>{
    navigate("/")
    e.preventDefault();

    try {
      const res = await logoutMutation()
      toast.success( "Logged out successfully!");
      dispatch(logout(res));
      } catch (error) {
      toast.error( error?.data?.message || "Failed to log out");
    }
  }


  return (
    <>

      <div className="flex justify-between fixed top-0 right-0 left-0  bg-black p-8">
        <h1 className='text-white text-2xl font-medium italic'>To-Do App</h1>
        <div className="flex gap-5  text-white font-medium">
          <Link to="/homepage" className='hover:text-gray-600 transition duration-500 '>HOME</Link>
          <Link to="/addtodo" className='hover:text-gray-600 transition duration-500 '>ADD_TODO</Link>
          <Link to="/todolist" className='hover:text-gray-600 transition duration-500'>LIST_TODO</Link>
          
          <div className="relative group inline-block">
            <p className="cursor-pointer hover:text-gray-600 transition duration-300 text-center">SIGN</p>

            <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex flex-col bg-white text-black border rounded shadow p-2 z-50 min-w-[100px] items-center">
              <Link to="/" className="hover:text-gray-600">LOGIN</Link>
              <Link to="/signup" className="hover:text-gray-600">SIGN_UP</Link>
            </div>
          </div>
          
          
          {/* <p className=''><Link to="/Profile">PROFILE</Link></p> */}
          <span className=''>{user.name} </span>
          <button onClick={logoutHandler} className='bg-black rounded p-1 border border-white hover:bg-white hover:text-black' >LOG_OUT</button>

        </div>
      </div>

      {/* <div class="flex justify-center items-center h-screen">
        <img src={ToDo} alt="" className='h-75' />
      </div> */}
    </>  
  )
}

export default NavBar
