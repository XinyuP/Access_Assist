import React, { Fragment, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

import './map-comp.styles.css';

const google = window.google


// Initialize and add the map
const initMap = (props) => {
    // The location of Uluru
	const { responseData } = props;
	console.log(responseData);
	

    const current_loc = { lat: 42.3597232, lng: -71.0622357 }; // user input location 
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: current_loc,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: current_loc,
      map: map,
    });
  
    // loop json, add marker
  
  
  }
  

  
  window.initMap = initMap;



const MapComp = () => {




	return (
		<div className='map-comp-content'>




			<p>MapComp Page</p>




			<p>
				Do you want to learn about state and federal resources you're eligible
				for?
				<br />
				<Link to='/form'>
					<div className='vertical-center'>
						<button className='map-button'>
							Fill out the form! <AiOutlineArrowRight />
						</button>
					</div>
				</Link>
			</p>
		</div>
	);
};

export default MapComp;
