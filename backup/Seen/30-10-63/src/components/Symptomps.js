import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Color from "../constants/colors";

class Symptomps extends Component {
  render() {
    return (
      <View style={styles.subdetail}>
        <View style={styles.imageblock}>
          <Image
            style={styles.imagedetail}
            source={{ uri: this.props.detail.image }}
          />
        </View>
        <View style={styles.subimageblock}>
          <Text style={styles.subimagetext}>{this.props.detail.symptomp}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagedetail: {
    width: 65,
    height: 65,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },

  subimageblock: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },

  subimagetext: {
    fontWeight: "bold",
    color: Color.primary,
    fontSize: 12.5,
  },

  imageblock: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
  },

  subdetail: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 10,
    flex: 1,
    top: 10,
  },
});

export default Symptomps;
