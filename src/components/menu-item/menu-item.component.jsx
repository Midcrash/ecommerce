import {
  MenuItemStyle,
  Content,
  Title,
  Subtitle,
  BackgroundImage,
} from "./menu-item.styles";
import { withRouter } from "react-router-dom";
import React from "react";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemStyle
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }}>
      <Content>
        <Title className="title">{title.toUpperCase()}</Title>
        <Subtitle className="subtitle">SHOP NOW</Subtitle>
      </Content>
    </BackgroundImage>
  </MenuItemStyle>
);

export default withRouter(MenuItem);
