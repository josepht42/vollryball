import React from 'react';

function DecimalFixer(props) {
    return (
        <span className='number'>{parseFloat(props.value).toFixed(2)}</span>
    );
}

export default DecimalFixer;
