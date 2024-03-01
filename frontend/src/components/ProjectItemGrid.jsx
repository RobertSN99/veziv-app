import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import DeleteWork from "./Modals/DeleteWork";
import EditWork from "./Modals/EditWork";

const ProjectItemGrid = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
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
          <button className="px-4 py-1 border-2 rounded-full primarybtn" onClick={handleEditModalBtn}>Edit</button>
          <button className="px-4 py-1 border-2 rounded-full primarybtn">Hide</button>
          <button className="px-4 py-1 border-2 rounded-full primarybtn" onClick={handleDeleteModalBtn}>Delete</button>
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

export default ProjectItemGrid;
