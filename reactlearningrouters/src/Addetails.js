import React, { Component } from 'react';

const adDetailsStyle = {
    width: '40%',
    margin: '0 auto',
    border: '2px solid blue',
    padding: '15px',
    marginTop: '30px'
}

class Addetails extends Component {

    state = {
        adDetails: {
            1: { name: 'iPhone X', used: false, price: '1 kidney', contactPerson: 'ali', contact: '03413542800', description: "A quick brown fox jumps over the lazy dog." },
            2: { name: 'HP Probook 3643', used: true, price: '50000', contactPerson: 'akbar', contact: '03413542800', description: "A quick brown fox jumps over the lazy dog." },
            3: { name: 'Dawlance', used: true, price: '38000', contactPerson: 'aslam', contact: '03413542800', description: "A quick brown fox jumps over the lazy dog." }
        }
    }

    render() {
        let adId = this.props.match.params.adId;
        let adDetails = this.state.adDetails[adId];
        return (
            <div style={adDetailsStyle}>
                <h1>{adDetails.name}</h1>
                <p>Description: {adDetails.description}</p>
                <b>Condition: </b> {(adDetails.used) ? (<span>In used</span>) : (<span>New</span>)}
                <h3>Price: {adDetails.price}</h3>
                <h2>Contact Person Details: </h2>

                <h3>Name: {adDetails.contactPerson}</h3>
                <h3>Cell Number: {adDetails.contact}</h3>
            </div>

        )
    }

}

export default Addetails;









