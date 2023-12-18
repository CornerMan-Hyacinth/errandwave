import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import VerifyEmail from "../components/auth/VerifyEmail";
import ChooseRole from "../components/auth/ChooseRole";
import Success from "../components/auth/Success";
import AuthForm from "../components/auth/AuthForm";

const Auth = () => {
  const [step, setStep] = useState(2);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderAuth = () => {
    switch (step) {
      case 1:
        return <AuthForm handleNext={handleNext} />;

      case 2:
        return <VerifyEmail handleBack={handleBack} handleNext={handleNext} />;

      case 3:
        return <ChooseRole />;

      case 4:
        return <Success />;

      default:
        break;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>{renderAuth()}</View>
  );
};

export default Auth;
