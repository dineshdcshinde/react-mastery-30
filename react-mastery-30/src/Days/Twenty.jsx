import React, {useState} from "react";

const Twenty = () => {
  const [count, setCount] = useState(0);

  const steps = [
    {
      label: "Personal Info",
      content: <div>Personal Information Content</div>,
    },
    {
      label: "Account Info",
      content: <div>Account Info Content</div>,
    },
    {
      label: "Payment",
      content: <div>Payment Content</div>,
    },
    {
      label: "Confirmation",
      content: <div>Confirmation Content</div>,
    },
    {
      label: "Review",
      content: <div>Review Content</div>,
    },
  ];

  const Stepper = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleContinue = () => {
      if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
      if (currentStep === 0) return;
      setCurrentStep((prev) => prev - 1);
    };

    return (
      <div>
        <div className="stepperContainer">
          <div id="main">
            {steps.map((step, index) => {
              return (
                <div key={index} id="stepperParent">
                  <div className="steeper">
                    <div
                      className={`stepCount 
                        

                        ${index <= currentStep ? "active" : ""}
                    `}
                    >
                      {index + 1}
                      {index < steps.length - 1 && (
                        <div
                          className={`line ${
                            index <= currentStep ? "active" : ""
                          }`}
                        ></div>
                      )}
                    </div>

                    <div className="stepLabel">{step.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="stepsContent">{steps[currentStep].content}</div>

          <div className="stepsControls">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Stepper steps={steps} />
    </>
  );
};

export default Twenty;
