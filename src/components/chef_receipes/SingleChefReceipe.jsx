import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRecordVinyl } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import FamousReceipeCard from "./FamousReceipeCard";
import Loader from "../loader/Loader";

const SingleChefReceipe = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [receipeData, setReceipeData] = useState();
    const { id } = useParams();
 

    //loading chefReceipe data using useEffect
    useEffect(() => {
        fetch(`https://yummy-foodies-server-zahirulislam-cse.vercel.app/chefReceipe/${id}`)
          .then((res) => res.json())
          .then((data) => setReceipeData(data));
          setIsLoading(false);
      }, []);

  return (
        <div>
            {
                isLoading?<Loader></Loader>:
                <div>
                {
                    receipeData && <div className="w-[85%] mx-auto ">
                    <h1 className="text-4xl text-center mt-8">Chef Details</h1>
                  <div
                    className="flex mt-12 flex-col items-center bg-gray-500  rounded-lg shadow md:flex-row md:max-w-9xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <img
                      className="object-cover w-full rounded-t-lg h-370px  md:h-[450px]  md:w-96 md:rounded-none md:rounded-l-lg"
                      src={receipeData.chef_img}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                        {receipeData.chef_name}
                      </h5>
                      <p className="mb-3  font-medium text-black dark:text-gray-400">
                        Bio:{receipeData.bio}
                      </p>
                      <p className="mt-12 inline-flex items-center gap-3 text-2xl"> <FaRecordVinyl></FaRecordVinyl> Experience: {receipeData.experience}</p>
                      <p className="text-2xl inline-flex mt-4 items-center gap-3"> <FaServer></FaServer> Number of Receipes:  {receipeData.number_of_receipe} </p>
                      <p className="text-2xl mt-4 inline-flex items-center gap-3"> <FaHeart></FaHeart>Likes: {receipeData.likes} </p>
                    </div>
                  </div>
                        <p className="text-4xl mt-12 text-center">Famous Receipe of {receipeData.chef_name}</p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {
                                receipeData.recipes.map((singleReceipe,index)=><FamousReceipeCard data={singleReceipe} key={index}></FamousReceipeCard>)
                            }
                        </div>
                </div>
                }
            </div>
            }
        </div>
    
  );
};

export default SingleChefReceipe;
