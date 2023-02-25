import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about.styles.css';

class About extends Component {
	render() {
		return (
            <div className='about-page'>
                <div className='space1'></div>
				<h1 className='title'>Access Assist</h1>

                <p className='p1 f1'>
                    introduction of Access Assist
				</p>
				

				<br />

				<h2 className='got-question'>GOT QUESTIONS?</h2>
				<p className='got-question'>
					Go to &nbsp;{' '}
					<Link className='nav-link' to='/contact'>
						CONTACT
					</Link>
					&nbsp; and talk with us!
                </p>
                <div className='space'></div>
			</div>
		);
	}
}

export default About;
