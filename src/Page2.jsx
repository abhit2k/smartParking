import React from 'react';
import './index.css';
import ListItem from './ListItem';
import Heading from './Heading';
import { Scrollbars } from 'react-custom-scrollbars';
import FilterMenu from './FilterMenu';

function Page2(){
    return(
    
            
            <div className="main-div">
                <div className="center-div">
                <Heading location="Patna, Bihar, India"></Heading>
                <FilterMenu></FilterMenu>
                 <Scrollbars style ={{ width: '100%', height: '100%' }}>
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