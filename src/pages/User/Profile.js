import React, { useState } from "react";
import char from "../../assests/char.png";
import Orders from "../../components/Account/Orders";
import OrdersHistory from "../../components/Account/OrdersHistory";
import PersonalInfo from "../../components/Account/PersonalInfo";
export default function Profile() {
  const [active, setActive] = useState(1);
  const showSection = (active) => {
    switch (active) {
      case 1:
        return <PersonalInfo />;
        break;
      case 2:
        return <Orders />;
        break;
      default:
        return <PersonalInfo />;
    }
  };
  return (
    <div>
      <div className="flex w-full flex-col">
        <div className="flex w-full p-12 border-b-2 items-center justify-between">
          <h1 className="text-3xl">Your Account</h1>
          <button className="text-center rounded-full border-2 border-black   bg-accent px-6 py-3 text-base font-medium shadow-sm hover:bg-black hover:border-accent">
            Sign Out
          </button>
        </div>
        <div className="flex m-6 p-6">
          <div className="flex [&>*]:my-3 flex-col justify-center items-center w-2/5">
            <img
              src={char}
              className="w-48 h-48 rounded-full border"
              alt="user"
            ></img>
            <h1 className="text-3xl">Jash Agrawal</h1>
            <div
              className={`w-48 text-center font-bold p-6 border-2 rounded-xl ${
                active === 1 && "bg-black border-accent"
              }`}
              onClick={() => setActive(1)}
            >
              <h1>Personal Information</h1>
            </div>
            <div
              className={`w-48 text-center font-bold p-6 border-2 rounded-xl ${
                active === 2 && "bg-black border-accent"
              }`}
              onClick={() => setActive(2)}
            >
              <h1>Orders and History</h1>
            </div>
          </div>
          {showSection(active)}
        </div>
      </div>
    </div>
  );
}
