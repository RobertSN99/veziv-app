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
      className="bgWorks min-h-screen text-white flex flex-col gap-3 items-center justify-center py-5"
    >
      {placeholderData.map((project, index) => (
        <div
          className="w-1/2 rounded-3xl my-5 tracking-widest bg-gradient-to-tr from-neutral-900 to-blue-950"
          key={index}
        >
          {index % 2 === 0 ? (
            <div className="rounded-full xs:relative md:flex md:items-center md:justify-between">
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.thumbnail}
                  alt=""
                  className={`max-w-2xl rounded-3xl transition-all duration-300 relative xs:blur-sm ${
                    hoveredIndex === index ? "md:blur-sm" : "md:blur-none"
                  }`}
                />
                <div className="bg-gradient-to-b from-transparent to-stone-900 absolute top-0 left-0 size-full rounded-sm" />
                <button
                  className={`absolute rounded-full border-2 alternativebtn xs:opacity-1 xs:top-2/3 xs:left-1/2 xs:-translate-x-1/2 xs:px-2 xs:py-1 md:px-4 md:py-2 md:top-1/2 md:left-1/2 md:translate-x-[-50%] ${
                    hoveredIndex === index ? "md:opacity-1" : "md:opacity-0"
                  }`}
                >
                  Project details
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 text-center md:px-8 xs:absolute xs:top-0 xs:h-full xs:w-full md:w-auto md:static">
                <h1 className="xs:text-xl md:text-3xl">{project.title}</h1>
                <a
                  href={project.customer}
                  target="_blank"
                  className="rounded-full border-2 secondarybtn xs:px-2 xs:py-1 md:px-4 md:py-2"
                >
                  Visit customer
                </a>
              </div>
            </div>
          ) : (
            <div className="rounded-full xs:relative md:flex md:items-center md:justify-between">
              <div className="flex flex-col items-center justify-center gap-3 text-center z-[1] md:px-8 xs:absolute xs:top-0 xs:h-full xs:w-full md:w-auto md:static">
                <h1 className="xs:text-xl md:text-3xl">{project.title}</h1>
                <a
                  href={project.customer}
                  target="_blank"
                  className="rounded-full border-2 secondarybtn xs:px-2 xs:py-1 md:px-4 md:py-2"
                >
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
                  className={`max-w-2xl rounded-3xl transition-all duration-300 relative xs:blur-sm ${
                    hoveredIndex === index ? "md:blur-sm" : "md:blur-none"
                  }`}
                />
                <div className="bg-gradient-to-b from-transparent to-stone-900 absolute top-0 left-0 size-full rounded-sm" />
              </div>
              <button
                  className={`absolute rounded-full border-2 alternativebtn xs:opacity-1 xs:top-2/3 xs:left-1/2 xs:-translate-x-1/2 xs:px-2 xs:py-1 md:px-4 md:py-2 md:top-1/2 md:left-1/2 md:translate-x-[-50%] ${
                    hoveredIndex === index ? "md:opacity-1" : "md:opacity-0"
                  }`}
                >
                  Project details
                </button>
            </div>
          )}
        </div>
      ))}
      <button>TODO</button>
    </section>
  );
};

export default Works;
