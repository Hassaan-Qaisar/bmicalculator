import React, { useState } from "react";
import BmiForm from "./Form";
import DisplayBmi from "./Display";

const BmiWrapper = () => {
  const [bmi, setBmi] = useState("");

  const addInputs = (data) => {
    setBmi(data);
    console.log(bmi);
  };

  return (
    <div className="BmiWrapper">
      <h1>Unlock Your Health: BMI Calculator</h1>
      <BmiForm onSubmitForm={addInputs} />
      {bmi ? <DisplayBmi data={bmi} /> : <p></p>}
    </div>
  );
};

export default BmiWrapper;
