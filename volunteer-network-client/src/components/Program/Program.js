import React from 'react';
import './Program.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Program = (props) => {
   const {_id,title, image} = props.program
    return (
        <div>
            <div className='program col-md-3' > 
                    <Link to={`/register/${_id}`}> <Card style={{ width: '18rem' }}>
                            <Card.Img className ='program-image' variant="top" src={image}/>
                                <Card.Body className='card-body' >
                                <Card.Title >{title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                       
                    </div>
        </div>
       
    );
};

export default Program;