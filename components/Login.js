import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import bike from '../assets/images/bike.jpg';
import { TextInput } from 'react-native-gesture-handler';
import Button from './Button';
import firebase from "firebase";

class Login extends Component {
    static navigationOptions = {
        title: 'logowanie do Bikes in NY',
        headerStyle: {
            backgroundColor: "#FFC107",
        },
        headerTitleStyle: {
            color: "#000000"
        },
        headerTintColor: "#000000"
    }

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                <Image source={bike} style={{ width: 200, height: 200, borderRadius: 100 }} />
                <TextInput placeholder="login"
                    style={{ width: 200, borderBottomColor: "#999999", borderBottomWidth: 2, fontSize: 20 }}
                    onChangeText={this.loginChanged}
                    value={this.state.login}
                />
                <TextInput placeholder="hasło"
                    secureTextEntry={true}
                    style={{ width: 200, borderBottomColor: "#999999", borderBottomWidth: 2, fontSize: 20 }}
                    onChangeText={this.passwordChanged}
                    value={this.state.password}
                />
                <Button title={"ZALOGUJ SIĘ"}
                    onPress={this.login} />
                <Button title={"NIE MASZ KONTA ZAREJSTRUJ SIĘ"}
                    style={{ width: 250 }}
                    onPress={this.displayRegistration} />
                <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
            </KeyboardAvoidingView>
        );
    }

    loginChanged = (login) => {
        this.setState({
            login: login
        })
    }

    passwordChanged = (text) => {
        this.setState({
            password: text
        })
    }

    displayRegistration = () => {
        this.props.navigation.navigate("registration")
    }

    login = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.login, this.state.password)
            .then(() => this.props.navigation.navigate("authenticate"))
            .catch(error => this.setState({ errorMessage: error.message }))
    }
}

export default Login;
