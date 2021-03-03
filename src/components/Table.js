import React from 'react';

const Table = ({ hospitalData }) => {
	return (
		<table className="table">
			<thead>
				<tr className="columnName">
					<th>Hospital Name</th>
					<th>State</th>
					<th>MRSA W Z Score</th>
					<th>Payment Reduction</th>
				</tr>
			</thead>
			<tbody>
				{hospitalData.length > 0 ? (
					hospitalData
						.sort(hospitalData.MRSA_W_Z_Score)
						.map(({ hospitalName, state, MRSA_W_Z_Score, paymentReduction }) => {
							return (
								<tr>
									<td>{hospitalName}</td>
									<td>{state}</td>
									<td>{MRSA_W_Z_Score}</td>
									<td>
										{paymentReduction}
										{/* {hospitalData.paymentReduction === 'No' ? (
											{ paymentReduction }
										) : null} */}
									</td>
								</tr>
							);
						})
				) : (
					<tr>
						<td> Loading ...</td>
						<td> Loading ...</td>
						<td> Loading ...</td>
						<td> Loading ...</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default Table;
