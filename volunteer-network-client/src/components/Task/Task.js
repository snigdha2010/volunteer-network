import React from 'react';
import './Task.css'

const Task = (props) => {
    const { title, date, _id, image  } = props.task
    return (
        <div className = 'task bg-grey'>
            <img src={image} alt=""/>
            <div className = 'task-detail'>
                <p>{title}</p>
                <p>{date}</p>
            </div>
            <div className='cancel'>
            <button className='btn btn-primary' onClick={()=>props.handleDelete(_id)} >Cancel</button>
            </div>
        </div>
    );
};

export default Task;

