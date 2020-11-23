import React, { Component } from "react";
import {Text,View,Image,TouchableOpacity,} from "react-native";
import { IMAGE } from "./constants/image";
import Color from "./constants/colors";

export class CustomHeader extends Component {
  render() {
    let { navigation, isHome, title } = this.props;

    return (
      <View style={{ flexDirection: "row", height: 50, marginTop:40}}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          {isHome ? (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image style={{ width: 30, height: 30, marginLeft: 10 }} source={IMAGE.ICON_MENU} resizeMode="contain"/>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.goBack()}>
              <Image style={{ width: 20, height: 20, marginLeft: 10 }} source={IMAGE.ICON_BACK} resizeMode="contain"/>
              <Text style={{ color: Color.white, fontWeight: "bold" }}>Back</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ flex: 1.5, justifyContent: "center" }}>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, color: Color.white,}}>{title}</Text>
        </View>
        <View style={{flex: 1, justifyContent: "center", alignItems: "flex-end",right: 20,}}></View>
      </View>
    );
  }
}
