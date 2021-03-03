import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Table } from 'reactstrap';
import { FaCaretSquareUp, FaCaretSquareDown } from 'react-icons/fa';

const TableContainer = ({ columns, data }) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{
			columns,
			data
		},
		useSortBy
	);

	return (
		<Table bordered hover {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>
								{column.render('Header')}
								<span>
									{column.isSorted ? column.isSortedDesc ? (
										<FaCaretSquareDown />
									) : (
										<FaCaretSquareUp />
									) : (
										''
									)}
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
	);
};

export default TableContainer;
