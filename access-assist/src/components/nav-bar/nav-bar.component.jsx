import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as WebsiteLogo } from '../../logos/blue bg logo_adobe_express.svg';

import './nav-bar.styles.css';

const NavBar = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/' >
					<WebsiteLogo className='logo' />
                </Link>
                
                {/* <a class="navbar-brand" href="/">
                    <div class="logo-image">
                        <img src='../../logos/AccessAssist-logos.jpeg' class="logo" alt='logo'/>
                    </div>
                </a> */}


				{/* <h1 className='access-assist-title' >
					Access Assist
				</h1> */}

				<div className='nav-links-container'>
					<Link className='nav-link' to='/'>
						HOME
					</Link>
					<Link className='nav-link' to='/about'>
						ABOUT
					</Link>

					<Link className='nav-link' to='/contact'>
						CONTACT
					</Link>
				</div>

			</div>
			<Outlet />
		</Fragment>
	);
};

export default NavBar;
