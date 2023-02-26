import React, { Fragment, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './address-form.styles.css';

function AddressForm() {
	const [address, setAddress] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		console.log(address);
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
						value={address}
						onChange={handleChange}
					/>
				</label>
			</form>
			<div className='address-spacer-30'></div>

			<div className='address-spacer-30'></div>

			<button type='submit' className='submit-button'>
				Submit <AiOutlineArrowRight />
			</button>
		</Fragment>
	);
}

export default AddressForm;
