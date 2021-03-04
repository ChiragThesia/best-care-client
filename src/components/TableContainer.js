import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Table } from 'reactstrap';
import './tableContainer.css';

const TableContainer = ({ columns, data }) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{
			columns,
			data
		},
		useSortBy
	);

	return (
		<div className="tableContainer">
			<p className="instruction">You can sort each column by clicking on the title</p>
			<Table bordered hover {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									<span>
										{column.isSorted ? column.isSortedDesc ? '👇' : '👆' : ''}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>

				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default TableContainer;
