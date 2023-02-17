import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: rgb(116, 185, 255);
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  position: absolute;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayScreen = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`;

const Button = styled(motion.button)`
  position: absolute;
  z-index: 1;
  bottom: 100px;
  border: none;
  color: red;
  font-size: large;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
`;

const boxVar = {
  start: { scale: 1 },
  end: (custom: number) => ({
    scale: 1.1,
    x:
      custom === 1
        ? -10
        : custom === 2
        ? 10
        : custom === 3
        ? -10
        : custom === 4
        ? 10
        : 0,
    y:
      custom === 1
        ? -10
        : custom === 2
        ? -10
        : custom === 3
        ? 10
        : custom === 4
        ? 10
        : 0,

    duration: 0.3,
  }),
};

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
`;

const Overbox = styled(motion.div)`
  width: 200px;
  border-radius: 20px;
  height: 200px;
  background-color: white;
  position: absolute;
  z-index: 1;
`;

const btnVar = {
  start: { scale: 1 },
  end: { scale: 1, width: 100, height: 50, color: "#0984e3" },
};

const overVar = {
  start: { scale: 1 },
  end: { scale: 1 },
  exit: { opacity: 0 },
};

function OverlayPlus() {
  const [lay, setLay] = useState(false);
  const [over, setOver] = useState<string | undefined>(0 + "");

  return (
    <Wrapper>
      <Navbar />
      <Grid>
        {[1, 2, 3, 4].map((n) => (
          <Box
            onClick={() => setOver(n + "")}
            custom={n}
            initial={"start"}
            variants={boxVar}
            whileHover={"end"}
            key={n}
            layoutId={n + ""}
          >
            {n === 2 && lay ? (
              <Circle layoutId={"circle"} />
            ) : n === 3 && !lay ? (
              <Circle layoutId={"circle"} />
            ) : null}
          </Box>
        ))}
      </Grid>
      <Button
        variants={btnVar}
        initial={"start"}
        whileHover={"end"}
        onClick={() => setLay((prev) => !prev)}
      >
        Switch
      </Button>
      <AnimatePresence>
        {over !== "0" ? (
          <OverlayScreen
            onClick={() => setOver(0 + "")}
            variants={overVar}
            initial={"start"}
            animate={"end"}
            exit={"exit"}
          >
            <Overbox layoutId={over} />
          </OverlayScreen>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default OverlayPlus;
