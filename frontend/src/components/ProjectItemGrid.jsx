import React, { useState } from "react";

const ProjectItemGrid = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const data = {
    thumbnail: item.thumbnail,
    title: item.title,
    customer: item.customer,
  };
  return (
    <div className="flex items-center justify-center w-1/4 m-10 tracking-widest rounded-3xl">
      <div className="relative rounded-3xl bg-gradient-to-bl from-neutral-900 to-blue-950"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        {/* Image container */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative overflow-hidden">
            <img
              src={item.thumbnail}
              alt=""
              loading="lazy"
              className={`max-w-lg transition-all duration-300 rounded-3xl ${isHovered ? 'blur-sm' : 'blur-none'}`}
            />
            <div className="absolute top-0 left-0 rounded-sm bg-gradient-to-b from-transparent to-stone-900 size-full" />
          </div>
        </div>
        {/* Details container */}
        <div className="flex flex-col items-center justify-center w-auto gap-3 px-8 py-2 text-cente">
          <h1 className="text-2xl">{item.title}</h1>
          <a href={item.customer} target="_blank" className="px-4 py-2 text-sm border-2 rounded-full secondarybtn">
            Visit customer
          </a>
        </div>
        <div className={`absolute left-0 flex items-center justify-center w-full gap-3 transition-all duration-300 top-1/3 ${isHovered ? 'opacity-1' : 'opacity-0'}`}>
          <button className="px-4 py-1 border-2 rounded-full primarybtn">Edit</button>
          <button className="px-4 py-1 border-2 rounded-full primarybtn">Hide</button>
          <button className="px-4 py-1 border-2 rounded-full primarybtn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemGrid;
