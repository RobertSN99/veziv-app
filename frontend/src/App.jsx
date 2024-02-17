import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import UpButton from "./components/UpButton";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden font-body">
      <Navbar />
      <UpButton />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
