import { animate, AnimatePresence, motion } from "framer-motion";
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 20vw;
  gap: 15px;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlayer = styled(motion.div)`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;

  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  height: 100px;
  background-color: white;
  border-radius: 20px;
`;

function Overlay() {
  const [id, setId] = useState<null | string>(null);

  return (
    <div>
      <Wrapper>
        <Navbar />
        <Grid>
          {[1, 2, 3, 4].map((n) => (
            <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""}></Box>
          ))}
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlayer
              onClick={() => setId(null)}
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <Box layoutId={id + ""} style={{ width: 200, height: 100 }}></Box>
            </Overlayer>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </div>
  );
}

export default Overlay;
