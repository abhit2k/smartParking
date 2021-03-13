import React from 'react';
import DropDown from '../dropDown/DropDown';

function FilterMenu(){

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
        <div>
        <div className="ListItem">
                <div>
                    <div className="leftText">availibility in </div>
                    <div>sort by</div>
                </div>
                <div>
                    <DropDown options={optionsForFirst}></DropDown>
                    <DropDown options={optionsForSecond}></DropDown>
                </div>
        </div>
        <hr styles="height:2px;border-width:0;color:gray;background-color:gray"/>
        </div>
    )
}
 
export default FilterMenu;