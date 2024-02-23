import React, { useState } from "react";
import { Link } from "react-router-dom";

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const placeholderData = [
    {
      thumbnail: "../../assets/veziv.png",
      title: "VEZIV Portfolio",
      customer: "https://veziv.ro/",
    },
    {
      thumbnail: "../../assets/netflix.png",
      title: "Netflix Website",
      customer: "https://netflix.com/",
    },
    {
      thumbnail: "../../assets/pizzahut.png",
      title: "Pizza Hut Website",
      customer: "https://pizzahut.ro/",
    },
    {
      thumbnail: "../../assets/bestjobs.png",
      title: "BestJobs Platform",
      customer: "https://bestjobs.eu/",
    },
  ];
  return (
    <section
      id="works"
      className="flex flex-col items-center justify-center min-h-screen gap-3 py-5 text-white bgWorks"
    >
      {placeholderData.map((project, index) => (
        <div
          className="w-1/2 my-5 tracking-widest rounded-3xl bg-gradient-to-tr from-neutral-900 to-blue-950"
          key={index}
        >
          {index % 2 === 0 ? (
            <div className="flex items-center justify-between rounded-full">
              {/* Displaying image first */}
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.thumbnail}
                  alt=""
                  loading="lazy"
                  className={`max-w-2xl rounded-3xl transition-all duration-300 relative ${
                    hoveredIndex === index ? "blur-sm" : "blur-none"
                  }`}
                />
                <div className="absolute top-0 left-0 rounded-sm bg-gradient-to-b from-transparent to-stone-900 size-full" />
                <button
                  className={`absolute rounded-full border-2 alternativebtn px-4 py-2 top-1/2 left-1/2 translate-x-[-50%] ${
                    hoveredIndex === index ? "opacity-1" : "opacity-0"
                  }`}
                >
                  Project details
                </button>
              </div>
              {/* Displaying details */}
              <div className="static flex flex-col items-center justify-center w-auto gap-3 px-8 text-center">
                <h1 className="text-3xl">{project.title}</h1>
                <a href={project.customer} target="_blank" className="px-4 py-2 border-2 rounded-full secondarybtn">
                  Visit customer
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between rounded-full">
              {/* Displaying details first */}
              <div className="static flex flex-col items-center justify-center w-auto gap-3 px-8 text-center">
                <h1 className="text-3xl">{project.title}</h1>
                <a href={project.customer} target="_blank" className="px-4 py-2 border-2 rounded-full secondarybtn">
                  Visit customer
                </a>
              </div>
              {/* Displaying image */}
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.thumbnail}
                  alt=""
                  loading="lazy"
                  className={`max-w-2xl rounded-3xl transition-all duration-300 relative ${
                    hoveredIndex === index ? "blur-sm" : "blur-none"
                  }`}
                />
                <div className="absolute top-0 left-0 rounded-sm bg-gradient-to-b from-transparent to-stone-900 size-full" />
                <button
                  className={`absolute rounded-full border-2 alternativebtn px-4 py-2 top-1/2 left-1/2 translate-x-[-50%] ${
                    hoveredIndex === index ? "opacity-1" : "opacity-0"
                  }`}
                >
                  Project details
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      <Link to="/projects">
        <button className="w-48 px-4 py-2 border-2 rounded-full primarybtn">More</button>
      </Link>
    </section>
  );
};

export default Works;
