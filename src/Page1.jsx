import React from 'react';
import DropDown from './DropDown';
import './index.css';
import './page1Style.css';

function Page1(){

    const mainDiv = {
        width:'100%',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden'
    }

    const centreDiv = {
        width:'30%',
        height:'100vh',
        background: 'linear-gradient(to bottom right, #79d3dd, #0965df)',
        boxShadow: '5px 5px 25px -5px rgba(0,0,0,0.5)',
        borderRadius: '15px'
    }

    const logoStyle = {
        width:'50%',
        height:'40%',
        marginTop:'15%'
    }

    const buttonStyle = {
        color:'#FFFFFF',
        borderColor:'#FFFFFF',
        borderRadius:'20px',
        marginTop:'10%',
        fontSize:23,
        letterSpacing: '0.1em',
        paddingLeft:'20px',
        paddingRight:'20px',
        backgroundColor:'#5199e3'
    }

    const textStyle = {
        color:'#FFFFFF',
        textAlign:'center',
        fontSize:23,
        fontWeight:80,
        marginBottom:0,
        marginTop:'5px'
    }
    const cityOptions = [
        {
            label: "30 minutes",
            value: "30 minutes"
          },
          { label: "1 hour", value: "1 hour" },
          { label: "example3", value: "example3" }
    ]
    return(
        <>
            <div className="mainDiv">
                <div className="centreDiv"> 
                    <img src="images/logo.svg" alt="" style={logoStyle}/>
                    <div style={textStyle}> Select City</div>
                    <DropDown options={cityOptions}></DropDown>
                    <div style={textStyle}> Select Locality</div>
                    <DropDown options={cityOptions}></DropDown>
                    <div>
                    <button type="button" class="btn btn-outline-primary" style={buttonStyle}>NEXT</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Page1;