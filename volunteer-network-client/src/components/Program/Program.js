import React from 'react';
import './Program.css';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
const Program = (props) => {
   const {_id,title, image} = props.program
   const history = useHistory();
    return (
        <div>
                <div className='program col-md-3' > 
                    <Card onClick={()=>history.push(`/register/${_id}`)} className='program-card' style={{ width: '18rem'}}>
                        <Card.Img className ='program-image' variant="top" src={image}/>
                            <Card.Body style={{backgroundColor:props.color}} className='card-body' >
                            <Card.Title style={{cursor:'pointer'}}>{title}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
        </div>
       
    );
};

export default Program;