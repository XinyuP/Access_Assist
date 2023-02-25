import React from 'react';
import { AiOutlineArrowRight }from 'react-icons'

import './home.styles.css';
const Home = () => {
	return (
		<div className='whole-website'>
			<div className='content'>
				<div className='home-spacer'></div>
				<h1 className='home-title'>We are Access Assist</h1>
				<div className='home-intro'>
					<p className='home-intro-p'>
						We are an organization that assists you in gaining access to
						resources near you that you are eligible for!
					</p>
				</div>
				<h2 className='home-start'>Let's get started!</h2>
				{/* <AiOutlineArrowRight/> */}
			</div>
		</div>
	);
};

export default Home;
