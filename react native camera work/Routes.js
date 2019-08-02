import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from './Home'
import Signup from './Signup'
import Signin from './Signin'
import About from './About'

const Authnavigator = createStackNavigator({
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    },
    Signin: {
        screen: Signin,
        navigationOptions: {
            header: null
        }
    },
},
    { initialRouteName: 'Signup' }
);


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,

        navigationOptions: {
            header: null
        }
    },
    About: {
        screen: About,
    },


},
    { initialRouteName: 'Home' }
);



export default createAppContainer(createSwitchNavigator(
    {
        Authentication: Authnavigator,
        App: AppNavigator,
    },
    {
        initialRouteName: 'App',
    }
));



