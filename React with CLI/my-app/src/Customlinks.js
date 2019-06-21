import React from 'react';

import './index.css';

let linkStyles = {
    color: 'green',
    backgroundColor: 'yellow'
}

class CustomeLinks extends React.Component {
    render() {
        return (
            <a href={this.props.href} style={linkStyles}>{this.props.linktext}</a>
        )
    }

}

export default CustomeLinks;