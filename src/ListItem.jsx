import React from 'react';

import './index.css';

function ListItem(props){
    const conditionalColour = {
        color : 'green'
    }

    const textColor = {
        color : '#696969'
    }

    let imageToDisplay = "images/";

    if(props.percent < 25 && props.percent > 10){
        conditionalColour.color = '#ED961B';
        imageToDisplay += "moderate.svg"
    }else if(props.percent <= 10){
        conditionalColour.color = '#B0000F';
        imageToDisplay += "crowded.svg"
    }else{
        conditionalColour.color = '#00A655';
        imageToDisplay += "free.svg"
    }

    return(
        <>
            <div className="ListItem">
                <div className="flex1">
                    <h2 className="name">{props.name} </h2>
                    <h3 className="address" style={textColor}>{props.address}</h3>
                </div>
                <div className="flex2">
                    <img src={imageToDisplay} alt="Error" className="logo"/>
                    <div className="percent" style={conditionalColour}> {props.percent}%</div>
                </div>
            </div>
            <hr styles="height:2px;border-width:0;color:gray;background-color:gray"></hr>
        </>
    )
}

export default ListItem;
