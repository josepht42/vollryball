import React, {Component} from 'react';
import gamesdata from '../data/gamesdata.js';
import GamesTable from "../components/GamesTable";

class Games extends Component {
    render() {
        return (
            <GamesTable data={gamesdata}/>
        );
    }
}

export default Games;
