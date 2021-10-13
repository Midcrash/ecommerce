import {
  MenuItemStyle,
  Content,
  Title,
  Subtitle,
  BackgroundImage,
} from "./menu-item.styles";

import React from "react";

const MenuItem = ({ title, imageUrl, size }) => (
  <MenuItemStyle size={size}>
    <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }}>
      <Content>
        <Title className="title">{title.toUpperCase()}</Title>
        <Subtitle className="subtitle">SHOP NOW</Subtitle>
      </Content>
    </BackgroundImage>
  </MenuItemStyle>
);

export default MenuItem;
