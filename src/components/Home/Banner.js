import React, { useEffect, useState } from "react";
export default function Banner(props) {
  const Images = [
    "https://media.discordapp.net/attachments/1075728414826307646/1075888659460538368/Kiaya_Desktop_Home_Page_Banner_01.webp",
    "https://media.discordapp.net/attachments/1075728414826307646/1075888659821236324/Kiaya_Desktop_Home_Page_Banner_02.webp",
    "https://media.discordapp.net/attachments/1075728414826307646/1075888660144210011/Kiaya_Desktop_Home_Page_Banner_03.webp",
  ];
  const [onBanner, setOnBanner] = useState(0);
  const delay = 8;
  useEffect(() => {
    const myTimeOut = setTimeout(() => {
      setOnBanner((onBanner + 1) % Images.length);
    }, delay * 1000);
    return () => {
      clearTimeout(myTimeOut);
    };
  }, [onBanner, Images.length]);
  // console.log(props);
  return (
    <div
      style={{
        backgroundColor: "black",
        backgroundImage: `url(${Images[onBanner]})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex border-black h-full w-full flex-col items-center justify-center"
    >
      <div className="flex w-full justify-between">
        <div
          onClick={() => {
            setOnBanner(
              onBanner !== 0
                ? (onBanner - 1) % Images.length
                : Images.length - 1
            );
          }}
          style={{ height: "35rem" }}
          className="w-96"
        ></div>
        <div className="flex justify-center overflow-hidden items-center max-h-96 w-96">
          <h3 className="text-5xl">{props.message}</h3>
        </div>
        <div
          onClick={() => setOnBanner((onBanner + 1) % Images.length)}
          style={{ height: "35rem" }}
          className="w-96"
        ></div>
      </div>
    </div>
  );
}
