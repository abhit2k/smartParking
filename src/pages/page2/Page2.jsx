import React from 'react';
import ListItem from '../../components/listItem/ListItem';
import Heading from '../../components/heading/Heading';
import { Scrollbars } from 'react-custom-scrollbars';
import FilterMenu from '../../components/filterMenu/FilterMenu';

function Page2(){
    return(
        <div className="main-div">
            <div className="center-div">
            <Heading location="Patna, Bihar, India"></Heading>
            <FilterMenu></FilterMenu>
                <Scrollbars>
                <ListItem
                percent = {20}
                name = {"Energy Park Parking"}
                address = {"BSEB Colony Road, Patna"}
                />

                <ListItem
                percent = {50}
                name = {"Energy Park Parking"}
                address = {"BSEB Colony Road, Patna"}
                />

                </Scrollbars>
            </div>
        </div>  
    );
}
export default Page2;