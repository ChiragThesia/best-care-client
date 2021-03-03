import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import TableContainer from './TableContainer';
import SelectUSState from 'react-select-us-states';

import 'bootstrap/dist/css/bootstrap.min.css';

function GetHospitals() {
	const [ data, setData ] = useState([]);
	const [ usState, setUsState ] = useState('AL');

	useEffect(
		() => {
			axios
				.get(`http://localhost:8080/hospital/allHospitals/${usState}`)
				.then((res) => {
					setData(res.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[ usState ]
	);

	const columns = useMemo(
		() => [
			{
				Header: 'Hospital Name',
				accessor: 'hospitalName'
			},
			{
				Header: 'State',
				accessor: 'state'
			},
			{
				Header: 'MRSA W Z Score',
				accessor: 'MRSA_W_Z_Score'
			}
			// {
			// 	Header: 'Payment Reduction',
			// 	accessor: 'paymentReduction'
			// }
		],
		[]
	);

	return (
		<div>
			<p>
				Select Your State: <SelectUSState value="Texas" onChange={setUsState} />
			</p>
			<TableContainer columns={columns} data={data} />
		</div>
	);
}

export default GetHospitals;
