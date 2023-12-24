import { Step, Stepper, StepLabel, Button, Typography, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import {useForm, FormProvider, useFormContext, Controller} from "react-hook-form"


const BasicInformation = ()=>{
const {control} = useFormContext();
    return(
        <>
        <Controller control={control} name="firstName" render={({field})=>( <TextField id="first-name" label="First Name" fullWidth variant="outlined" placeholder="enter name" margin="normal" {...field} />  )} />
        <Controller control={control} name="lastName" render={({field})=>(  <TextField id="last-name" label="Last Name" fullWidth variant="outlined" placeholder=" EnterLast name" margin="normal" {...field} />)} />
        <Controller control={control} name="nickName" render={({field})=>(  <TextField id="nick-name" label="Nick Name" fullWidth variant="outlined" placeholder="enter nick name" margin="normal"  {...field} />  )} />    
        </>
    )
}

const ContactInformation = ()=>{
const {control} = useFormContext();
    return(
        <>
        <Controller control={control} name="Email" render={({field})=>( <TextField id="Email" label="Enter Email address" fullWidth variant="outlined" placeholder="enter email" margin="normal" {...field} />  )} />
        <Controller control={control} name="phone" render={({field})=>(  <TextField id="phone" label="Enter Phone" fullWidth variant="outlined" placeholder=" Enter Phone" margin="normal" {...field} />)} />
        <Controller control={control} name="alternatePhone" render={({field})=>(  <TextField id="AlternatePhone" label="Alternate Phone Number" fullWidth variant="outlined" placeholder="enter Alternate No" margin="normal"  {...field} />  )} />    
      </>
    )
}

const PersonalInformation = ()=>{
const {control} = useFormContext();
    return(
        <>
        <Controller control={control} name="adress1" render={({field})=>( <TextField id="adress1" label="Enter Address" fullWidth variant="outlined" placeholder="enter Address" margin="normal" {...field} />  )} />
        <Controller control={control} name="adress2" render={({field})=>(  <TextField id="adress2" label="Enter Address 2" fullWidth variant="outlined" placeholder=" Enter Address 2" margin="normal" {...field} />)} />
        <Controller control={control} name="country" render={({field})=>(  <TextField id="country" label="Enter Country" fullWidth variant="outlined" placeholder="enter Country" margin="normal"  {...field} />  )} />    
       </>
    )
}

const PaymentInformation = ()=>{
const {control} = useFormContext();
    return(
        <>
        <Controller control={control} name="cardNumber" render={({field})=>( <TextField id="cardNumber" label=" Card Number" fullWidth variant="outlined" placeholder="enter card Number" margin="normal" {...field} />  )} />
        <Controller control={control} name="cardMonth" render={({field})=>(  <TextField id="cardMonth" label="Card Month" fullWidth variant="outlined" placeholder=" Enter Card Month" margin="normal" {...field} />)} />
        <Controller control={control} name="cardYear" render={({field})=>(  <TextField id="cardYear" label="Card Year" fullWidth variant="outlined" placeholder="enter Card Year" margin="normal"  {...field} />  )} />    
       </>
    )
}

// ----------------------------------------------------------------- ----------------------------------------------------------------------------------------------//
// ----------------------------------------------------------------- -----------------------------------------------------------------------------------------------//


// ysha pr getStepContent function (step) parameter leke bs Component me render  kr raha hai 
// toh hume ContextApi ki tarah ==> react-form me FormCOntext and FormProvider se kahi ke bhi form ka data le sakte hai 
function getStepContent (step) {
    if(step == 0){
      return <BasicInformation/>
    }  else if(step == 1){
      return <ContactInformation/>
    }else if (step == 2){
      return <PersonalInformation/>
    }else if(step ==3){
      return <PaymentInformation/>
    } else{ return " " }
}



const HorizontalStepper = () => {
  const CurrentSteps = [
    "Basic Information",
    "Contact Information",
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
  const handleNextStep = (data) => {
    // setActiveStep((step) => step + 1);
    // setSkippedStep(skippedStep.filter(step => step !== activeStep))

    // Next Button pe hume data milta jayega
     console.log("data",data)
     if(activeStep == CurrentSteps.length - 1){
        // redux use kr rahe ho to Dispatch kr sakte hoo // fech ka use karenge server pr bhejne k liye
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res)=>{
            console.log("response",res)
            console.log("dta",data) // ye data post karenge
            setActiveStep((step) => step + 1); //Thank you page
        }) 
     }else{
        setActiveStep((step) => step + 1);
        setSkippedStep(skippedStep.filter(step => step !== activeStep))
     }
  };

  const handlePrevousStep = () => {
    setActiveStep((step) => step - 1);
  };
  //   console.log(CurrentSteps)

  // ------    React- Hook - Form started ---------------------------------------------------

  const methods = useForm({
    defaultValues:{
         firstName: "",
         lastName: "",
         nickName : "",
         Email : "",
         phone: "",
         alternatePhone :"",
         adress1:"",
         adress2:"",
         country:"",
         cardNumber: "",
         cardMonth:"",
         cardYear:""
    }
  });
//   console.log("form",methods)

// const onSubmit = (data)=> console.log("data",data);

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

      <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleNextStep)}>
      { getStepContent(activeStep)}
      

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

        <Button variant="contained" type="submit">
          {activeStep === CurrentSteps.length -1 ? "Finish" : "Next"}
        </Button>
        </Box>

        </form>
      </FormProvider>
      </>
      )}
    </>
  );
};

export default HorizontalStepper;
