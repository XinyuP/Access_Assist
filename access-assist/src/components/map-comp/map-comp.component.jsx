import React, { Fragment, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './map-comp.styles.css';

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
