import React, { Fragment, useState } from 'react';
import check_eligibility_medicaid from '../../../federal programs/check_eligibility_medicaid'

const Table = () => {
    const data = [
      { id: 1, name: "Medicaid", value: check_eligibility_medicaid(responses.is_citizen, responses.age, responses.is_disability, responses.is_parent_or_pregnant ) },
      { id: 2, name: "SNAP", value: isValue2True(responses) },
      { id: 3, name: "EAEDC", value: isValue3True(responses) },
      { id: 4, name: "Headstart", value: isValue3True(responses) },
      { id: 5, name: "Mass", value: isValue3True(responses) },
      { id: 6, name: "SSI", value: isValue3True(responses) },
      { id: 7, name: "TAFDC", value: isValue3True(responses) },
    ];
  
    return (
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Program Name</th>
            <th>Eligible?</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  export default Table;
  
  function isValue1True(responses) {
    // Return true if the response to question 1 is true, otherwise false
    return true;
  }
  
  function isValue2True(responses) {
    // Return true if the response to question 2 is true, otherwise false
    return true;
  }
  
  function isValue3True(responses) {
    // Return true if the response to question 3 is true, otherwise false
    return true;
  }
  