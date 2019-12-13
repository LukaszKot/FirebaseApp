import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

class Main extends Component {
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
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "#FFC107", alignItems: "center", justifyContent: 'center', }}>
                    <Text style={{ fontSize: 30 }}>Firebase App</Text>
                    <Text>firebase authentication</Text>
                    <Text>firebase database</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Button title="START" onPress={this.click} />
                </View>
            </View>
        );
    }

    click = () => {
        this.props.navigation.navigate("authenticate")
    }
}

export default Main;
