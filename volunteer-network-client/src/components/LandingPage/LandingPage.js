import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Program from '../Program/Program';

const LandingPage = () => {
    const [ programs , setPrograms ] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:9000/programs')
        .then(res => res.json())
        .then(data => setPrograms(data))
    },[])
    return (
        <div className = 'row' >
           {
               programs.map(program => <Program key={program._id} program = {program}></Program>)
           }
        
        </div>
    );
};

export default LandingPage;