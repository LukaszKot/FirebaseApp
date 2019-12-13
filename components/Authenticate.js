import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDcZMRDQ4Xn5nBDcVwUUpuPvVz4VjzTWPk",
    authDomain: "kot4id2.firebaseapp.com",
    databaseURL: "https://kot4id2.firebaseio.com",
    projectId: "kot4id2",
    storageBucket: "kot4id2.appspot.com",
    messagingSenderId: "34611908096",
    appId: "1:34611908096:web:337e5cd3e6a58533d812e5",
    measurementId: "G-NRVT6QZVJ9"
};

firebase.initializeApp(firebaseConfig);

class Authenticate extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Text>Authenticating</Text>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    componentDidMount = () => {
        // firebase.auth()
        //     .signOut()
        //     .then(() => alert("logout"))
        //     .catch((error) => alert(error))
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.props.navigation.navigate("listScreen", { user: user })
            }
            else {
                this.props.navigation.navigate("registration")
            }


        })
    }
}

export default Authenticate;
