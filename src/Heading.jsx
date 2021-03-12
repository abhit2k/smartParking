import React from 'react';
import FilterMenu from './FilterMenu';

import './index.css';
function Heading(props){
    const myStyle = {
        marginTop: '4px',
        textAlign : 'center',
        fontWeight: '500',
        fontSize: 28
    }
    const myStyle2 = {
        textAlign : 'center',
        fontWeight: '400',
        fontSize: 18,
        color:'#696969',
        marginBottom: '4px'
    }
    return(
        <>
            <div style={myStyle}>Smart Parking</div>
            <div style={myStyle2}>{props.location}</div>
            <hr styles="height:100px;color:#696969;background-color:#696969"></hr>
            
        </>
    );
    
}
export default Heading;