import React from 'react'
import {useForm} from "react-hook-form";

const App = () => {
          {/* {...register("yaha [[[[name]]]] attribute ki value rahegi")} */}
const {register, handleSubmit} = useForm();
const onSubmit = (data) => {
console.log(data);
// console.log(data.gender);
};

  return (
    <>
    {/* bas [[name]] attribute [[Backend]] ke [[Schema]] se match karna chahiye  */}
     <div className="App">
      <div className="container py-5">
      <div className="card border-0 shadow p-4 w-50 mx-auto">
         <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor='fullname'>Full Name</label>
            <input type='text' name='fullname' className='form-control' id='fullname'{...register("fullname")} />
          </div>
          <div className="form-group">
            <label htmlFor='email'>Email address</label>
            <input type='text' name='email' className='form-control' id='email' {...register("email")} />
          </div>
          <div className="form-group">
            <label htmlFor='phone'>Phone Number</label>
            <input type='text' name='phone' className='form-control' id='email' {...register("phone")} />
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' className='form-control' id='password' {...register("password")} />
          </div>
      {/* ----------------------------------------? */}
          {/* radio button == isme [[male, female, other]] hai 3 me se ek print hoga toh inka [[name]] same hona chahiye */} 
          {/* ans : [[[[[name:value]]]]], [[[[gender :"male"]]]]  */}
          {/* {...register("yaha [[[[name]]]] attribute ki value rahegi")} */}
          <div className="form-group mt-2">
             <div className="form-check form-check-inline">
                <input className='form-check-input' type='radio' id='male' value="male" {...register("gender")} />
                <label className='form-check-label' htmlFor='male'>male</label>
             </div>
             <div className="form-check form-check-inline">
                <input className='form-check-input' type='radio' id='female' value="female" {...register("gender")} />
                <label className='form-check-label' htmlFor='female'>female</label>
             </div>
             <div className="form-check form-check-inline">
                <input className='form-check-input' type='radio' id='other' value="other" {...register("gender")} />
                <label className='form-check-label' htmlFor='other'>other</label>
             </div>
          </div>
       {/* -----------------------------------------------------------    */}
          {/* select attribute  */}
          {/* bs [[name:vale]] dekhani hai , [[name=state : value= Delhi,Punjab, jharkhand, Maharashtra]] */}
          <div className="form-group mt-2">
            <select className='custom-select form-control'   {...register("state")}>
                   <option value="">Select your state</option>
                   <option value="Delhi">Delhi</option>
                   <option value="Punjab">Punjab</option>
                   <option value="jharkhand">Jharkhand</option>
                   <option value="Maharashtra">Maharashtra</option>
            </select>
          </div>
   {/* ------------------------------------------------------------ */}
         
         {/* Checkbox== byDefault behaviour [[true/false]] ka hota hai agar value dia toh value aayegi  */} 
         <div className="form-group mt-2">
          <div className="form-check form-check-inline">
            <input className='form-check-input' type='checkbox' id='terms' value="agree" {...register("terms_and_conditions")} />
            <label className='form-check-label' htmlFor='terms' >I agree all terms and conditions</label>
          </div> 
          <div className="form-check form-check-inline">
            <input className='form-check-input' type='checkbox' id='updates'  {...register("send_me-updates")} />
            <label className='form-check-label' htmlFor='terms' >send me latest updates</label>
          </div>
         </div>

          <br/>
          <button type="submit" className='btn btn-primary'>Register</button>
         </form>
      </div>
      </div>
     </div>
    
    
    </>
  )
}

export default App
