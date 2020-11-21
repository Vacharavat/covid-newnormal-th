import React, { Component } from "react";
import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

export class SymptompsDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Card>
          <Card.Title>{this.props.detail.symptomp}</Card.Title>
          <Card.Divider />
          <View style={styles.box}>
            <View style={styles.imageblock}>
              <Image
                style={{ width: 100, height: 100 }}
                source={this.props.detail.image }
              />
              <Text style={styles.text}>{this.props.detail.caption}</Text>
            </View>
          </View>
        </Card>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },

  imageblock: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});

export default SymptompsDetail;
