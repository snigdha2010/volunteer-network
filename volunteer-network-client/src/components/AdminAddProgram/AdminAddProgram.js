import React from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';

const AdminAddProgram = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
      console.log(data)
      fetch('https://snigdha-volunteer-app.herokuapp.com/addProgram',{ 
        method:'POST',
        headers:{
        "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data =>{
          console.log(data)
      })
  };

    return (
        <div className='text-center'>
            Add Event
            <form className = 'registration-form' onSubmit={handleSubmit(onSubmit)}>
              <input name="title" defaultValue="" ref={register} placeholder='Enter tiltle' />
              <br/>
              <input name="description" ref={register({ required: true })} placeholder='Enter Designation'/>
              {errors.description && <span>This field is required</span>}
              <br/>
              <input name="image" ref={register({ required: true })} placeholder='Input Picture'/>
              {errors.image && <span>This field is required</span>}
              <br/>
             <input className = 'btn btn-primary' value='Submit' type="submit" />
            </form>
            </div>
    );
};

export default AdminAddProgram;