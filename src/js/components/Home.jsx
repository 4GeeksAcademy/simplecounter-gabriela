import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondCounter = (props) => {
	return (
		<div className="flex-container bg-dark">
			<div className="box digit2 "> <i className="fa-regular fa-clock "></i> </div>
			<div className="box">{props.string.charAt(0)}</div>
			<div className="box">{props.string.charAt(1)}</div>
			<div className="box">{props.string.charAt(2)}</div>
			<div className="box">{props.string.charAt(3)}</div>
			<div className="box">{props.string.charAt(4)}</div>
			<div className="box">{props.string.charAt(5)}</div>
		</div>	
	);
	
};

export default SecondCounter;