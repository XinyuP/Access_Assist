import React, { Fragment, useState } from 'react';
import check_eligibility_medicaid from '../../federal_programs/check_eligibility_medicaid';
import eaedc_eligibility from '../../state_programs/check_eligibility_eaedc';
import headstart_eligibility from '../../state_programs/check_eligibility_headstart';
import masshealth_eligibility from '../../state_programs/check_eligibility_mass';
import ssi_eligibility from '../../state_programs/check_eligibility_ssi';
import tafdc_eligibility from '../../state_programs/check_eligibility_tafdc';
import snap_eligibility from '../../federal_programs/check_eligibility_snap';


const Table = (props) => {
	const { responses } = props;

	const data = [
		{
			id: 1,
			name: 'Medicaid',
			value: check_eligibility_medicaid(
				responses.is_citizen,
				responses.age,
				responses.is_disability,
				responses.is_parent_or_pregnant
			),
		},
		{
			id: 2,
			name: 'SNAP',
			value: snap_eligibility(responses.income, responses.household),
		},
		{
			id: 3,
			name: 'EAEDC',
			value: eaedc_eligibility(
				responses.lives_in_ma,
				responses.is_citizen,
				responses.age
			),
		},
		{
			id: 4,
			name: 'Headstart',
			value: headstart_eligibility(
				responses.age,
				responses.is_homeless,
				responses.in_fostercare
			),
		},
		{
			id: 5,
			name: 'Mass',
			value: masshealth_eligibility(
				responses.lives_in_ma,
				responses.is_citizen
			),
		},
		{ id: 6, name: 'SSI', value: ssi_eligibility(responses) },
		{
			id: 7,
			name: 'TAFDC',
			value: tafdc_eligibility(
				responses.children_age,
				responses.is_pregnant,
				responses.lives_in_ma,
				responses.is_citizen
			),
		},
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
					<tr key={item.id} className={item.value ? 'true-value' : ''}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>{item.value.toString()}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
