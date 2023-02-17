import React from "react";
import Router from "./Router";
import styled from "styled-components";
import Home from "./router/Home";

const Wrapper = styled.div``;

function App() {
  return (
    <Wrapper>
      <Router />
    </Wrapper>
  );
}

export default App;
