import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Table from '../../components/table/table-component.jsx';

import './form.styles.css';
function Form() {
	const [responses, setResponses] = useState({});

	const handleChange = (event) => {
		const response = event.target.value === 'yes' ? true : false;
		const name = event.target.name;

		setResponses({
			...responses,
			[name]: response,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Call another function to generate a table with the responses

		<Table responses={responses} />;
	};
	return (
		<form onSubmit={handleSubmit}>
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
      
      <div>
				<label htmlFor='response-2'>Question 4: </label>
				<select id='response-2' name='question2' onChange={handleChange}>
					<option value=''>What’s your household income per month?</option>
					<input value='yes'/>
					{/* <option value='no'>No</option> */}
				</select>
      </div>
      
      <div>
				<label htmlFor='response-2'>Question 5: </label>
				<select id='response-2' name='question2' onChange={handleChange}>
					<option value=''>Do you have a disability?</option>
					<option value='yes'>Yes</option>
					<option value='no'>No</option>
				</select>
      </div>
      
      <div>
				<label htmlFor='response-2'>Question 6: </label>
				<select id='response-2' name='question2' onChange={handleChange}>
					<option value=''>Do you have a disability?</option>
					<option value='yes'>Yes</option>
					<option value='no'>No</option>
				</select>
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

      <div>
				<label htmlFor='response-2'>Question 11: </label>
        <select id='response-2' name='question2' onChange={handleChange}>
          
					<option value=''>What is your child's age?</option>
					<option value='yes'>Yes</option>
					<option value='no'>No</option>
				</select>
      </div>
      

			<button type='submit'>Submit</button>
    </form>
    


    
	);
}

export default Form;
