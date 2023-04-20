import React, { useState } from "react";

export default function Dropdown(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={`border-2 font-bold p-4 ${open && "bg-accent text-black"}`}
      >
        {props.text}
      </div>
      <div
        className={`flex mt-4 items-center justify-center p-2 ${
          !open && "hidden"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
