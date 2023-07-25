import { useState } from "react";

const BmiForm = (props) => {
   const [height, setHeight] =  useState("");
   const [weight, setWeight] =  useState("");

  
  const onHeightChangeHandler = (event) => {
    setHeight(event.target.value);
    
  };
  const onWeightChangeHandler = (event) => {
    setWeight(event.target.value);
    
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // console.log(height)
    // console.log(weight)

    // Check if both height and weight are valid numeric values
    
    const heightInMeters = height / 100;
      // Calculate BMI
      const calculatedbmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      props.onSubmitForm(calculatedbmi);

    // console.log(data[0]);
    // console.log(data[1]);

    setHeight('');
    setWeight('');

  };

  const isSubmitDisabled = isNaN(height) || isNaN(weight) || !height || !weight;

  return (
    <form className="BmiForm" onSubmit={onSubmitHandler}>
      <div><input
        type="text"
        className="bmi-input"
        placeholder="Height in cm"
        value={height}
        onChange={onHeightChangeHandler}
      />
      </div>
      <div>
      <input
        type="text"
        className="bmi-input"
        placeholder="Weight in kg"
        value={weight}
        onChange={onWeightChangeHandler}
      />
      </div>
      
      <button
        type="submit"
        className={`bmi-btn ${isSubmitDisabled ? "bmi-btn-disabled" : ""}`}
        disabled={isSubmitDisabled}
      >
        Calculate BMI
      </button>
      
    </form>
  );
};

export default BmiForm;
