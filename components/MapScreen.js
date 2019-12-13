import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';


class MapScreen extends Component {
    static navigationOptions = {
        title: 'Lokalizacje stacji na mapie',
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
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: this.props.navigation.state.params.coords.latitude,
                        longitude: this.props.navigation.state.params.coords.longitude,
                        latitudeDelta: 0.011,
                        longitudeDelta: 0.011,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.props.navigation.state.params.coords.latitude,
                            longitude: this.props.navigation.state.params.coords.longitude,
                        }}
                        title={"rowery"}
                        description={"rowery"}
                    />
                </MapView>
            </View>
        );
    }
}

export default MapScreen;
