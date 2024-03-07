import React, { useState, useEffect } from "react";

const EditWork = (props) => {
  const [workTitle, setWorkTitle] = useState("");
  const [workLink, setWorkLink] = useState("");
  const [workImage, setWorkImage] = useState(null);
  const [formImageName, setFormImageName] = useState("No file chosen.");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("work_title", workTitle);
      formData.append("work_link", workLink);
      formData.append("work_image", workImage);

      await axios.post("", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Success");
      props.close();
    } catch (e) {
      console.log(e.message);
      props.close();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setWorkImage(file);
    const splitFileName = file.name.split('.');
    if (splitFileName[0].length < 8) {
      return setFormImageName(file.name);
    }
    return setFormImageName(splitFileName[0].substring(0, 7) + "... ." + splitFileName[1]);
  };

  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center size-full bg-stone-900/80">
      <div className="relative flex flex-col items-center justify-center p-4 text-black rounded-lg bg-gradient-to-t from-stone-300 to-slate-50">
        <button
          onClick={props.close}
          className="absolute px-2 font-bold text-white bg-red-500 rounded-lg right-1 top-1"
        >
          X
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 mt-5">
          <div className="flex items-center justify-between w-full pb-2 border-b-2 border-black/5">
            <label htmlFor="work_title">Title:</label>
            <input
              type="text"
              id="work_title"
              value={workTitle}
              onChange={(e) => setWorkTitle(e.target.value)}
              className="border-[1px] border-stone-900/20 inputField"
            />
          </div>
          <div className="flex items-center justify-between w-full gap-3 pb-2 border-b-2 border-black/5">
            <label htmlFor="work_link">Link to Customer:</label>
            <input
              type="text"
              id="work_link"
              value={workLink}
              onChange={(e) => setWorkLink(e.target.value)}
              className="border-[1px] border-stone-900/20 inputField"
            />
          </div>
          <div className="flex items-center justify-between w-full gap-3 pb-2 border-b-2 border-black/5">
            <label htmlFor="work_image">Image:</label>
            <input type="file" id="work_image" onChange={handleFileChange} accept="image/*" hidden="hidden" />
            <label htmlFor="work_image" className="px-5 py-1 transition-all duration-300 rounded-full cursor-pointer bg-green-700/25 hover:bg-green-500/50" onClick={handleFileChange}>
              Browse
            </label>
            <span className="w-1/3 text-nowrap">{formImageName}</span>
          </div>
          <div>
            <button type="submit" className="px-10 py-1 text-white bg-blue-700 rounded-full primarybtn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditWork;
