import React from 'react';
import { useEffect } from 'react';

const LandingPage = () => {
    useEffect(()=>{
        fetch('http://localhost:9000/')
        .then(res => res.text())
        .then(data => console.log(data))
    },[])
    return (
        <div>
           This is landing page 
        
        </div>
    );
};

export default LandingPage;