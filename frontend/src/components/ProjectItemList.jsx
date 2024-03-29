import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import EditWork from "./Modals/EditWork";
import DeleteWork from "./Modals/DeleteWork";

const ProjectItemList = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleEditModalBtn = () => {
    setEditModalVisible(!editModalVisible);
  };
  const handleDeleteModalBtn = () => {
    setDeleteModalVisible(!deleteModalVisible);
  };

  useEffect(() => {
    if (editModalVisible) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [editModalVisible]);
  useEffect(() => {
    if (deleteModalVisible) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [deleteModalVisible]);
  return (
    <div className="w-1/2 m-5 tracking-widest rounded-3xl bg-gradient-to-tr from-neutral-900 to-blue-950">
      <div className="flex items-center justify-between rounded-full">
        {/* Displaying details first */}
        <div className="flex flex-col items-center justify-center w-auto gap-3 px-8 text-center">
          <h1 className="text-3xl">{item.title}</h1>
          <a href={item.customer} target="_blank" className="px-4 py-2 border-2 rounded-full secondarybtn">
            Visit customer
          </a>
        </div>
        {/* Displaying image */}
        <div className="relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img
            src={item.thumbnail}
            alt=""
            loading="lazy"
            className={`max-w-2xl rounded-3xl transition-all duration-300 relative ${
              isHovered ? "blur-sm" : "blur-none"
            }`}
          />
          <div className="absolute top-0 left-0 rounded-sm bg-gradient-to-b from-transparent to-stone-900 size-full" />
          <div
            className={`absolute top-1/2 left-1/2 translate-x-[-50%] transition-all duration-300 flex items-center justify-center gap-3 ${
              isHovered ? "opacity-1" : "opacity-0"
            }`}
          >
            <button className="px-4 py-1 border-2 rounded-full primarybtn" onClick={handleEditModalBtn}>
              Edit
            </button>
            <button className="px-4 py-1 border-2 rounded-full primarybtn">Hide</button>
            <button className="px-4 py-1 border-2 rounded-full primarybtn" onClick={handleDeleteModalBtn}>Delete</button>
          </div>
        </div>
      </div>
      <CSSTransition in={editModalVisible === true} timeout={300} classNames={"modal"} unmountOnExit>
        <EditWork close={handleEditModalBtn} />
      </CSSTransition>
      <CSSTransition in={deleteModalVisible === true} timeout={300} classNames={"modal"} unmountOnExit>
        <DeleteWork close={handleDeleteModalBtn} />
      </CSSTransition>
    </div>
  );
};

export default ProjectItemList;
