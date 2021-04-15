import React from 'react';
import DropDown from '../dropDown/DropDown';
import './FilterMenu.scss'

function FilterMenu(props){

    return (
        <div>
        <div className="nlm">
                <div className="flexone">
                    <div >{props.optionName} </div>
                </div>
                <div className="flextwo">
                    <DropDown options={props.optionList}></DropDown>
                </div>
        </div>
        
        </div>
    )
}
 
export default FilterMenu;