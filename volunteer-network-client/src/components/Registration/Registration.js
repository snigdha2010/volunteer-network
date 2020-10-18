
import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { useState } from 'react';
import './Registration.css';

const Registration = () => {
  
  const { id } = useParams({})
  const { register, handleSubmit, errors } = useForm();
  const [ signedInUser, setSignedInUser] = useContext(UserContext);
  const [ program, setProgram ] = useState({});
  const history = useHistory();
  const onSubmit = data => {
      const newData = {...data,image:program.image}
      console.log(data)
      fetch('https://snigdha-volunteer-app.herokuapp.com/addEvents',{ 
        method:'POST',
        headers:{
        "Content-type": "application/json"
        },
        body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(data =>{
         history.push('/event-task')
          console.log(data)
      })
  };
  useEffect(()=>{
      fetch('https://snigdha-volunteer-app.herokuapp.com/programs')
      .then(res =>res.json())
      .then(data =>{
        const program = data.find(pg => pg._id == id)
          setProgram(program)
      })
  },[])
  console.log(program)
    return (
        <div className= 'register text-center'>
        <div className=' mt-4'>
           <h1 className='text-dark'>Register As volunteer</h1> 
            <form className = 'registration-form ' onSubmit={handleSubmit(onSubmit)}>
              <input name="title" defaultValue={program && program.title} ref={register} placeholder='Full Name' />
              <br/>
              <input name="email" defaultValue={signedInUser.email}  ref={register({ required: true })} placeholder='Email'/>
              {errors.email && <span>This field is required</span>}
              <br/>
              <input name="date" ref={register({ required: true })} placeholder='Date'/>
              {errors.data && <span>This field is required</span>}
              <br/>
              <input name="description" ref={register({ required: true })} defaultValue="" placeholder='Description'/>
              {errors.description && <span>This field is required</span>}
             <br/>
             <input name="organization" ref={register({ required: true })} defaultValue="" placeholder='Organization books at the library'/>
              {errors.organization && <span>This field is required</span>}
             <br/>
             <input  className = 'btn btn-primary 'value="registration" type='submit'/>
            </form>
            </div>
            </div>
    );
};

export default Registration;
