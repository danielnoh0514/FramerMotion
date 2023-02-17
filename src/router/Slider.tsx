import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  top: 0;

  justify-content: center;
  align-items: center;
  background-color: rgb(116, 185, 255);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const box = {
  start: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
  }),
  end: { x: 0, opacity: 1, scale: 1, transition: { duration: 1 } },
  exit: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
    transition: { duration: 1 },
  }),
};

function Slider() {
  const [next, setNext] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(true);
    setNext((prev) => (prev === 10 ? 1 : prev + 1));
  };
  const prevPlease = () => {
    setBack(false);
    setNext((prev) => (prev === 1 ? 10 : prev - 1));
  };

  return (
    <div>
      <Navbar />
      <Wrapper>
        <AnimatePresence custom={back}>
          <Box
            custom={back}
            variants={box}
            initial={"start"}
            animate={"end"}
            exit={"exit"}
            key={next}
          >
            {next}
          </Box>
        </AnimatePresence>
        <button onClick={nextPlease}>Next Click</button>
        <button onClick={prevPlease}>Prev Click</button>
      </Wrapper>
    </div>
  );
}

export default Slider;
