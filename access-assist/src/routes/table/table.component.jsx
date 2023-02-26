// import { Fragment } from 'react';
import TableComp from '../../components/table-comp/table-comp.component';
import { FcApproval } from 'react-icons/fc';
import {ImCross}  from 'react-icons/im';

import React from 'react';
import './table.styles.css';

const Table = () => {
	return (
		// <Fragment>
		<div className='table-page-container'>
			<p>Here are the resources near you that you are eligible for!</p>
			{/* <TableComp is_citizen='true' age='45' /> */}
			<div className='table-itself'>
				<table class='tg'>
					<thead>
						<tr>
							<th class='tg-0pky'>NO.</th>
							<th class='tg-0pky'>Program</th>
							<th class='tg-0pky'>Eligible</th>
						</tr>
					</thead>
					

					<tbody>
						<tr>
							<td class='tg-0pky'>1</td>
							<td class='tg-0pky'></td>
							<td class='tg-0pky' id="FcApproval"><FcApproval size={30}/></td>
                        </tr>
                        <tr>
							<td class='tg-0pky'>2</td>
							<td class='tg-0pky'></td>
							<td class='tg-0pky'><ImCross size={20}/></td>
						</tr>
						<tr>
							<td class='tg-0pky'>3</td>
							<td class='tg-0pky'></td>
							<td class='tg-0pky'><ImCross size={20}/></td>
						</tr>
						<tr>
							<td class='tg-0pky'>4</td>
							<td class='tg-0pky'></td>
							<td class='tg-0pky'><FcApproval size={30}/></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		// </Fragment>
	);
};

export default Table;
