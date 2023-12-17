import React from 'react'


const CardForm = ({register}) => {



  return (
    <>
          <div className="form-group">
            <label htmlFor='fullname'>Full Name</label>
            <input type='text'  className='form-control' id='fullname'{...register("fullname")} />
          </div>
          <div className="form-group">
            <label htmlFor='email'>Email address</label>
            <input type='text'  className='form-control' id='email' {...register("email")} />
          </div>
          <div className="form-group">
            <label htmlFor='phone'>Phone Number</label>
            <input type='text'  className='form-control' id='email' {...register("phone")} />
          </div>
          <br/>
     
    
    </>
  )
}

export default CardForm
