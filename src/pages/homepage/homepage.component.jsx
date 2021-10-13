import React from "react";

import styled from "styled-components";
import Directory from "../../components/directory/directory.component";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const Homepage = () => (
  <Home>
    <Directory />
  </Home>
);

export default Homepage;
