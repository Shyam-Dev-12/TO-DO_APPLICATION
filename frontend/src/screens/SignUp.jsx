import React, { useState } from "react";
import "./SignUp.css";
import { Link , useNavigate } from "react-router-dom";
import Login from "./Login";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation } from '../Slices/userApiSlice.jsx';

export const SignUp = () => {

  const [name, setName] =useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");

  const [registerUser] = useRegisterUserMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser({ name, email, password }).unwrap();
      toast.success("User registered successfully!"
      );

      navigate("/");
    } catch (error) { 
      toast.error(error?.data?.message || "Failed to register user"
      );
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            TO-DO APP
          </h2>
          <p className="text-center text-teal-900 mt-2">
            {" "}
            Create Your Account to get started
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
              <input onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                id="password"
                placeholder="Enter Your Password"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 p-3 w-full hover:text-white hover:bg-black border border-black rounded-lg"
            >
              Register
            </button>

            <p className="text-sm mt-3 text-center text-gray-600">
              Already Have an acoount?
              <Link to="/" className="text-black hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;