import React, { Component } from 'react';
import Olxad from './Olxad';

class Olxadlist extends Component {

    state = {
        adList: [
            { title: 'mobile', des: 'a quick brown fox jumps over the lazy dog.', price: 2000 },
            { title: 'laptop', des: 'a quick brown fox jumps over the lazy dog.', price: 50000 },
            { title: 'fridge', des: 'a quick brown fox jumps over the lazy dog.', price: 30000 }
        ]
    }

    render() {
        return (
            <div>
                {
                    this.state.adList.map((ad, index) => {
                        return (
                            <Olxad key={index} adDetails={ad}/>
                        )
                    })
                }
            </div>
        )
    }

}

export default Olxadlist;