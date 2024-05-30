import React, { useState } from "react";
import Stepper from "./Stepper";
import PersonalInfo from "./registration-forms/PersonalInfo";
import AccountInfo from "./registration-forms/AccountInfo";
import AdditionalInfo from "./registration-forms/AdditionalInfo";
import ContactInfo from "./registration-forms/ContactInfo";
import StepButton from "./StepButton";
import user from "../schema/user";
import { Link } from "react-router-dom";
import createUser from "../api/user/create";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [userData, setUserData] = useState(user);
  const navigate = useNavigate();

  const steps = [
    {
      id: "01",
      name: "Personal Info",
      status:
        currentStep > 1
          ? "complete"
          : currentStep === 1
          ? "current"
          : "upcoming",
    },
    {
      id: "02",
      name: "Account Info",
      status:
        currentStep > 2
          ? "complete"
          : currentStep === 2
          ? "current"
          : "upcoming",
    },
    {
      id: "03",
      name: "Additional Info",
      status:
        currentStep > 3
          ? "complete"
          : currentStep === 3
          ? "current"
          : "upcoming",
    },
    {
      id: "04",
      name: "Contact Info",
      status: currentStep === 4 ? "current" : "upcoming",
    },
  ];

  const convertDateToISO = (dateString) => {
    // Split the date string into year, month, and day
    const [year, month, day] = dateString.split('-');
  
    // Create a new Date object using the year, month, and day
    const date = new Date(year, month - 1, day); // Month in JavaScript Date starts from 0 (January is 0)
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }
  
    // Convert the date to ISO format
    return date.toISOString();
  };  

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const convertedFormData = {
      ...userData,
      userInformation: {
        ...userData.userInformation,
        birthDate: convertDateToISO(userData.userInformation.birthDate)
      }
    };
    try {
      const result = await createUser(convertedFormData);
      toast.success("User created successfully!");
      setTimeout(() =>navigate('/login'), 2000);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="relative w-full h-full bg-white shadow sm:rounded-lg">
      <div className="sticky top-0 z-10">
        <Stepper steps={steps} />
      </div>
      <div className="flex flex-col justify-center items-center py-2">
        <div className="w-full h-[500px]">
          {currentStep === 1 && (
            <PersonalInfo formData={userData} setFormData={setUserData} />
          )}
          {currentStep === 2 && (
            <AccountInfo formData={userData} setFormData={setUserData} />
          )}
          {currentStep === 3 && (
            <AdditionalInfo formData={userData} setFormData={setUserData} />
          )}
          {currentStep === 4 && (
            <ContactInfo formData={userData} setFormData={setUserData} />
          )}
        </div>
      </div>
      <div className="flex flex-row sticky bottom-0 z-10 py-4 px-4">
        <div className="flex justify-start items-center w-1/2">
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              <Link to="/login">Login here</Link>
            </a>
          </p>
        </div>
        <div className="flex justify-end w-1/2">
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
    </div>
  );
};

export default RegistrationForm;
