import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import SelectUSState from 'react-select-us-states';

import 'bootstrap/dist/css/bootstrap.min.css';

function GetHospitals() {
	const [ data, setData ] = useState([]);
	const [ usState, setUsState ] = useState(' ');

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
	return (
		<div>
			<h1>All hospitals here</h1>
			<p>
				Select Your State: <SelectUSState onChange={setUsState} />
			</p>
			<Table hospitalData={data} />
		</div>
	);
}

export default GetHospitals;
