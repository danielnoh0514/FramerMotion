import { motion } from "framer-motion";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled(motion.div)`
  width: 100%;
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  padding: 10px 15px;
  z-index: 1;

  justify-content: space-between;
  align-items: center;

  top: 0;

  .nav {
    display: block;
    background-color: #ffeaa7;
    border-radius: 10px;
    padding: 5px;
  }
`;

const UnderVar = {
  start: { scale: 1 },
  end: { scale: 2 },
  hover: { scale: 1.2, transition: { duration: 0.4 } },
  tap: { fontSize: 90 },
};

const Span = styled(motion.span)`
  font-size: 20px;
  font-weight: 800;
  color: #fdcb6e;
`;

export let Path = styled(motion.a)`
  :target {
    border: 2px solid #d4d4d4;
    background-color: orange;
    color: white;
  }
`;

function Navbar() {
  const [val, setVal] = useState(1);
  const onClick = () => {
    setVal((prev) => prev + 1);
  };

  return (
    <div>
      <NavBar>
        <NavLink activeClassName="nav" exact to="/">
          <Span>Home</Span>
        </NavLink>
        <NavLink activeClassName="nav" exact to="/drag">
          <Span>Drag</Span>
        </NavLink>
        <NavLink activeClassName="nav" exact to="/outline">
          <Span>Outline</Span>
        </NavLink>
        <NavLink activeClassName="nav" exact to="/overlay">
          <Span>Overlay</Span>
        </NavLink>
        <NavLink activeClassName="nav" exact to="/prisonbox">
          <Span>Prison Box</Span>
        </NavLink>
        <NavLink activeClassName="nav" exact to="/scroll">
          <Span>Scroll</Span>
        </NavLink>
        <NavLink activeClassName="nav" exact to="/slider">
          <Span>Slider</Span>{" "}
        </NavLink>
      </NavBar>
    </div>
  );
}

export default Navbar;
