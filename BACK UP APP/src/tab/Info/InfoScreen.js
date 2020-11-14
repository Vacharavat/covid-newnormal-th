import React, { Component } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground, } from "react-native";
import { CustomHeader } from "../../index";
import Color from "../../constants/colors";
import Status from "../../Status";
import { IMAGE } from "../../constants/image";
import InfoStyle from "../../styles/tab/infostyle"
export class InfoScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="Information" isHome={true} navigation={this.props.navigation}/>
        <ScrollView>
          <View style={{flex: 1, alignItems: "center",}}>
            <TouchableOpacity style={InfoStyle.box} onPress={() => this.props.navigation.navigate("InfoDetail")}>
              <ImageBackground source={IMAGE.IMAGE_EMER} style={InfoStyle.image} />
              <View style={InfoStyle.detail}>
                <Text style={InfoStyle.text}>EMERGENCY CONTACTS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={InfoStyle.box} onPress={() => this.props.navigation.navigate("InfoDetail2")}>
              <ImageBackground source={IMAGE.IMAGE_AGEN} style={InfoStyle.image} />
              <View style={InfoStyle.detail}>
                <Text style={InfoStyle.text}>COVID AGENCY</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={InfoStyle.box} onPress={() => this.props.navigation.navigate("InfoDetail3")}>
              <ImageBackground source={IMAGE.IMAGE_THCHANA} style={InfoStyle.image}/>
              <View style={InfoStyle.detail}>
                <Text style={InfoStyle.text}>THAICHANA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

