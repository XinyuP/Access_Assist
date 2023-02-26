import React, { Fragment, useState, useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

import './map-comp.styles.css';

const google = window.google;

// Initialize and add the map
const MapComp = (props) => {
	const [map, setMap] = useState(null);
	// const [markers, setMarkers] = useState([]);

	// The location of Uluru
	const { responseData } = props;
	console.log('111', responseData);

	useEffect(() => {
		// Load the Google Maps API script
		const script = document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAWcWHLVvoLzR40_G_IfOIENZpcPQNk7Tc`;
		script.onload = () => {
			// Initialize the map
			const current_loc = {
				lat: responseData.latitude,
				lng: responseData.longitude,
			}; // user input location

			const newMap = new window.google.maps.Map(
				document.getElementById('map'),
				{
					center: current_loc,
					zoom: 12,
				}
			);

			const marker = new window.google.maps.Marker({
				position: current_loc,
				map: newMap,
				title: 'Current Location',
			});

			// Create a new info window
			const infoWindow = new window.google.maps.InfoWindow();

			const markers = JSON.parse(responseData.programs);
			console.log(typeof markers);
			markers.forEach((marker) => {
				const newMarker = new window.google.maps.Marker({
					position: { lat: marker.lat, lng: marker.lon },
					map: newMap,
					title: marker.program_name,
				});

				// Add a click event listener to the marker
				newMarker.addListener('click', () => {
					// console.log('event', event)
					// Set the content of the info window
					infoWindow.setContent(`<div>Type: ${marker.program_type} <br/>Address: ${marker.program_name}  
					<br/> ${marker.address} <br/> Link: ${marker.Link}</div>`);

					// Open the info window
					infoWindow.open(newMap, newMarker);
				});
			});
			setMap(newMap);
		};
		document.head.appendChild(script);
	}, []);

	// const current_loc = { lat: responseData.latitude, lng:  responseData.longitude }; // user input location
	// // The map, centered at Uluru
	// const map = new google.maps.Map(document.getElementById("map"), {
	//   zoom: 8,
	//   center: current_loc,
	// });
	// The marker, positioned at Uluru
	// const marker = new google.maps.Marker({
	//   position: current_loc,
	//   map: map,
	// });

	// loop json, add marker

	//}

	//   window.initMap = initMap;

	// const MapComp = () => {

	return (
		<div className='map-comp-content'>
			<div id='map' style={{ height: '500px' }}></div>
			<p className='map-question'>
				Do you want to learn about state and federal resources you're eligible
				for?
			</p>
			<Link to='/form'>
				<div className='vertical-center'>
					<button className='map-button'>
						Fill out the form! <AiOutlineArrowRight />
					</button>
				</div>
			</Link>
		</div>
	);
};

export default MapComp;
