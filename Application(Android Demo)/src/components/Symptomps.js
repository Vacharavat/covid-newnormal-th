import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import HomeStyles from "../styles/tab/homestyle";

class Symptomps extends Component {
  render() {
    return (
      <View style={HomeStyles.subdetail}>
        <View style={HomeStyles.imageblock}>
          <Image
            style={HomeStyles.imagedetail}
            source={this.props.detail.image }
          />
        </View>
        <View style={HomeStyles.subimageblock}>
          <Text style={HomeStyles.subimagetext}>{this.props.detail.symptomp}</Text>
        </View>
      </View>
    );
  }
}
export default Symptomps;
