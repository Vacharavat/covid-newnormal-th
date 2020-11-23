import React, { Component } from "react";
import { Linking, Text, View, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground,} from "react-native";
import { IMAGE } from "../../constants/image";
import { CustomHeader } from "../../index";
import Status from "../../Status";
import Color  from "../../constants/colors";
import NewNormalStyle from "../../styles/tab/newnormalstyle"

export class NewNormalScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="New Normal" isHome={true} navigation={this.props.navigation}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, alignItems: "center",}}>
            <TouchableOpacity style={NewNormalStyle.box} onPress={() => this.props.navigation.navigate("NewNormalDetail")}>
              <ImageBackground source={IMAGE.IMAGE_HOME} style={NewNormalStyle.image}/>
              <View style={NewNormalStyle.detail}>
                <Text style={NewNormalStyle.text}>การเตรียมตัวก่อนออกจากบ้าน</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={NewNormalStyle.box} onPress={() => this.props.navigation.navigate("NewNormalDetail2")}>
              <ImageBackground source={IMAGE.IMAGE_OFFICE} style={NewNormalStyle.image}/>
              <View style={NewNormalStyle.detail}>
                <Text style={NewNormalStyle.text}>การใช้ชีวิตในที่ทำงาน</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={NewNormalStyle.box} onPress={() => this.props.navigation.navigate("NewNormalDetail3")}>
              <ImageBackground source={IMAGE.IMAGE_HOME2} style={NewNormalStyle.image}/>
              <View style={NewNormalStyle.detail}>
                <Text style={NewNormalStyle.text}>การเตรียมตัวก่อนเข้าไปในบ้าน</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={NewNormalStyle.box} onPress={() => { Linking.openURL("https://www.sentangsedtee.com/today-news/article_143018");}}>
              <ImageBackground source={IMAGE.IMAGE_WEB} style={NewNormalStyle.image}/>
              <View style={NewNormalStyle.detail}>
                <Text style={NewNormalStyle.text}>Reference</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

