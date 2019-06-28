import React from 'react';

const adStyles = {
    width: '25%',
    border: '1px solid blue',
    float: 'left',
    margin: '1%',
    padding: '1%'
}


export default function Olxad(props) {
    return (
        <div style={adStyles}>
            <h1>{props.adDetails.title.toUpperCase()}</h1>
            <p>{props.adDetails.des}</p>
            <p>Rs. <b>{props.adDetails.price} /-</b></p>
            <button>Show Details</button>
        </div>
    )
}

