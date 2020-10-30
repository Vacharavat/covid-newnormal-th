import React, { Component } from "react";
import { Text, View, SafeAreaView, StyleSheet, Linking } from "react-native";
import { Card } from "react-native-elements";
import { Feather } from '@expo/vector-icons';
import Color from "../constants/colors";

export class Emergency extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Card>
          <Card.Title>{this.props.detail.company}</Card.Title>
          <Card.Divider />
          <View style={styles.box}></View>
          <Text onPress={() => {Linking.openURL('tel:'+this.props.detail.tel);}} style={styles.txt}>
            <Feather name="phone-call" size={24} /> {this.props.detail.tel}{" "}
          </Text>
          <Text>{"        "}{this.props.detail.caption}</Text>
        </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
 box:{
  flex: 1,
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
 },
 txt:{
  color: Color.green,
  fontWeight: "bold",
  padding: 1,
  fontSize: 32,
 },
});

export default Emergency;
