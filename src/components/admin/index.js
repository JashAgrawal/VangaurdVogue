import React, { useState } from "react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Pending", "Unshipped","Shipped","Deliverd"];
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex w-4/5 justify-between items-center border-b border-gray-900 px-16">
        {tabs.map((item, idx) => (
          <div
          onClick={()=>setActiveTab(idx)}
            key={idx}
            className={`p-4 px-6 ${
              activeTab == idx ? "border-b-4 border-accent" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex w-full h-[70vh] border justify-center items-center">

            <h1 className="tracking-wide text-2xl">No Orders here :(</h1>
      </div>
    </div>
  );
};

export default Admin;
