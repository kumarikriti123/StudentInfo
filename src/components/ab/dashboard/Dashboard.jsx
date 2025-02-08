import { Link, Navigate, Outlet } from "react-router-dom";
import Button from "../Button"
import { Card } from "./Card"
import dummyData from "../Data/data";
import { useState,useEffect } from "react";

export const Dashboard = () => {
    const [data, setData] = useState(dummyData);
    const [selectedBranch, setSelectedBranch] = useState(null);

  useEffect(() => {
    if (data.branches.length > 0) {
      setSelectedBranch(data.branches[0].id);
    }
  }, [data]);

  const handleClick = (id) => {
    setSelectedBranch(id)
    Navigate('/student/:batchId');
  } 

  return (
    <div className="m-5 mt-28">
        <h1 className="text-3xl font-bold text-gray-800 mb-6"> Dashboard</h1>
        <div className="w-full flex  bg-gray-100  p-2 md:p-3 rounded-xl shadow-lg my-2 md:my-4 overflow-x-auto overflow-y-hidden " >
            {data.branches.map((branch,index)=>(
                <Button 
                  key={index}
                  label={branch.name} 
                  className={`min-w-fit text-xl transition-all duration-300 hover:scale-101 hover:shadow-black hover:shadow-md ${selectedBranch === branch.id ? "transition-all duration-30 scale-101 shadow-black shadow-md" : ""
                  }`}
                  onClick={() => handleClick(branch.id)}
                />  
            ))}
        </div>
        <div className="mt-10">
            {selectedBranch && data.branches.find((branch) => branch.id === selectedBranch) ?.batches.map((batch) => (
              <Link key={batch.id} to={`/batchDetail/${batch.id}`}>
                <Card data={batch} />
              </Link>
            ))}
        </div>
    </div>
  )
}