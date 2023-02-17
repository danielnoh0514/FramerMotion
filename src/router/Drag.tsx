import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Navbar from "../component/Navbar";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  z-index: -1;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(116, 185, 255), rgb(9, 132, 227));
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 20px;
`;

function Drag() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-830, 803], [2, 0.1]);
  const rotateZ = useTransform(x, [-830, 0, 803], [-360, 0, 360]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gradient = useTransform(
    x,
    [-830, 0, 803],
    [
      "linear-gradient(135deg, rgb(116, 255, 227), rgb(9, 132, 227))",
      "linear-gradient(135deg, rgb(116, 185, 255), rgb(9, 132, 227))",
      "linear-gradient(135deg, rgb(116, 185, 255), rgb(103, 9, 227))",
    ]
  );

  return (
    <div>
      <Navbar></Navbar>
      <Wrapper style={{ background: gradient }} ref={wrapperRef}>
        <Box
          dragConstraints={wrapperRef}
          style={{ x, scale, rotateZ }}
          dragSnapToOrigin
          drag="x"
        ></Box>
      </Wrapper>
    </div>
  );
}

export default Drag;
