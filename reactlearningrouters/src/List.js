import React, { Component } from 'react';


class List extends Component {

    state = {
        fruits: ['apple', 'banana', 'orange', 'mango']
    }

    render() {
        return (
            <div>
                {
                    this.state.fruits.map((fruit, index) => {
                        return (
                            <h1 key={index}>{fruit}</h1>
                        )

                    })

                }
            </div>
        )
    }

}

export default List;