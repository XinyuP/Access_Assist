import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapComp from '../../components/map-comp/map-comp.component';

import './map.styles.css';
import Color from '../../components/color/color.component';
const Map = () => {
	// const uluru = { lat: 42.3597232, lng: -71.0622357 };
	//   // The map, centered at Uluru
	//   const map = new google.maps.Map(document.getElementById("map"), {
	//     zoom: 8,
	//     center: uluru,
	//   });
	//   // The marker, positioned at Uluru
	//   const marker = new google.maps.Marker({
	//     position: uluru,
	//     map: map,
	// });

	return (
		<div className='map-content'>
			<p className='map-page-header'>Here are some resources near you!</p>
			<div className='map-comp-container'>
				<MapComp />
				{/* <Color/> */}
			</div>
		</div>
	);
};

export default Map;


