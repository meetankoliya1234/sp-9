import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text, View } from 'react-native';
import TabNavigator from './TabNavigator'
import Profile from '../screens/Profile'
import LogoutScreen from '../screens/LogoutScreen'
import StackNavigator from './StackNavigator';
import Logout from '../screens/LogoutScreen';
import BubblegumSans from '../assets/fonts/BubblegumSans'
import { lightBlue100 } from 'react-native-paper/lib/typescript/styles/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
}

export default class Draw extends Component(){
    constructor(props){
        super(props);
        this.state = {
            light_theme: true,
        }
    }
    
    componentDidMount(){
        let theme;
        firebase
            .database()
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value", function (snapshot) {
                theme = snapshot.val().current_theme
            })
    }

    render(){
        let props = this.props;
        return(
            <Drawer.Navigator 
                drawerContentOptions={{
                    activeTintColor: "#e91e63",
                    inactiveTintColor: this.state.light_theme ? "black" : "white",
                    itemStyle: { marginVerticle: 5 }
                }}
                drawerContent = {props => <CustomSidebarMenu {...props} />}
            >
                <Drawer.Screen 
                    name="Home"
                    component={StackNavigator}
                    options={{unmountOnBlur: true}}
                />
                <Drawer.Screen 
                    name="Profile"
                    component={Profile}
                    options={{unmountOnBlur: true}}
                />
                <Drawer.Screen 
                    name="Logout"
                    component={Logout}
                    options={{unmountOnBlur: true}}
                />
            </Drawer.Navigator>
        )
    }
}

export default DrawerNavigator;