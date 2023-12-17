import React,{memo} from 'react'
import { useFieldArray } from 'react-hook-form'

const FormRow = ({register, control}) => {

const {append, fields, remove} = useFieldArray({
    control,
    name:"users",
})

  return (
    <>
    <div className="card mb-4">
        <div className="card-header">User Information</div>
        <div className="card-body">
           {
            fields.map((item, index)=>{
                return(
                    <>
                    <div className="row mt-2 " key={item.id}>
                    {/* <div className="col">
                    ye [[name == ki feild direct {...register} me add ki ]]
                      <input type='text' className='form-control' placeholder=' first name' name={`users[${index}].firstname`} {...register(`users[${index}].firstname`)} defaultValue={item.firstname} />
                    </div> */}
                    <div className="col">
                      <input type='text' className='form-control' placeholder=' first name'  {...register(`users[${index}].firstname`)} defaultValue={item.firstname} />
                    </div>
                    <div className="col">
                      <input type='text' className='form-control' placeholder=' last name'  {...register(`users[${index}].lastname`)} defaultValue={item.lastname} />
                    </div>
                    <div className="col">
                      <input type='text' className='form-control' placeholder=' email adress'  {...register(`users[${index}].emailAddress`)} defaultValue={item.emailAddress} />
                    </div>
                    <div className="col">
                      <select className='form-control' id='state'  {...register(`users[${index}].state`)} defaultValue={item.state}>
                          <option value="">Select  State</option>
                          <option value="jharkhand">Jharkhand</option>
                          <option value="bihar">Bihar</option>
                          <option value="asam">Asam</option>
                          <option value="maharashtra">Maharashtra</option>
                      </select>
                    </div>
                    <div className="col">
                        <button className='btn btn-danger' onClick={()=> remove(index)}>X</button>
                    </div>
                  </div>
                    </>
                )
            })
           }
            <button className='btn btn-primary mt-3' onClick={()=> append({
                firstname:"",
                lastname:"",
                emailAddress:"",
                state:""
            })}>Add Row</button>
        </div>
    </div>
    
    </>
  )
}

export default memo(FormRow)
