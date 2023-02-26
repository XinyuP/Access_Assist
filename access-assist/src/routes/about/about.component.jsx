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
                    We identified a problem. There are multiple benefit programs out there but they are underutilized.
					On conducting research, we learned that the cause for this is a lack of information about such programs and their eligibility criteria. 
					Thus, Access Assist was born. 
					Access Assist helps make access to benefit programs more equitable!
				</p>

				<br />

				<h2 className='got-question'>Have any questions?</h2>
				<p className='got-question'>
					Feel free to come talk with us &nbsp;{' '}
					<Link className='nav-link' to='/contact'>
						here
					</Link>
					&nbsp;!
                </p>
                <div className='space'></div>
			</div>
		);
	}
}

export default About;
