import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from "firebase";
import Button from './Button';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from './ListItem';

class ListScreen extends Component {
    static navigationOptions = {
        title: 'stacje rowerowe w NY',
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
            dane: null
        };
        this.stations = this.getFirebase().child("stations_big")
    }

    componentDidMount = () => {
        this.stations.on("value", (elements) => {
            var result = [];
            elements.forEach((element) => {
                var station = {
                    id: element.val().id,
                    stationName: element.val().stationName,
                    latitude: element.val().latitude,
                    longitude: element.val().longitude,
                    totalDocks: element.val().totalDocks,
                    statusValue: element.val().statusValue,
                    availableBikes: element.val().availableBikes,
                    availableDocks: element.val().availableDocks
                }
                result.push(station)

            })
            this.setState({
                dane: result
            })

        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <Text style={{ textAlign: "center", color: "#FFC107", fontSize: 20 }}>Witaj {this.props.navigation.state.params.user.email}!</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                        <Button title="MAIN PAGE" onPress={() => this.props.navigation.navigate("main")} />
                        <Button title="LOGOUT" onPress={this.logout} />
                    </View>
                </View>
                <View style={{ flex: 5, justifyContent: "center" }}>
                    {this.state.dane == null ? <ActivityIndicator size="small" color="#0000ff" /> : <FlatList
                        data={this.state.dane}
                        renderItem={({ item }) => <ListItem item={item} callback={this.displayMap} />}
                        keyExtractor={(item, index) => item + index}

                    />}

                </View>
            </View>
        );
    }

    displayMap = (id) => {
        var coords = this.state.dane.filter(x => x.id == id).map(x => { return { latitude: x.latitude, longitude: x.longitude } })[0]
        this.props.navigation.navigate("mapScreen", { coords: coords })
    }

    getFirebase() {
        return firebase.database().ref()
    }
    logout = () => {
        firebase.auth()
            .signOut()
            .catch((error) => alert(error))
    }
}

export default ListScreen;
