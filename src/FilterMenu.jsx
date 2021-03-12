import React from 'react';
import DropDown from './DropDown';
import './index.css';

function FilterMenu(){


    const extraStyle = {
      paddingRight:'10px'
    }

    const leftText = {
        fontWeight:500,
        margin:0,
        marginTop:'10px',
        fontSize:20,
        marginBottom:0,
        textAlign:'left'
    }

    const leftText2 = {
        fontWeight:500,
        margin:0,
        marginTop:'10px',
        fontSize:20,
        marginBottom:0,
        // eslint-disable-next-line
        marginTop:0,
        textAlign:'left'
    }

    const flex ={
        flex:1
    }

    const optionsForFirst = [
        {
          label: "30 minutes",
          value: "30 minutes"
        },
        { label: "1 hour", value: "1 hour" },
        { label: "example3", value: "example3" }
      ]

      const optionsForSecond = [
        {
          label: "capacity",
          value: "capacity"
        },
        { label: "example2", value: "example2" },
        { label: "example3", value: "example3" }
      ]

    return (
        <>
        <div className="ListItem" style={extraStyle}>
                <div style={flex}>
                    <h2 style={leftText}>availibility in </h2>
                    <h2 style={leftText2}>sort by</h2>
                </div>
                <div style={flex}>
                    <DropDown options={optionsForFirst}></DropDown>
                    <DropDown options={optionsForSecond}></DropDown>
                </div>
        </div>
        <hr styles="height:2px;border-width:0;color:gray;background-color:gray"/>
        </>
    )
}

export default FilterMenu;