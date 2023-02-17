import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #2d3436;
  border-radius: 20px;
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Biggerbox = styled.div`
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function PrisonBox() {
  const biggerboxRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar />
      <Wrapper>
        <Biggerbox ref={biggerboxRef}>
          <Box dragConstraints={biggerboxRef} dragSnapToOrigin drag>
            ⭐️
          </Box>
        </Biggerbox>
      </Wrapper>
    </div>
  );
}

export default PrisonBox;
