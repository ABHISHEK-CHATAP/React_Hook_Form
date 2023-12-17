import React from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";

const App = () => {
  const { register, handleSubmit , setError, formState: { errors },} = useForm();
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="App">
        <div className="container py-3">
          <div className="card border-0 shadow w-75 mx-auto p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className={classnames("form-control",{"is-invalid":errors.fullname})}
                  id="fullname"
                  placeholder="Enter Your Full Name"
                  {...register("fullname", {required: "this feild is required",
                minLength:{
                  value:4,
                  message:"Please enter your full Name min 4 characters"
                }
              })}
                />
                { errors.fullname && (  <div className="invalid-feedback">{errors.fullname.message}</div> ) }
              </div>

              {/* same above to get errors you have to add this functionality in all  */}
              {/* same above to get errors you have to add this functionality in all  */}
              {/* same above to get errors you have to add this functionality in all  */}


              <div className="form-group mt-2">
                <label>E-mail Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your E-mail Address"
                  {...register("email")}
                />
              </div>

              <div className="form-group  mt-2">
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Your Phone Number"
                  {...register("phone")}
                />
              </div>

              <div className="form-group  mt-2">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                  {...register("password")}
                />
              </div>

              <div className="form-group  mt-2">
                <label>Choose Your State</label>
                <select
                  className="form-control"
                  id="state"
                  {...register("state")}>
                  <option value="">--- Select Your State ---</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Assam">Assam</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Punjab">Punjab</option>
                </select>
              </div>

              <div className="form-group  mt-2">
                <label className="mr-4 ">Choose Your Gender :</label>
                <div className="form-check form-check-inline mx-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="male"
                    value="male"
                    name="gender"
                    {...register("gender")}
                  />
                  <label className="form-check-label">male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="female"
                    value="female"
                    name="gender"
                    {...register("gender")}
                  />
                  <label className="form-check-label">female</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="other"
                    value="other"
                    name="gender"
                    {...register("gender")}
                  />
                  <label className="form-check-label">other</label>
                </div>
              </div>

              <div className="form-group  mt-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="tnc"
                    {...register("terms_and_conditions")}
                  />
                  <label className="form-check-label">
                    I agree all terms & conditions
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary  mt-2">
                Create New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
