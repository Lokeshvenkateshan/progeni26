import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import PersonalInfo from "./PersonalInfo";
import EventSelection from "./EventSelection";
import Payment from "./Payment"; // Import Payment component
import "../style/register.css";
import Confirmation from "./Confirmation"
const Register = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    techEvents: [],
    nonTechEvents: [],
    txnId: "", // Add txnId to formData
    screenshot: null, // Add screenshot to formData
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1); // optional if you want back button

  return (
    <div className="register-page">
      <ProgressBar step={step} />

      {step === 1 && (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <EventSelection
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep} // optional
        />
      )}

      {step === 3 && (
        <Payment
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep} // optional
          onComplete={() => setStep(4)}
        />
      )}
      {step === 4 && <Confirmation formData={formData} />}
    </div>
  );
};

export default Register;
