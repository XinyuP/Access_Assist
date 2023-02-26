import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Table from '../../../components/table/table-component.jsx'

import './form.styles.css';
function Form() {

    const [responses, setResponses] = useState({});
  
    const handleChange = (event) => {
      const response = event.target.value === "yes" ? true : false;
      const name = event.target.name;
  
      setResponses({
        ...responses,
        [name]: response,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Call another function to generate a table with the responses
      generateTable(responses);
      <Table responses={responses}/>
    };
    return (
           <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="response-1">Question 1: </label>
        <select id="response-1" name="question1" onChange={handleChange}>
          <option value="">Are you a US citizen?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label htmlFor="response-2">Question 2: </label>
        <select id="response-2" name="question2" onChange={handleChange}>
          <option value="">Do you have a disability?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>

    );
}

export default Form;
