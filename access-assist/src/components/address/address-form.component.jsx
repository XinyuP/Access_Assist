import React, { Fragment, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import './address-form.styles.css';

// class APIService {
// 	static InsertAddress(body) {
// 		return fetch(`/api/address`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(body),
// 		})
// 			.then((response) => {
// 				if (response.ok) {
// 					return response.json();
// 				}
// 			})
// 			.catch((error) => console.log(error));
// 	}
// }

const AddressForm = () => {
	const [address, setAddress] = useState('');
	const [isVisible, setIsVisible] = useState(false);

	// const insertAddress = () => {
	// 	APIService.InsertAddress({ address })
	// 		.then((response) => props.insertedAddresse(response))
	// 		.catch((error) => console.log('error', error));
	// };

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(address);
		//insertAddress();

		fetch(`http://127.0.0.1:5000/api/address`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ address: address }),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			.catch((error) => console.log(error));
		setIsVisible(true);
		// setAddress(address)
		event.preventDefault();
		// do something with the address, like submit it to a server or store it in state
	};

	const handleChange = (event) => {
		setAddress(event.target.value);
	};

	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<label className='address-label'>
					<p className='address-label-p'> What's your address? </p>
					<div className='address-spacer-30'></div>
					<input
						className='address-input'
						type='text'
						name='input-address'
						placeholder='Enter address'
						value={address}
						onChange={handleChange}
					/>
					{/* <div className='address-spacer-30'></div> */}
					<button type='submit' className='submit-button'>
						Submit <AiOutlineArrowRight />
					</button>
					<br/>
					 {isVisible && <Link to='/map' className='see'>
						We have generated the list of all the available resources around you!
						Click here to see!
					</Link>}
					
				</label>
			</form>
		</Fragment>
	);
};

export default AddressForm;
