
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Registration = () => {
  
  const { id } = useParams({})
  const { register, handleSubmit, errors } = useForm();
  const [signedInUser, setSignedInUser] = useContext(UserContext);
  const onSubmit = data => {
      console.log(data)
      fetch('http://localhost:9000/addUser',{ 
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
            Registration
            <form onSubmit={handleSubmit(onSubmit)}>
              <input name="title" defaultValue={signedInUser.displayName} ref={register} placeholder='Full Name' />
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
