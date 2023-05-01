import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" mt-7">
      <div className="w-1/2 mt-6   mx-auto">
        <form onSubmit='' action="">
          <div className="relative mt-5 z-0">
            <input
              type="email"
              name="email"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative mt-5 z-0">
            <input
              type="password"
              name="password"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
        <p>Don't have an account yet?<Link to='/register'><span className="text-blue-700 cursor-pointer ">Register</span></Link></p>
      </div>
      <h1 className="text-center text-2xl mt-3">Or</h1>
      <div className="flex items-center cursor-pointer  justify-center">
        <span className=" mt-5 flex gap-3 justify-center w-fit items-center p-2 rounded-md  bg-blue-800 hover:bg-blue-900">
            <FaGoogle></FaGoogle>
            <h1 className="text-2xl">Sign In With Google</h1>
        </span>
      </div>
      <div className="flex items-center cursor-pointer  justify-center">
        <span className=" mt-5 flex gap-3 justify-center w-fit items-center p-2 rounded-md  bg-green-700 hover:bg-green-900">
            <FaGoogle></FaGoogle>
            <h1 className="text-2xl">Sign In With Github</h1>
        </span>
      </div>
    </div>
  );
};

export default Login;