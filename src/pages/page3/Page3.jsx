import React from 'react';
import './page3.scss';
import Heading from '../../components/heading/Heading';
import CanvasJSReact from '../../canvasjs.react';
import CapacityIndicator from '../../components/capacityIndicator/CapacityIndicator';
import AvailabilityPredictor from '../../components/availabilityPredictor/AvailabilityPredictor';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Page3(){
    const options = {
        height:240,
        animationEnabled: true,
        exportEnabled: false,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: ""
        },
        axisY: {
            labelFontColor: "#000000",
            labelFontSize: 15,
            title: "",
            suffix: "",
            interval: 20
        },
        axisX: {
            labelFontColor: "#000000",
            labelFontSize: 15,
            title: "",
            prefix: "",
            intervalType: "minute",
            interval: 15,
            valueFormatString: "hh:mm"
        },
        data: [{
            lineColor: "#0965df",
            type: "line",
            toolTipContent: "count : {y}",
            dataPoints: [
                { x: new Date("October 13, 2014 08:45:00"), y: 10 ,color: "#000"},
                { x: new Date("October 13, 2014 09:00:00"), y: 24 ,color: "#000"},
                { x: new Date("October 13, 2014 09:15:00"), y: 44 ,color: "#000"},
                { x: new Date("October 13, 2014 09:30:00"), y: 56 ,color: "#000"},
                { x: new Date("October 13, 2014 09:45:00"), y: 70 ,color: "#000"},
                { x: new Date("October 13, 2014 10:00:00"), y: 62 ,color: "#000"}
                
            ]
        }]
    }
    return (
        <div className="main-div">
            <div className="center-div">
            
            <Heading location="Patna, Bihar, India"></Heading>
            <div className="full-page-margin">
            <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
            <hr styles="height:2px;border-width:0;color:gray;background-color:gray;"></hr>
            <CapacityIndicator
            name = {"Patna Zoo Parking"}
            address = {"SC-3, Bailey Road, Patna"}
            capacity = {120}
            ></CapacityIndicator>
            <AvailabilityPredictor
            name = {"Patna Zoo Parking"}
            address = {"SC-3, Bailey Road, Patna"}
            percent = {"29%"}
            freespots={30}
            >
            </AvailabilityPredictor>
            </div>
            </div>
        </div> 
    )
}

export default Page3;