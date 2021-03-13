import React from 'react';
import DropDown from '../../components/dropDown/DropDown';
import './page1.scss';

function Page1(){

    const cityOptions = [
        {
            label: "30 minutes",
            value: "30 minutes"
          },
          { label: "1 hour", value: "1 hour" },
          { label: "example3", value: "example3" }
    ]
    return(
        <div>
            <div className="mainDiv">
                <div className="centreDiv"> 
                    <img src="images/logo.svg" alt="logo" className="logo"/>
                    <div className="text"> Select City</div>
                    <DropDown options={cityOptions}></DropDown>
                    <div className="text"> Select Locality</div>
                    <DropDown options={cityOptions}></DropDown>
                    <div>
                    <button type="button" className="button">NEXT</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page1;