import React from 'react';
import DropDown from '../dropDown/DropDown';
import './availabilityPredictor.scss'
function AvailabilityPredictor(props){
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
    const optionsForFirst = [
        {
          label: "30 minutes",
          value: "30 minutes"
        },
        { label: "1 hour", value: "1 hour" },
        { label: "example3", value: "example3" }
      ]

    return(
        <>
            <div className="item">
                <div className="flex1">
                    <div className="availability">
                        availability in
                    </div>
                    <DropDown
                    options = {optionsForFirst}
                    ></DropDown>
                </div>
                <div className="flex2">
                    <div className="percent" style={conditionalColour}>{props.percent}</div>
                    <div className="info" >{props.freespots} spots available</div>
                </div>
            </div>
            
            <hr styles="height:2px;border-width:0;color:gray;background-color:gray;margin:0"></hr>
            
            <button type="button" className="button">SELECT</button>
        </>
    )
}

export default AvailabilityPredictor;