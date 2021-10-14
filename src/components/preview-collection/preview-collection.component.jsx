import React from "react";
import {
  CollectionPreview,
  Title,
  Preview,
} from "./preview-collection.styles.js";

import CollectionItems from "../collection-item/collection-item.component.jsx";

const PreviewCollection = ({ title, items }) => (
  <CollectionPreview>
    <Title>{title.toUpperCase()}</Title>
    <Preview>
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItems key={id} {...otherItemProps}></CollectionItems>
        ))}
    </Preview>
  </CollectionPreview>
);

export default PreviewCollection;
