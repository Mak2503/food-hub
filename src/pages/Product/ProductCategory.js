import React from "react";

const ProductCategory = ({ menuCategory, topMargin }) => {
  return (
    <div
      style={{
        position: "sticky",
        top: `${topMargin}px`,
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <a href={`#${menuCategory}`}>{menuCategory}</a>
    </div>
  );
};

export default ProductCategory;
