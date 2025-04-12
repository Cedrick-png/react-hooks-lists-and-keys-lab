import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];

  const linksElements = links.map((links) => {
    return <NavBar key={links} links={links}/>;
  });
    return <nav> {
     <>
      <>
      <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#projects">projects</a></>
    </>
    }</nav>
}

export default NavBar;
