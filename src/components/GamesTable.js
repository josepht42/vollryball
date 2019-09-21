import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import PlayerLinkCell from "./PlayerLinkCell";

const columns = [{
    Header: 'Date',
    accessor: 'Date',
},
    {
        Header: 'A1',
        accessor: 'A1',
        Cell: PlayerLinkCell,
    },
    {
        Header: 'A2',
        accessor: 'A2',
        Cell: PlayerLinkCell,
    },
    {
        Header: 'B1',
        accessor: 'B1',
        Cell: PlayerLinkCell,
    },
    {
        Header: 'B2',
        accessor: 'B2',
        Cell: PlayerLinkCell,
    },
    {
        Header: 'A Score',
        accessor: 'A Score',
    },
    {
        Header: 'B Score',
        accessor: 'B Score',
    },
    {
        Header: 'Margin',
        accessor: 'Margin',
    },
]

function GamesTable(props) {
    return (
        <ReactTable
            data={props.data}
            columns={columns}
        />
    );
}

export default GamesTable;
