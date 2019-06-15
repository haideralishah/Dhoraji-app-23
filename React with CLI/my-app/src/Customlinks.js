import React from 'react';


class CustomeLinks extends React.Component{
    render(){
        console.log(this.props);
        return (
            <a href={this.props.href}>{this.props.linktext}</a>
        )
    }

}

export default CustomeLinks;