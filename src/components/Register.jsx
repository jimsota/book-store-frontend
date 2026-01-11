import React, { useState} from 'react'
import {Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [message, setmessage] = useState("   ")
    const {registerUser, signInWithGoogle } = useAuth()
    console.log(registerUser)
     const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()

  
    const onSubmit = async (data) => {
      console.log(data)
      try{
          await registerUser(data.email, data.password)
          alert("User registered successfully!")
      } catch (error) {
        setmessage("Please Provide a valide email and password")
        console.error(error)
      }
    }
    const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle()
        alert("Login Successful!")
        navigate("/")
   } catch (error) {
     alert("Google signin failed")
     console.error(error)
   }
  
    }
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mxc-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="email">Email</label>
            <input
            {...register("email", { required: true })}
             type="email" name="email" id="email" placeholder="Email Address"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="password">Password</label>
            <input 
            {...register("password", { required: true })}
            type="password" name="password" id="password" placeholder="Enter your Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="Last Name">Last Name</label>
            <input 
            {...register("Last Name", { required: true })}
            type="Last Name" name="Last Name" id="Last Name" placeholder=" "
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"/>
          </div>
          {
            message && <p className="text-red-500 text-xs italic mb-3">{message}</p>
          }
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-6 py-1 rounded focus:outline-none">
              Register
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">Haven't an account? please <Link to="/login" className="text-blue-500 hover:text-blue-700">login</Link></p>
      
         {      }
         <div className="mt-4">
          <button 
          onClick={handleGoogleSignIn}
          className="w-full flex flex-wrap gap-1 items-center justify-center
          bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
          focus:outline-none">
          <FaGoogle className="mr-2"/>
          Sign in with Google
          </button>
         </div>  
         <p className="mt-5 text-center text-gray-500 text-xs">02025 Book Store. all right reserved</p>    
      </div>
    </div>
  )
}

export default Register
