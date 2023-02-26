import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
				<h2 className='home-start'>
					Let's get started!
				</h2>
				<div className='home-spacer-30'></div>
				<div className='home-spacer-30'></div>

				{/* <div className='home-arrow'><AiOutlineArrowRight /></div> */}
				<Link to='/address'>
					<div className='vertical-center'>
						<button type='submit' className='home-button'>
							Get Started <AiOutlineArrowRight />
						</button>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;
