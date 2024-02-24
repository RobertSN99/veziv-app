import ProjectItemGrid from "../components/ProjectItemGrid";
import ProjectItemList from "../components/ProjectItemList";
import { FaList } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CSSTransition } from "react-transition-group";
import React, { useState } from "react";

const Projects = () => {
  const [selectedView, setSelectedView] = useState("grid");
  const handleViewSwitch = () => {
    if (selectedView === "list") return setSelectedView("grid");
    return setSelectedView("list");
  };
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
    <main className="min-h-screen text-white pt-14 bg-neutral-950">
      <div className="absolute right-5 top-14">
        <button className="p-3 bg-blue-700 rounded-full" onClick={handleViewSwitch}>
          {selectedView === "list" ? <FaList /> : <BsFillGrid3X3GapFill />}
        </button>
      </div>
      <CSSTransition
        in={selectedView === "list"}
        timeout={300} // Adjust timeout duration as per your preference
        classNames="view"
        unmountOnExit
      >
        <div className="flex flex-col items-center justify-center w-full">
          {placeholderData.map((project, index) => (
            <ProjectItemList key={index} item={project} />
          ))}
        </div>
      </CSSTransition>
      <CSSTransition
        in={selectedView === "grid"}
        timeout={300} // Adjust timeout duration as per your preference
        classNames="view"
        unmountOnExit
      >
        <div className="flex flex-wrap items-center justify-center w-full">
          {placeholderData.map((project, index) => (
            <ProjectItemGrid key={index} item={project} />
          ))}
        </div>
      </CSSTransition>
    </main>
  );
};

export default Projects;
