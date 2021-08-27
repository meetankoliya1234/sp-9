import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

export default class LoadingScreen extends Component {

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebaseConfig.auth().onAuthStateChanged((user) => {
            if(user) {
                this.props.navigtion.navigate('DashboardScreen')
            }else {
                this.props.navigation.navigate('LoginScreen')
            }
        })
    }

    render(){
        return(
            <View 
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
                }}    
            >
                <ActivityIndicator size="large" />
            </View>
        )
    }
}