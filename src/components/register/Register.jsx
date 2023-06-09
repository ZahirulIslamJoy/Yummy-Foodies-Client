import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FaExclamationCircle } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const [error,setError]=useState(null);
    const [success,setSuccess]=useState(null);
        
    const {creatUserWithEP,setUser,logOut}=useContext(AuthContext);

    const navigate=useNavigate();
    const state = "/login";

    

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        const photo=event.target.photo.value;

        

        if(name.length==0 || email.length==0 || password.length==0 || photo.length==0 ){
            setSuccess(null);
            setError('Unsuccessfull,Please fill  all the input fields and try again');
            return;
        }

        if(password.length < 6){
          setSuccess(null);
          setError('Password Length must be minimum 6 character');
          return;
        }

        creatUserWithEP(email,password)
        .then((user) => {
            updateNamePhoto(user,name,photo);
            setError(null);
            setSuccess('Account Has been Created Succesfully');
            event.target.reset();
            setUser(user);
            logOut();
            navigate(state,{replace:true});
          })
          .catch((error) => {
            const errorMessage = error.message;
            setSuccess(null);
            setError(errorMessage);
            console.log(errorMessage);
          });
    }


    const updateNamePhoto=(user,name,photo)=>{
      updateProfile(user.user, {
        displayName:name, photoURL:photo
      }).then(() => {
      }).catch((error) => {
      });
    }


  return (
    <div>
      <div className="bg-cover  py-16 bg-no-repeat bg-center h-screen" style={{backgroundImage: "url('images/banner-bg1.jpg')", opacity: 0.7}}>
        <h1 className="text-center text-4xl ">Please Register Here!!!!</h1>
        <div className="w-1/2 mt-6   mx-auto">
          <form onSubmit={handleFormSubmit} action="">
          <div className="relative mt-5 z-0">
              <input
                type="text"
                name="name"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative mt-5 z-0">
              <input
                type="email"
                name="email"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative mt-5 z-0">
              <input
                type="password"
                name="password"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative mt-5 z-0">
              <input
                type="text"
                name="photo"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Photo Url
              </label>
            </div>
            
            <button
              type="submit"
              className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Register
            </button>
          </form>
          <p className="mt-2 text-gray-100">Already have an account?<Link to='/login'><span className="bg-blue-700 p-1 rounded-xl text-white cursor-pointer ">Login</span></Link></p> 
          <div>
              {
                error?
                 <div className="flex bg-blue-100 p-1 rounded-xl mt-2 items-center gap-2">
                      <div className="text-red-600">
                        <FaExclamationCircle></FaExclamationCircle>
                      </div>
                      <div className="text-red-600">
                          {error}
                      </div>
                </div>
                :""
              }
          </div>
          <div>
              {
                success?
                 <div className="flex mt-2 items-center gap-2">
                      <div className="text-green-600">
                        <FaCheckSquare></FaCheckSquare>
                      </div>
                      <div className="text-green-600">
                          {success}
                      </div>
                </div>
                :""
              }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
