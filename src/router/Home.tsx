import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar, { Path } from "../component/Navbar";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Screen = styled(motion.div)`
  width: 1600px;
  height: 1600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled(motion.span)`
  font-weight: 800;
  font-size: 50px;
`;

function Home() {
  const x = useMotionValue(0);
  const navRef = useRef<HTMLDivElement>(null);

  const scale = useTransform(x, [-800, 0, 800], [4, 1, 0.1]);
  const color = useTransform(
    x,
    [-50, 0, 50],
    ["#ffeaa7", "#dfe6e9", "#fdcb6e"]
  );

  const wrap = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Wrapper>
        <Navbar />
        <Screen drag style={{ x, scale }} dragSnapToOrigin>
          <Span style={{ color }}>Motion World</Span>
        </Screen>
      </Wrapper>
    </div>
  );
}

export default Home;
