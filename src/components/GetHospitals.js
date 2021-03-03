import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Table from './Table';
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
	console.log('data', data);
	const columns = useMemo(
		() => [
			{
				Header: 'Hospital Name',
				accessor: 'Hospital Name'
			},
			{
				Header: 'State',
				accessor: 'State'
			},
			{
				Header: 'MRSA W Z Score',
				accessor: 'MRSA W Z Score'
			},
			{
				Header: 'Payment Reduction',
				accessor: 'Payment Reduction '
			}
		],
		[]
	);

	return (
		<div>
			<p>
				Select Your State: <SelectUSState value="Texas" onChange={setUsState} />
			</p>
			<Table hospitalData={data} />
			{/* <TableContainer columns={columns} data={data} /> */}
		</div>
	);
}

export default GetHospitals;
