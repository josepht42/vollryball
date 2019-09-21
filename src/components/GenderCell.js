import React from 'react';

function GenderCell(props) {
    let genderColor;
    if(props.value === 'M') {
        genderColor = 'cyan'
    }
    else {
        genderColor = 'magenta'
    }
        return (
        <div style={{backgroundColor: genderColor}}>{props.value}</div>
    );
}

export default GenderCell;
