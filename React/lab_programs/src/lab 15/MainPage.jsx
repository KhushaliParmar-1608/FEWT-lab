import { useState } from "react";
import Welcome from "./Welcome.jsx";
import Navbar from "./Navbar.jsx";
import Hr from "./Hr.jsx";
import About from "./About.jsx";
import "./home.css";
import Img from "./Img.jsx";
import Facts from "./Facts.jsx";
import Categoris from "./Categoris.jsx";
import Plan from "./Plan.jsx";
import Footer from "./Footer.jsx";
import Br from "./Br.jsx";
function MainPage() {
  return (
    <>
      <Welcome />
      <Navbar />
      <Hr />
      <About />
      <Img />
      <h2>About Gujarat</h2>
      <Facts />
      <Categoris />
      <Plan />
      <Br />
      <Hr />
      <Br />
      <Footer />
    </>
  );
}

export default MainPage;
