import React from 'react';
import FilterMenu from '../filterMenu/FilterMenu';
import './FullFilter.scss'


function FullFilter(){
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

      return(
          <>
            <FilterMenu
            optionName = "availibility in:"
            optionList = {optionsForFirst}
            ></FilterMenu>
            <FilterMenu
            optionName = "sort by:"
            optionList = {optionsForSecond}
            ></FilterMenu>
            <hr styles="height:2px;border-width:0;color:gray;background-color:gray"/>
          </>
      );

}

export default FullFilter;