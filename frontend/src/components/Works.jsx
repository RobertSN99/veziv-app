import React, { useState } from "react";

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
      className="bgWorks min-h-screen text-white bg-black flex flex-col items-center justify-center py-5"
    >
      {placeholderData.map((project, index) => (
        <div
          className="bg-slate-800 rounded-3xl my-5 tracking-widest bg-gradient-to-tr from-neutral-900 to-blue-950"
          key={index}
        >
          {index % 2 === 0 ? (
            <div className="flex items-center justify-center">
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.thumbnail}
                  alt=""
                  className={`max-w-2xl rounded-3xl transition-all duration-300 relative ${
                    hoveredIndex === index ? "blur-sm" : ""
                  }`}
                />
                <div className="bg-gradient-to-b from-transparent to-stone-900 absolute top-0 left-0 size-full rounded-sm" />
                <button
                  className={`absolute top-1/2 left-1/2 translate-x-[-50%] px-4 py-2 rounded-full border-2 alternativebtn ${
                    hoveredIndex === index ? "opacity-1" : "opacity-0"
                  }`}
                >
                  Project details
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 text-center px-8">
                <h1 className="text-3xl">{project.title}</h1>
                <a href={project.customer} target="_blank" className="px-4 py-2 rounded-full border-2 secondarybtn">
                  Visit customer
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center rounded-full">
              <div className="flex flex-col items-center justify-center gap-3 text-center px-8">
                <h1 className="text-3xl">{project.title}</h1>
                <a href={project.customer} target="_blank" className="px-4 py-2 rounded-full border-2 secondarybtn">
                  Visit customer
                </a>
              </div>
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.thumbnail}
                  alt=""
                  className={`max-w-2xl rounded-3xl transition-all duration-300 ${
                    hoveredIndex === index ? "blur-sm" : ""
                  }`}
                />
                <div className="bg-gradient-to-b from-transparent to-stone-900 absolute top-0 left-0 size-full rounded-sm" />
                <button
                  className={`absolute top-1/2 left-1/2 translate-x-[-50%] px-4 py-2 rounded-full border-2 alternativebtn ${
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
      <button>TODO</button>
    </section>
  );
};

export default Works;
