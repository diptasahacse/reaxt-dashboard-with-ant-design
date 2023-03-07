import React from "react";
import CustomSection from "../CustomSection";
import TableOne from "../Table/TableOne";
import TableTwo from "../Table/TableTwo";

const Table = () => {
  return (
    <>
      <div className="row g-5">
        <div className="col-12 col-md-6">
          <CustomSection title="Table One">
            <TableOne />
          </CustomSection>
        </div>
        <div className="col-12 col-md-6">
          <CustomSection title="Table Two">
            <TableTwo />
          </CustomSection>
        </div>
      </div>
    </>
  );
};

export default Table;
