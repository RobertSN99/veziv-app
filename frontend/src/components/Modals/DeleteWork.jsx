import React from "react";

const DeleteWork = (props) => {
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
  return (
    <div className="absolute top-0 left-0 z-50 flex items-center justify-center size-full bg-stone-900/80">
      <div className="relative flex flex-col items-center justify-center p-4 text-black rounded-lg min-h-48 min-w-72 bg-gradient-to-t from-stone-300 to-slate-50">
        <div className="flex flex-col items-center justify-center text-center size-full">
          <h1 className="text-xl">Delete this work?</h1>
          <div className="flex items-center justify-center gap-10 mt-4">
            <button type="submit" className="px-6 py-1 text-white transition-all duration-300 bg-red-800 rounded-full hover:bg-red-500" onClick={handleSubmit}>Delete</button>
            <button type="submit" className="px-6 py-1 rounded-full primarybtn" onClick={props.close}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteWork;
