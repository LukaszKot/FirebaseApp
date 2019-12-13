import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ margin: 5, borderWidth: 1, borderColor: "#bbbbbb", borderStyle: "solid", padding: 10, height: 150 }}>
                <View style={{ padding: 5, flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{this.props.item.stationName}</Text>
                </View>
                <View style={{ flex: 2, flexDirection: "row" }}>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.params}>lat: {this.props.item.latitude}</Text>
                        <Text style={styles.params}>lng: {this.props.item.longitude}</Text>
                        <Text style={styles.params}>razem stacji: {this.props.item.totalDocks}</Text>
                    </View>
                    <View style={{ flex: 3, flexDirection: "column" }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: this.props.item.availableBikes, backgroundColor: "black" }}>
                                <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>R</Text>
                            </View>
                            <View style={{ flex: this.props.item.availableDocks, backgroundColor: "gray" }}>
                                <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>S</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: this.props.item.statusValue == "In Service" ? "#008000" : "#FFC107", flex: 1
                        }}>
                            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>{this.props.item.statusValue == "In Service" ? "DOSTĘPNA" : "W NAPRAWIE"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row-reverse" }}>
                    <Button title={"MAPA"} onPress={this.execCallback} />
                </View>
            </View>
        );
    }

    execCallback = () => {
        this.props.callback(this.props.item.id)
    }
}

const styles = StyleSheet.create({
    params: {
        fontSize: 10
    }
})

export default ListItem;
