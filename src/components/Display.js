import React from "react";

const DisplayBmi = (props) => {
  const bmiValue = props.data;
  let bmiCategory = "";

  // Determine the BMI category based on the BMI value
  if (bmiValue < 18.5) {
    bmiCategory = "You are a featherweight champion!";
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    bmiCategory = "You are in the healthy range.";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    bmiCategory = "Time to shed some pounds and feel great!";
  } else if (bmiValue > 30){
    bmiCategory = "You are strong like a sumo wrestler!";
  } else {
    bmiCategory = "Only numeric values are allowed in these fields"
  }

  return (
    <React.Fragment>
      <div className="display-bmi">
        <p className="bmi-value">Your BMI: {bmiValue}</p>
      </div>

      <div className="display-bmi">
        <p className="bmi-category">{bmiCategory}</p>
      </div>
    </React.Fragment>
  );
};

export default DisplayBmi;
