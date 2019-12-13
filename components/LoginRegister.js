import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import bike from '../assets/images/bike.jpg';
import { TextInput } from 'react-native-gesture-handler';
import Button from './Button';

class LoginRegister extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'rejestracja do Bikes in NY'),
            headerStyle: {
                backgroundColor: "#FFC107",
            },
            headerTitleStyle: {
                color: "#000000"
            },
            headerTintColor: "#000000"
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isRegistration: true
        };
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                <Image source={bike} style={{ width: 200, height: 200, borderRadius: 100 }} />
                <TextInput placeholder="login" style={{ width: 200, borderBottomColor: "#999999", borderBottomWidth: 2, fontSize: 20 }} />
                <TextInput placeholder="hasło" secureTextEntry={true} style={{ width: 200, borderBottomColor: "#999999", borderBottomWidth: 2, fontSize: 20 }} />
                <Button title={this.state.isRegistration ? "ZAREJESTRUJ SIĘ" : "ZALOGUJ SIĘ"} />
                <Button title={this.state.isRegistration ? "MASZ JUŻ KONTO? ZALOGUJ SIĘ" : "NIE MASZ KONTA ZAREJSTRUJ SIĘ"}
                    style={{ width: 250 }}
                    onPress={this.state.isRegistration ? this.displayLogin : this.displayRegistration} />
            </KeyboardAvoidingView>
        );

    }

    displayRegistration = () => {
        this.props.navigation.setParams({ title: 'rejestracja do Bikes in NY' })
        this.setState({
            isRegistration: true
        })
    }

    displayLogin = () => {
        this.props.navigation.setParams({ title: 'logowanie do Bikes in NY' })
        this.setState({
            isRegistration: false
        })
    }
}

export default LoginRegister;
