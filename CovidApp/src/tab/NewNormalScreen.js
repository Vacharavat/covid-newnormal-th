import React, { Component } from "react";
import {
  Linking,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { IMAGE } from "../constants/image";
import { CustomHeader } from "../index";
import Status from "../Status";
import Color from "../constants/colors";
export class NewNormalScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader
          title="New Normal"
          isHome={true}
          navigation={this.props.navigation}
        />
        <ScrollView >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: Color.secondary,
            }}
          >
            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate("NewNormalDetail")}
            >
              <ImageBackground
                source={IMAGE.IMAGE_HOME}
                style={styles.image}
              />
              <View
                style={styles.detail}
              >
                <Text style={styles.text}>การเตรียมตัวก่อนออกจากบ้าน</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate("NewNormalDetail2")}
            >
              <ImageBackground
                source={IMAGE.IMAGE_OFFICE}
                style={styles.image}
              />
              <View
                style={styles.detail}
              >
                <Text style={styles.text}>การใช้ชีวิตในที่ทำงาน</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate("NewNormalDetail3")}
            >
              <ImageBackground
                source={IMAGE.IMAGE_HOME2}
                style={styles.image}
              />
              <View
                style={styles.detail}
              >
                <Text style={styles.text}>การเตรียมตัวก่อนเข้าไปในบ้าน</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                Linking.openURL("https://www.sentangsedtee.com/today-news/article_143018");
              }}
            >
              <ImageBackground
                source={IMAGE.IMAGE_WEB}
                style={styles.image}
              />
              <View
                style={styles.detail}
              >
                <Text style={styles.text}>Reference</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: 200,
    width: "90%",
    position: "relative",
    borderRadius: 20,
    margin: 10,
    alignItems: "stretch",
    
  },
  image: {
    height: 200,
    width: "100%",
    position: "absolute",
    opacity:0.9
  },
  detail:{
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.gray,
    top: 160,
  },
  text:{
    color : Color.white,
    fontSize: 15,
    fontWeight:'600'
  }
});
