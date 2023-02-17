import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;

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
  top: 500px;
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

const Button = styled(motion.button)`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border: none;
  color: red;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  margin-right: 10px;
  padding: 20px;
`;

const ButtonPrev = styled(motion.button)`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border: none;
  color: red;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  margin-right: 10px;
  padding: 20px;
`;

const btnVar = {
  start: { scale: 1 },
  end: (custom: string) => ({
    scale: 1.1,

    color: custom === "b1" ? "#0984e3" : "#d63031",
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
        <AnimatePresence>
          <ButtonPrev
            custom={"b2"}
            variants={btnVar}
            initial={"start"}
            whileHover={"end"}
            onClick={prevPlease}
            exit={"exit"}
          >
            Prev Click
          </ButtonPrev>
          <Button
            custom={"b1"}
            variants={btnVar}
            initial={"start"}
            whileHover={"end"}
            onClick={nextPlease}
            exit={"exit"}
          >
            Next Click
          </Button>
        </AnimatePresence>
      </Wrapper>
    </div>
  );
}

export default Slider;
