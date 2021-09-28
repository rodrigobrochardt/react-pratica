import React from "react";
import Cover from "./Cover";
import About from "./About";
import NavBar from "./NarvBar";
import CardSeacher from "./CardSeacher";

const App = () => {
  return (
    <div>
      <NavBar />
      <Cover />
      <About />
      <CardSeacher />
    </div>
  );
};

export default App;
