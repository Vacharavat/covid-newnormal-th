import React, { Component } from "react";
import { Text, View, SafeAreaView, StyleSheet, Linking, Image,} from "react-native";
import { Card } from "react-native-elements";
import Color from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

export class Agency extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Card>
          <Card.Title>{this.props.detail.agency}</Card.Title>
          <View style={styles.box}>
            <Image source={this.props.detail.image} style={styles.image}/>
          </View>
          <Card.Divider />
          <Text onPress={() => { Linking.openURL(this.props.detail.link);}} style={styles.txt}>
            {" "}<Entypo name="link" size={14} color="black" />{" "}{this.props.detail.link}
          </Text>
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
  image:{
    width: 100, 
    height: 100, 
    marginBottom: 10 
  },
  txt:{
    color: Color.gray,
    fontWeight: "bold",
    padding: 1,
    fontSize: 14,
  },
});

export default Agency;
