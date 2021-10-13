import React from "react";

import styled from "styled-components";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MenuItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
`;

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
const Homepage = () => (
  <Home>
    <DirectoryMenu>
      <MenuItem>
        <Content>
          <Title className="title">HATS</Title>
          <Subtitle className="subtitle">SHOP NOW</Subtitle>
        </Content>
      </MenuItem>
      <MenuItem>
        <Content>
          <Title className="title">JACKETS</Title>
          <Subtitle className="subtitle">SHOP NOW</Subtitle>
        </Content>
      </MenuItem>
      <MenuItem>
        <Content>
          <Title className="title">SNEAKERS</Title>
          <Subtitle className="subtitle">SHOP NOW</Subtitle>
        </Content>
      </MenuItem>
      <MenuItem>
        <Content>
          <Title className="title">WOMEN</Title>
          <Subtitle className="subtitle">SHOP NOW</Subtitle>
        </Content>
      </MenuItem>
      <MenuItem>
        <Content>
          <Title className="title">MEN</Title>
          <Subtitle className="subtitle">SHOP NOW</Subtitle>
        </Content>
      </MenuItem>
    </DirectoryMenu>
  </Home>
);

export default Homepage;
