import React from "react";

const Marquee = ({ imagesUrls }) => {
  return <div className="flex w-full py-8 gap-20 overflow-hidden">
    {imagesUrls.map((url, index) => {
        return <img src= {url} key={index} className="w-[6vw] flex flex-shrink-0" alt="" />
    })}
    {imagesUrls.map((url, index) => {
        return <img src= {url} key={index} className="w-[6vw] flex flex-shrink-0"  alt="" />
    })}
  </div>;
};

export default Marquee;
