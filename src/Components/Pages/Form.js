import React from "react";
import CustomSection from "../CustomSection";
import FormOne from "../Form/FormOne";
import FormTwo from "../Form/FormTwo";

const Form = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <CustomSection title="Form One">
            <FormOne />
          </CustomSection>
        </div>
        <div className="col-12 col-md-6">
          <CustomSection title="Form Two">
            <FormTwo />
          </CustomSection>
        </div>
        
      </div>
    </>
  );
};

export default Form;
