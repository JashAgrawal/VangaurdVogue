import React, { useState } from "react";
import char from "../../assests/char.png";
import Orders from "../../components/Account/Orders";
import PersonalInfo from "../../components/Account/PersonalInfo";
import Image from "next/image";
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
        <div className="flex w-full lg:p-8 p-4 border-b-2 items-center justify-between">
          <h1 className="text-3xl">Your Account</h1>
          <button className="text-center rounded-full border-2 border-black   bg-accent px-6 py-3 text-base font-medium shadow-sm hover:bg-black hover:border-accent">
            Sign Out
          </button>
        </div>
        <div className="flex max-md:flex-col m-6 lg:p-6 p-1 justify-center max-md:items-center">
          <div className="md:hidden">
            <Image
              src={char}
              className="w-48  h-48 rounded-full border"
              alt="user"
            ></Image>
            <h1 className="text-3xl w-full text-center">Jash Agrawal</h1>
          </div>
          <div className="flex max-md:flex-row [&>*]:my-3 lg:max-h-[70vh] flex-col justify-center items-center max-md:items-stretch lg:w-2/5">
            <Image
              src={char}
              className="w-48 max-md:hidden h-48 rounded-full border"
              alt="user"
            ></Image>
            <h1 className="text-3xl max-md:hidden">Jash Agrawal</h1>
            <div
              className={`lg:w-48 text-center font-bold p-6 border-2 max-md:mx-2 rounded-xl ${
                active === 1 && "bg-white border-accent text-accent"
              }`}
              onClick={() => setActive(1)}
            >
              <h1>Personal Information</h1>
            </div>
            <div
              className={`lg:w-48 text-center font-bold p-6 border-2 max-md:mx-2 rounded-xl ${
                active === 2 && "bg-white border-accent text-accent"
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
