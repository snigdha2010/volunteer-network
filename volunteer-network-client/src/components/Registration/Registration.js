
import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { useState } from 'react';

const Registration = () => {
  
  const { id } = useParams({})
  const { register, handleSubmit, errors } = useForm();
  const [ signedInUser, setSignedInUser] = useContext(UserContext);
  const [ programs, setPrograms ] = useState([]);
  const history = useHistory();
  const onSubmit = data => {
      console.log(data)
      fetch('https://snigdha-volunteer-app.herokuapp.com/addEvents',{ 
        method:'POST',
        headers:{
        "Content-type": "application/json"
        },
        body: JSON.stringify(data)
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
          setPrograms(data)
      })
  },[])
  const program = programs.find(pg => pg._id == id)
  console.log(program)
    return (
        <div className='text-center'>
            Registration
            <form onSubmit={handleSubmit(onSubmit)}>
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
             <input type="submit" />
            </form>
            </div>
    );
};

export default Registration;
