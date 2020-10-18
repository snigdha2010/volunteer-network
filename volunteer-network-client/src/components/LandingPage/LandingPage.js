import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Program from '../Program/Program';
import randomColor from 'randomcolor';

const LandingPage = () => {
    const [ programs , setPrograms ] = useState([]);
    useEffect(()=>{
        fetch('https://snigdha-volunteer-app.herokuapp.com/programs')
        .then(res => res.json())
        .then(data => setPrograms(data))
    },[])
    return (
        <div className = 'row' >
           {
               programs.map(program => <Program color = {randomColor()} key={program._id} program = {program}></Program>)
           }
        
        </div>
    );
};

export default LandingPage;