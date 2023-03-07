import React from "react";
import CustomSection from "../CustomSection";
import FormFour from "../Form/FormFour";
import FormOne from "../Form/FormOne";
import FormThree from "../Form/FormThree";
import FormTwo from "../Form/FormTwo";

const Form = () => {
  return (
    <>
      <div className="row g-5">
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
        <div className="col-12 col-md-6">
          <CustomSection title="Form Three">
            <FormThree />
          </CustomSection>
        </div>
        <div className="col-12 col-md-6">
          <CustomSection title="Form Four">
            <FormFour />
          </CustomSection>
        </div>
      </div>
    </>
  );
};

export default Form;
