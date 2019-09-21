import React, {Component} from 'react';
import playersdata from '../data/playersdata.js';
import PlayersTable from "../components/PlayersTable";

class Players extends Component {
    render() {
        return (
            <PlayersTable data={playersdata}/>
        );
    }
}

export default Players;
