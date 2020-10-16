import React from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';

const AdminAddProgram = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
      console.log(data)
      fetch('http://localhost:9000/addProgram',{ 
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
//   useEffect(()=>{
//       fetch('http://localhost:9000/programs')
//       .then(res =>res.json())
//       .then(data =>{
//           console.log(data[0])
//       })
//   },[])
    return (
        <div className='text-center'>
            AddProgramform
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="title" defaultValue="" ref={register} placeholder='Enter tiltle' />
              <br/>
              <input name="description" ref={register({ required: true })} placeholder='Enter Designation'/>
              {errors.description && <span>This field is required</span>}
              <br/>
              <input name="image" ref={register({ required: true })} placeholder='Input Picture'/>
              {errors.image && <span>This field is required</span>}
              <br/>
             <input type="submit" />
            </form>
            </div>
    );
};

export default AdminAddProgram;