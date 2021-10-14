import React from "react";

import {
  CollectionItem,
  Image,
  CollectionFooter,
  Name,
  Price,
} from "./collection.item.styles";

const CollectionItems = ({ id, name, price, imageUrl }) => (
  <CollectionItem>
    <Image style={{ backgroundImage: `url(${imageUrl})` }} />
    <CollectionFooter>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </CollectionFooter>
  </CollectionItem>
);

export default CollectionItems;
