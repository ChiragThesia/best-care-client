import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import TableContainer from './TableContainer';
import SelectUSState from 'react-select-us-states';

import 'bootstrap/dist/css/bootstrap.min.css';

function GetHospitals() {
	const [ data, setData ] = useState([]);
	const [ usState, setUsState ] = useState('AL');

	const filterBestHospitals = (allHospitals) => {
		const goodHospitals = allHospitals.filter(
			(hospital) => hospital.paymentReduction === 'No' && hospital.MRSA_W_Z_Score !== 'N/A'
		);
		return goodHospitals;
	};

	useEffect(
		() => {
			axios
				.get(`https://intense-ocean-23310.herokuapp.com/hospital/allHospitals/${usState}`)
				.then((res) => {
					setData(filterBestHospitals(res.data));
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
			},
			{
				Header: 'Payment Reduction',
				accessor: 'paymentReduction'
			}
		],
		[]
	);

	return (
		<div>
			<h5>
				Select Your State: <SelectUSState onChange={setUsState} />
			</h5>
			<TableContainer columns={columns} data={data} />
		</div>
	);
}

export default GetHospitals;
