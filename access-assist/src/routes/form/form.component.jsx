import React, { Fragment, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import TableComp from '../../components/table-comp/table-comp.component.jsx';

import './form.styles.css';
function Form() {
	const [responses, setResponses] = useState({});

	const handleChange = (event) => {
		const response = event.target.value === 'yes' ? true : false;
		console.log('11111', event.target.value)
		const name = event.target.name;

		setResponses({
			...responses,
			[name]: response,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Call another function to generate a table with the responses

		<TableComp responses={responses} />;
	};
	return (
		<Fragment>
			<div className='spacer-30'></div>
			<form onSubmit={handleSubmit} className='form-content'>
				<div>
					<label htmlFor='response-1'>Question 1: </label>
					<select id='response-1' name='question1' onChange={handleChange}>
						<option value=''>Are you a US citizen?</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>
				<div>
					<label htmlFor='response-2'>Question 2: </label>
					<select id='response-2' name='question2' onChange={handleChange}>
						<option value=''>Do you have a disability?</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>

				<div>
					<label htmlFor='response-2'>Question 3: </label>
					<select id='response-2' name='question2' onChange={handleChange}>
						<option value=''>Are you a parent or expecting a child?</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>

				<div class='form-group'>
					<label htmlFor='response-2'>Question 4: </label>
					<label for='name-input'>
						What'`s your household income per month?
					</label>
					<input
						type='text'
						id='household-incomet'
						name='household-incomet'
						placeholder='Enter your household incomet per month'
					/>
				</div>

				<div class='form-group'>
					<label htmlFor='response-2'>Question 5: </label>
					<label for='name-input'> What's your age?</label>
					<input type='text' id='age' name='age' placeholder='Enter your age' />
				</div>

				<div class='form-group'>
					<label htmlFor='response-2'>Question 6: </label>
					<label for='name-input'>What's your household size?</label>
					<input
						type='text'
						id='household-size'
						name='household-size'
						placeholder='Enter your household size'
					/>
				</div>

				<div>
					<label htmlFor='response-2'>Question 7: </label>
					<select id='response-2' name='question2' onChange={handleChange}>
						<option value=''>Do you live in Massachussets?</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>

				<div>
					<label htmlFor='response-2'>Question 8: </label>
					<select id='response-2' name='question2' onChange={handleChange}>
						<option value=''>Are you housed?</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>

				<div>
					<label htmlFor='response-2'>Question 9: </label>
					<select id='response-2' name='question2' onChange={handleChange}>
						<option value=''>Are you in foster care?</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>

				<div>
					<label htmlFor='response-2'>Question 10: </label>
					<select id='response-2' name='question2' onChange={handleChange}>
						<option value=''>Does your child have a disability?</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>

				<div class='form-group'>
					<label htmlFor='response-2'>Question 11: </label>
					<label for='name-input'>What is your child's age?</label>
					<input
						type='text'
						id='child-age'
						name='child-age'
						placeholder='Enter your child age'
					/>
				</div>
			</form>
			{/* <button type='submit'>Submit</button> */}
			<div className='spacer-30'></div>
			<Link to='/table'>
				<div className='vertical-center'>
					<button type='submit' className='form-button'>
						Submit <AiOutlineArrowRight />
					</button>
				</div>
			</Link>
		</Fragment>
	);
}

export default Form;
