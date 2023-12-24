import { Step, Stepper, StepLabel, Button, Typography, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";


function getStepContent (step) {
    if(step == 0){
      return (
          <>
          <TextField id="first-name" label="First Name" fullWidth variant="outlined" placeholder="enter name" margin="normal" />
          <TextField id="last-name" label="Last Name" fullWidth variant="outlined" placeholder=" EnterLast name" margin="normal" />
          <TextField id="nick-name" label="Nick Name" fullWidth variant="outlined" placeholder="enter nick name" margin="normal" />
          </>
      )
    }
  else if(step == 1){
      return (
          <>
            <TextField id="email" label="Email" fullWidth variant="outlined" placeholder="Enter Email" margin="normal" />
          <TextField id="phone-number" label="Phone Number" fullWidth variant="outlined" placeholder=" Enter Phone No" margin="normal" />
          <TextField id="Alternate-phone" label="Nick Name" fullWidth variant="outlined" placeholder="enter Alternate no" margin="normal" />
          </>
      )
    }else if (step == 2){
      return (
          <>
           <TextField id="adress" label="Address" fullWidth variant="outlined" placeholder="Enter Address" margin="normal" />
          <TextField id="address 1" label="Address 1" fullWidth variant="outlined" placeholder=" Enter Address" margin="normal" />
          <TextField id="Country" label="Country" fullWidth variant="outlined" placeholder="enter country" margin="normal" />
          </>
       )
    }else if(step ==3){
      return (
          <>
           <TextField id="card-number" label="Card Number" fullWidth variant="outlined" placeholder="Enter Card Number" margin="normal" />
          <TextField id="Card-Month" label="Card Month" fullWidth variant="outlined" placeholder=" Enter Card Month" margin="normal" />
          <TextField id="card-year" label="Card Year" fullWidth variant="outlined" placeholder="enter Card Year" margin="normal" />
          </>
       )
    } else{ return " " }
}





const HorizontalStepper = () => {
  const CurrentSteps = [
    "Basic Information",
    "Content Information",
    "Personal Information",
    "Payment",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [skippedStep, setSkippedStep] = useState([]);

  const isStepOptional = (step)=>{
    return step == 1 || step == 2;
  }
  const handleSkip =()=>{
    if(!isStepSkipped(activeStep)){
   setSkippedStep([...skippedStep,activeStep]);
   }
    setActiveStep((step)=> step + 1);
  }

  const isStepSkipped = (step)=>{
    return skippedStep.includes(step);
  }

  // ------    Back and Next Buttons ---------------------
  const handleNextStep = () => {
    setActiveStep((step) => step + 1);
    setSkippedStep(skippedStep.filter(step => step !== activeStep))
  };

  const handlePrevousStep = () => {
    setActiveStep((step) => step - 1);
  };
  //   console.log(CurrentSteps)



  return (
    <>
    {/* [[alternativeLabel]] props se steps uper aa gaye and label niche aa gaye ,, pehle ek he line me the  */}
        <Stepper activeStep={activeStep} alternativeLabel>
          {CurrentSteps.map((step, i) => {

              const labelProps = {};
              if(isStepOptional(i)){
                labelProps.optional=(
                    <>
                    <Typography variant="caption" sx={{display:"flex", justifyContent:"center"}}>optional</Typography>
                    </>
                )
              }

              const stepProps = {};
              if(isStepSkipped(i)){
                stepProps.completed = false;
              }

            return (
                // yaha pr Step me[[ Completed={false}]] ka prop aata hai , but particular index pe chahiye tha toh . stepProps ka empty object banake usme isStepSkippped function banake index passs kia and stepProps.completed = false kr dia
                // and {...stepProps} se acquire kia
              <Step key={i} {...stepProps}> 
                {/* <StepLabel optional={<Typography variant="caption" sx={{display:"flex", justifyContent:"center"}}>optional</Typography>}> {step}</StepLabel> */}
                <StepLabel {...labelProps}> {step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

       

       {activeStep === CurrentSteps.length ? (
        <Typography variant="h3" align="center" p={10}>
          Thank you
        </Typography>
      ) :( 
      <>
        <form>
        { getStepContent(activeStep)}
        </form>

      <Box sx={{display:"flex", justifyContent:"space-between"}} >
        <Button
          variant="contained"
          onClick={handlePrevousStep}
          disabled={activeStep === 0}
        >
          Back
        </Button>

        {
           isStepOptional(activeStep) && (
                <Button
          variant="contained"
          onClick={handleSkip}
        > Skip </Button>
            )
        }

        <Button variant="contained" onClick={handleNextStep}>
          {activeStep === CurrentSteps.length -1 ? "Finish" : "Next"}
        </Button>
        </Box>
      </>
      )}
    </>
  );
};

export default HorizontalStepper;
