import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";

const Home = () => {
  // Use State to change value of theme button
  const [theme, settheme] = useState("lightmode");

  // Function to Change Theme darkmode/lightmode
  const changetheme = () => {
    const htmlclass = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlclass.remove("dark");
      localStorage.removeItem("theme");
      settheme("lightMode");
    } else {
      htmlclass.add("dark");
      localStorage.setItem("theme", "dark");
      settheme("DarkMode");
    }
  };

  useEffect(() => {
    changetheme();
  }, []);

  return (
    <div>
      <Navbar />
      Home
      <button className="bg-red-300 px-3 py-2 rounded-md" onClick={changetheme}>
        {theme}
      </button>
      {/* <Hero /> */}
    </div>
  );
};

export default Home;
