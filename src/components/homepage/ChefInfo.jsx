import React, { useEffect, useState } from "react";
import ChefInfoCard from "./ChefInfoCard";
import Loader from "../loader/Loader";

const ChefInfo = () => {
  const [chefInfoData, setChefInfoData] = useState();
  const [isLoading, setIsLoading] = useState(true);


  //destructure data for chef info
  useEffect(() => {
    fetch("https://yummy-foodies-server-zahirulislam-cse.vercel.app/chefinfo")
      .then((res) => res.json())
      .then((data) => setChefInfoData(data));
      setIsLoading(false);
  }, []);

  return (
        <div>
          {
            isLoading?<Loader></Loader>:<div className="mt-12">
            <h1 className="text-4xl mb-12 text-center">Select Your Best Chef Now</h1>
            <div className="grid  grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {chefInfoData &&
                chefInfoData.map((singleData) => (
                  <ChefInfoCard key={singleData.id} data={singleData}></ChefInfoCard>
                ))}
            </div>
          </div>
          }
        </div>
  );
};

export default ChefInfo;
