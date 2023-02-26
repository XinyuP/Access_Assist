import React, { Fragment, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

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

const AddressForm = (props) => {
	const [address, setAddress] = useState('');

	// const insertAddress = () => {
	// 	APIService.InsertAddress({ address })
	// 		.then((response) => props.insertedAddresse(response))
	// 		.catch((error) => console.log('error', error));
	// };

	function handleSubmit(event) {
		event.preventDefault();
		console.log(address);
		//insertAddress();

		fetch(`http://localhost:3000/api/address`, {
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

		// setAddress(address)

		// do something with the address, like submit it to a server or store it in state
	}

	function handleChange(event) {
		setAddress(event.target.value);
	}

	return (
		<Fragment>
			<form onSubmit={handleSubmit}>
				<label class='address-label'>
					<p class='address-label-p'> What's your address? </p>
					<div className='address-spacer-30'></div>
					<input
						class='address-field'
						type='text'
						name='input-address'
						placeholder='Enter address'
						value={address}
						onChange={handleChange}
					/>
				</label>

				<div className='address-spacer-30'></div>
				<div className='address-spacer-30'></div>

				<button type='submit' className='submit-button'>
					Submit <AiOutlineArrowRight />
				</button>
			</form>
		</Fragment>
	);
};

export default AddressForm;
