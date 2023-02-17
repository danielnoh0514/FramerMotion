import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";
const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 300vh;
  display: flex;
  position: absolute;
  top: 0;
  z-index: -1;
  justify-content: center;
  align-items: center;
  background-color: #74b9ff;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
`;
function Scroll() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <div>
      <Navbar />
      <Wrapper>
        <Box style={{ scale }}></Box>
      </Wrapper>
    </div>
  );
}

export default Scroll;
