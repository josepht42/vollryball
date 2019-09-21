import React, {Component} from 'react';
import './App.css';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import Games from './pages/Games.js';
import Players from './pages/Players.js';
import Player from "./pages/Player";


class App extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Games'>Games</Link></li>
                            <li><Link to='/Players'>Players</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/Games' component={Games}/>
                    <Route path='/Players' component={Players}/>
                    <Route path='/Player/:Name' component={Player}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
