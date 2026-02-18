import React from "react";
import { FaCheck } from "react-icons/fa";

const ProgressBar = ({ step }) => {

  const renderStep = (label, index) => {

    if (step > index) {
      return (
        <div className="step completed">
          <FaCheck className="tick" />
          {label}
        </div>
      );
    }

    if (step === index) {
      return <div className="step active">{label}</div>;
    }

    return <div className="step">{label}</div>;
  };

  return (
    <div className="progress-bar">
      {renderStep("Participant Info", 1)}
      {renderStep("Select Events", 2)}
      {renderStep("Payment", 3)}
      {renderStep("Confirmation", 4)}
    </div>
  );
};

export default ProgressBar;
