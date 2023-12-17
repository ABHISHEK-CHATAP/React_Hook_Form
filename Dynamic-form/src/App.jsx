import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import CardForm from "./Components/CardForm";
import FormRow from "./Components/FormRow";

const App = () => {
  /* {...register("yaha [[[[name]]]] attribute ki value rahegi")} */

  const { register, handleSubmit , control} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="App">
        <div className="container p-4">
          <div className="card border-0 shadow p-4  w-75 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardForm register={register} />
              <FormRow register={register} control={control}/>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
