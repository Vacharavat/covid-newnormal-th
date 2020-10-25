import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { CustomHeader } from "../index";
import Color from "../constants/colors";
import { IMAGE } from "../constants/image";
import { Card } from "react-native-elements";
import Status from '../Status'

export class CoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="COVID-19" navigation={this.props.navigation} />
        <ScrollView>
        <Card>
            <Card.Title>COVID-19 คืออะไร</Card.Title>
            <Card.Divider />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={IMAGE.IMAGE_COVIDDETAIL}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <Text style={styles.detail}>
              โรคโควิด 19 คือ
              โรคติดต่อซึ่งเกิดจากไวรัสโคโรนาชนิดที่มีการค้นพบล่าสุด
            </Text>
          </Card>
          <Card>
            <Card.Title>ไวรัสและโรคอุบัติใหม่</Card.Title>
            <Card.Divider />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={IMAGE.IMAGE_COVIDDETAIL}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <Text style={styles.detail}>
            ไวรัสและโรคอุบัติใหม่นี้ไม่เป็นที่รู้จักเลยก่อนที่จะมีการระบาดในเมืองอู่ฮั่น
              ประเทศจีนในเดือนธันวาปี 2019
            </Text>
          </Card>
          <Card>
            <Card.Title>ปัจจุบัน</Card.Title>
            <Card.Divider />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={IMAGE.IMAGE_COVIDDETAIL}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <Text style={styles.detail}>
            ขณะนี้โรคโควิด 19 มีการระบาดใหญ่ไปทั่วโลก
              ส่งผลกระทบแก่หลายประเทศทั่วโลก
            </Text>
          </Card>


          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  detail: {
    textAlign: "center",
    margin: 10,
    color: Color.darkpurple,
    fontWeight: "bold",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
