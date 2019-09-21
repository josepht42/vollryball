import React, {Component} from 'react';
import gamesdata from '../data/gamesdata.js';
import 'react-table/react-table.css';
import GamesTable from "../components/GamesTable";

class Player extends Component {
    render() {
        const playerName = this.props.match.params.Name;
        const playerGames = gamesdata.filter(game => {
            return(game.A1 === playerName || game.A2 === playerName || game.B1 === playerName || game.B2 === playerName)
        })
        return (
            <div>
                this is {playerName}'s profile page
                <GamesTable data={playerGames}/>
            </div>
        );
    }
}

export default Player;
