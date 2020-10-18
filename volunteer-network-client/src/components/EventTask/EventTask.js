import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App';
import Task from '../Task/Task';
import './EventTask.css';

const EventTask = () => {
    const [ events, setEvents ] = useState([]);
    const [ programs , setPrograms ] = useState([]);
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch('https://snigdha-volunteer-app.herokuapp.com/events/'+signedInUser.email,{
            method:'GET',
            headers: {
            'Content-type': 'application/json',
            authorization:`Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setEvents(data)
            allEvents();    
        })      
    },[])
    const allEvents = () =>{
      fetch('https://snigdha-volunteer-app.herokuapp.com/programs')
        .then(res =>res.json())
        .then(data =>{
            setPrograms(data)
        })  
    }
   
     console.log(events)
    const handleDelete = (id) =>{
        console.log(id)
        fetch(`https://snigdha-volunteer-app.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res =>res.json())
        .then(result =>{
            console.log("deleted")
            if(result){
                const others = events.filter(event => event._id !== id)
                setEvents(others)
            }
        })
    }
    return (
        <div className = 'row event bg-white'>
            {
                events.map(task => <Task task = {task}
                key = {task._id} 
                handleDelete = {handleDelete}
                ></Task>)
            }
        </div>
    );
};

export default EventTask;