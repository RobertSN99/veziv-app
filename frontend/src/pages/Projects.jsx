import ProjectItemGrid from "../components/ProjectItemGrid";
import ProjectItemList from "../components/ProjectItemList";
import { FaList, FaPlus } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CSSTransition } from "react-transition-group";
import React, { useEffect, useState } from "react";
import AddWork from "../components/Modals/AddWork";

const Projects = () => {
  const [selectedView, setSelectedView] = useState("grid");
  const [modalVisible, setModalVisible] = useState(false);
  const handleViewSwitch = () => {
    if (selectedView === "list") return setSelectedView("grid");
    return setSelectedView("list");
  };
  const handleModalBtn = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    if (modalVisible) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [modalVisible]);
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
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 pt-24 text-white bg-neutral-950">
      <button className="flex items-center justify-center gap-2 px-8 py-1 text-green-500 border-2 border-green-500 rounded-full primarybtn" onClick={handleModalBtn}>
        <FaPlus /><span>Add work</span>
      </button>
      <CSSTransition
        in={modalVisible === true}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <AddWork close={handleModalBtn} />
      </CSSTransition>
      <div className="absolute right-5 top-14">
        <button className="p-3 bg-blue-700 rounded-full" onClick={handleViewSwitch}>
          {selectedView === "list" ? <FaList /> : <BsFillGrid3X3GapFill />}
        </button>
      </div>
      <CSSTransition
        in={selectedView === "list"}
        timeout={300}
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
