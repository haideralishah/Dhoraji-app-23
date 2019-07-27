import React from 'react';
import { Text, View, } from 'react-native';
import { connect } from 'react-redux'
class About extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Welcome {this.props.username} We have great meals for you.</Text>
                <Text>{this.props.breakFast}</Text>
                <Text>{this.props.lunch}</Text>

            </View>
        )
    }
}

function mapStateToProps(states) {
    return ({
        breakFast: states.foodInfo.breakFast,
        lunch: states.foodInfo.lunch,
        username: states.basicInfo.username
    })
}

export default connect(mapStateToProps, null)(About)