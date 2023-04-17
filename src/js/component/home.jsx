import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState(null);
  
	const handleClick = (index) => {
	  setSelected(index);
	};
  
	return (
	  <div className="traffic-light">
		<div className="top"></div>
		<div className="container">
		  <div
			className={`red ${selected === 0 ? "selected" : ""}`}
			onClick={() => handleClick(0)}
		  ></div>
		  <div
			className={`yellow ${selected === 1 ? "selected" : ""}`}
			onClick={() => handleClick(1)}
		  ></div>
		  <div
			className={`green ${selected === 2 ? "selected" : ""}`}
			onClick={() => handleClick(2)}
		  ></div>
		</div>
	  </div>
	);
  };

export default Home;
