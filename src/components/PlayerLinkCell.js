import React from 'react';
import {Link} from "react-router-dom";

function PlayerLinkCell(props) {
    return (
        <Link to={'/Player/'+props.value}>{props.value}</Link>
    );
}

export default PlayerLinkCell;
