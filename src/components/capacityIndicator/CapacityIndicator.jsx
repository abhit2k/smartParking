import React from 'react';
import './capacityIndicator.scss'
function CapacityIndicator(props){
    const conditionalColour = {
        color : 'green'
    }


    if(props.percent < 25 && props.percent > 10){
        conditionalColour.color = '#ED961B';
    }else if(props.percent <= 10){
        conditionalColour.color = '#B0000F';
    }else{
        conditionalColour.color = '#00A655';
    }

    return(
        <>
            <div className="item1">
                <div className="flex1">
                    <div className="name">{props.name} </div>
                    <h3 className="address">{props.address}</h3>
                </div>
                <div className="flex2">
                    <div className="capacity" style={conditionalColour}>{props.capacity}</div>
                    <div className="info" >Parking lot capacity</div>
                </div>
            </div>
            <hr styles="height:2px;border-width:0;color:gray;background-color:gray"></hr>
        </>
    )
}

export default CapacityIndicator;
