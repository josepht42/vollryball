import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import DecimalFixer from "./DemicalFixer";
import PlayerLinkCell from "./PlayerLinkCell";
import GenderCell from "./GenderCell";

const columns = [{
    Header: 'Name',
    accessor: 'Name',
    Cell: PlayerLinkCell,
},
    {
        Header: 'Gender',
        accessor: 'Gender',
        Cell: GenderCell,
    },
    {
        Header: 'Games',
        accessor: 'Games',
    },
    {
        Header: 'Initial Rating',
        accessor: 'Initial Rating',
        Cell: DecimalFixer
    },
    {
        Header: 'True Rating',
        accessor: 'True Rating',
        Cell: DecimalFixer

    },
    {
        Header: 'Lookup Rating',
        accessor: 'Lookup Rating',
        Cell: DecimalFixer
    },
]

function PlayersTable(props) {
    console.log(props)
    return (
        <ReactTable
            data={props.data}
            columns={columns}
        />
    );
}

export default PlayersTable;
