/** @format */

import * as React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import {
	randomCreatedDate,
	randomTraderName,
	randomUpdatedDate,
} from '@material-ui/x-grid-data-generator'

class BasicEditingGrid extends React.Component {
	render() {
		return (
			<div style={{ height: '50vh', width: '50%', marginLeft: '25%' }}>
				<DataGrid rows={rows} columns={columns} />
			</div>
		)
	}
}

const columns = [
	{ field: 'name', headerName: 'Name', width: 180 },
	{ field: 'age', headerName: 'Age', width: 120 },
	{
		field: 'dateCreated',
		headerName: 'Date Created',
		type: 'date',
		width: 180,
	},
	{
		field: 'lastLogin',
		headerName: 'Last Login',
		type: 'dateTime',
		width: 220,
	},
]

const rows = [
	{
		id: 1,
		name: randomTraderName(),
		age: 25,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
	},
	{
		id: 2,
		name: randomTraderName(),
		age: 36,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
	},
	{
		id: 3,
		name: randomTraderName(),
		age: 19,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
	},
	{
		id: 4,
		name: randomTraderName(),
		age: 28,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
	},
	{
		id: 5,
		name: randomTraderName(),
		age: 23,
		dateCreated: randomCreatedDate(),
		lastLogin: randomUpdatedDate(),
	},
]

export default BasicEditingGrid
