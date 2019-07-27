import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { changeBreakfast, changeLunch } from './redux/actions/action'

class Home extends React.Component {
    goToAbout() {
        this.props.navigation.navigate('About')
    }
    changeBreakfast() {
        this.props.changeBreakFastFromStore();
    }
    changeLunch() {
        this.props.changeLunchFromStore()
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>We are having great {this.props.breakFast}</Text>
                <TouchableOpacity onPress={this.changeBreakfast.bind(this)}><Text>Change Breakfast</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.changeLunch.bind(this)}><Text>Change Lunch</Text></TouchableOpacity>

                <TouchableOpacity onPress={this.goToAbout.bind(this)}><Text>About Us</Text></TouchableOpacity>

            </View>
        )
    }
}

function mapStateToProps(states) {
    return ({
        breakFast: states.foodInfo.breakFast
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        changeBreakFastFromStore: () => {
            dispatch(changeBreakfast())
        },
        changeLunchFromStore: () => {
            dispatch(changeLunch())
        }
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)

















