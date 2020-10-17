import React from 'react';
import './Task.css'

const Task = (props) => {
    const { title, date, _id  } = props.task
    return (
        <div className = 'task'>
            <img src="https://i.ibb.co/7bTtx2k/extra-Volunteer.png" alt=""/>
            <div className = 'task-detail'>
                <p>{title}</p>
                <p>{date}</p>
            </div>
            <div className='cancel'>
            <button onClick={()=>props.handleDelete(_id)} >Cancel</button>
            </div>
        </div>
    );
};

export default Task;

