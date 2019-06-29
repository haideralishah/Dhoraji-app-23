import React, { Component } from 'react';
import Olxad from './Olxad';

class Olxadlist extends Component {

    state = {
        adList: [
            { id: 1, title: 'mobile', des: 'a quick brown fox jumps over the lazy dog.', price: 2000 },
            { id: 2, title: 'laptop', des: 'a quick brown fox jumps over the lazy dog.', price: 50000 },
            { id: 3, title: 'fridge', des: 'a quick brown fox jumps over the lazy dog.', price: 30000 }
        ]
    }

    render() {
        return (
            <div style={{ marginTop: '25px' }}>
                {
                    this.state.adList.map((ad, index) => {
                        return (
                            <Olxad key={index} adDetails={ad} />
                        )
                    })
                }
            </div>
        )
    }

}

export default Olxadlist;