import React from "react";

const CustomSection = ({ children, title }) => {
  return (
    <div className="shadow p-4 rounded-4 h-100">
      <h3 className="mb-3">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default CustomSection;
