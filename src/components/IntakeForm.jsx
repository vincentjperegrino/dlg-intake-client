import React, { useState } from "react";
import Stepper from "./Stepper";
import StepButton from "./StepButton";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ClientPersonalInfo from "./intake-forms/ClientPersonalInfo";
import ClientVehicleInfo from "./intake-forms/ClientVehicleInfo";
import DefendantPersonalAndVehicleInfo from "./intake-forms/DefendantPersonalAndVehicleInfo";

const IntakeForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const navigate = useNavigate();

  const steps = [
    {
      id: "01",
      name: "Client Personal Information",
      status: currentStep > 1 ? "complete" : currentStep === 1 ? "current" : "upcoming",
    },
    {
      id: "02",
      name: "Client Vehicle Information",
      status: currentStep > 2 ? "complete" : currentStep === 2 ? "current" : "upcoming",
    },
    {
      id: "03",
      name: "Defendant Personal and Vehicle Information",
      status: currentStep > 3 ? "complete" : currentStep === 3 ? "current" : "upcoming",
    },
  ];

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.success("New claims created successfully!");
      setTimeout(() => navigate("/profile"), 2000);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="relative w-full min-h-full border border-black shadow sm:rounded-lg">
      <div className="static top-0 z-10">
        <Stepper steps={steps} />
      </div>
      <div className="flex flex-col justify-center items-center py-2">
        <div className="w-full">
          {currentStep === 1 && <ClientPersonalInfo />}
          {currentStep === 2 && <ClientVehicleInfo />}
          {currentStep === 3 && <DefendantPersonalAndVehicleInfo />}
        </div>
      </div>
      <div className={`flex static bottom-0 z-10 py-4 px-4 ${currentStep === 1 ? "justify-end" : "justify-between"}`}>
        {currentStep > 1 && (
          <StepButton onClick={prevStep} label="Back" />
        )}
        {currentStep < totalSteps ? (
          <StepButton onClick={nextStep} label="Next" />
        ) : (
          <StepButton onClick={handleSubmit} label="Submit" />
        )}
      </div>
    </div>
  );
};

export default IntakeForm;