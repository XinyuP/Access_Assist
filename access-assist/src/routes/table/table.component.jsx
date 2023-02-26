// import { Fragment } from 'react';
import TableComp from '../../components/table-comp/table-comp.component';
import { FcApproval } from 'react-icons/fc';
import { ImCross } from 'react-icons/im';

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
							<td class='tg-0pky'>
								SNAP(Supplemental Nutrition Assistance Program)
							</td>
							<td class='tg-0pky' id='FcApproval'>
								<FcApproval size={30} />
							</td>
						</tr>
						<tr>
							<td class='tg-0pky'>2</td>
							<td class='tg-0pky'>Medicaid</td>
							<td class='tg-0pky'>
								<ImCross size={20} />
							</td>
						</tr>
						<tr>
							<td class='tg-0pky'>3</td>
							<td class='tg-0pky'>
								EAEDC (Emergency Aid to Elders, Disabled & Children)
							</td>
							<td class='tg-0pky'>
								<ImCross size={20} />
							</td>
						</tr>
						<tr>
							<td class='tg-0pky'>4</td>
							<td class='tg-0pky'>MASSHealth</td>
							<td class='tg-0pky'>
								<FcApproval size={30} />
							</td>
						</tr>

						<tr>
							<td class='tg-0pky'>5</td>
							<td class='tg-0pky'>Child Care Vouchers</td>
							<td class='tg-0pky'>
								<ImCross size={20} />
							</td>
						</tr>

						<tr>
							<td class='tg-0pky'>6</td>
							<td class='tg-0pky'>Fuel Assistance</td>
							<td class='tg-0pky'>
								<FcApproval size={30} />
							</td>
						</tr>

						<tr>
							<td class='tg-0pky'>7</td>
							<td class='tg-0pky'>Head Start</td>
							<td class='tg-0pky'>
								<FcApproval size={30} />
							</td>
						</tr>

						<tr>
							<td class='tg-0pky'>8</td>
							<td class='tg-0pky'>SSI/SSDI</td>
							<td class='tg-0pky'>
								<ImCross size={20} />
							</td>
                        </tr>

                        <tr>
							<td class='tg-0pky'>9</td>
							<td class='tg-0pky'>Haley House</td>
							<td class='tg-0pky'>
								<FcApproval size={30} />
							</td>
                        </tr>
                        

                        <tr>
							<td class='tg-0pky'>10</td>
							<td class='tg-0pky'>East Boston Community Soup</td>
							<td class='tg-0pky'>
								<FcApproval size={30} />
							</td>
                        </tr>
                        
                        <tr>
							<td class='tg-0pky'>11</td>
							<td class='tg-0pky'>Continuums of care</td>
							<td class='tg-0pky'>
								<ImCross size={20} />
							</td>
                        </tr>
                        

                        <tr>
							<td class='tg-0pky'>12</td>
							<td class='tg-0pky'>Boston University Upward Bound</td>
							<td class='tg-0pky'>
								<ImCross size={20} />
							</td>
                        </tr>
                        
                        <tr>
							<td class='tg-0pky'>13</td>
							<td class='tg-0pky'>Boston HERC</td>
							<td class='tg-0pky'>
								<FcApproval size={30} />
							</td>
                        </tr>
                        
                        <tr>
							<td class='tg-0pky'>14</td>
							<td class='tg-0pky'>Maternal support</td>
							<td class='tg-0pky'>
								<FcApproval size={30} />
							</td>
						</tr>
                        



					</tbody>
				</table>
			</div>
		</div>

		// </Fragment>TAFDC (Transitional Aid to Families with Dependent Children)
	);
};

export default Table;



