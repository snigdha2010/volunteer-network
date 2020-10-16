import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';

const Registration = () => {
    const { id } = useParams({})
    const [ programs, setPrograms ] = useState([])
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch('http://localhost:9000/programs')
        .then(res => res.json())
        .then(data => setPrograms(data))
    },[])
    const newUser = programs.find(program=> program._id === id)
    console.log(signedInUser)
    return (
        <div className = 'text-center'>
            <input type="text" defaultValue={signedInUser.displayName} name="" id=""placeholder='Full Name'/>
            <br/>
            <input type="text" defaultValue={signedInUser.email} name="" id="" placeholder='Email'/>
            <br/>
            <input type="text" name="" id="" placeholder='Date'/>
            <br/>
            <input type="text" name="" id="" placeholder='Description'/>
            <br/>
            <input type="text" name="" id="" placeholder='Organize books at the library'/>
            <br/>
            <input type="submit" value="Registration" name="" id=""/>
            
        </div>
    );
};

export default Registration;