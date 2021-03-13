import React from 'react';
import './heading.scss';

function Heading(props){
    return(
        <div>
            <div className="myStyle">Smart Parking</div>
            <div className="myStyle2">{props.location}</div>
            <hr></hr>
            
        </div>
    );
    
}
export default Heading;