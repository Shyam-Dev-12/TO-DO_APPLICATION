import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'


import Login from './screens/Login.jsx'
import SignUp from './screens/SignUp.jsx'
import HomePage from './screens/HomePage.jsx'
import UpdateTodo from './screens/UpdateTodo.jsx'

import NavBar from './components/NavBar.jsx'
import AddTodo from './components/AddTodo.jsx'  
import TodoList from './components/TodoList.jsx'
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


function App() {
 
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss theme="light" />
        <Routes>

                {/* SCREENS */}

          <Route path='/signup' element = {<SignUp /> } />
          <Route path='/' element = {<Login /> } />
          <Route path='/homepage' element = {<HomePage /> } />
          <Route path='/update/:id' element = {<UpdateTodo /> } />


                  {/* COMPONENTS */}

          <Route path='/navbar' element = {<NavBar /> } />
          <Route path='/addtodo' element = {<AddTodo /> } />
          <Route path='/todolist' element = {<TodoList /> } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

