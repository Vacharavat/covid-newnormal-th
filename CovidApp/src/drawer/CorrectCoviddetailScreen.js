import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CustomHeader } from "../index";
import Color from "../constants/colors";
import { IMAGE } from "../constants/image";
import { Card } from "react-native-elements";
import Status from '../Status'

export class CorrectCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="การตรวจ" navigation={this.props.navigation} />
        <ScrollView>
        <Card>
            <Card.Title>การตรวจ</Card.Title>
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
                source={IMAGE.IMAGE_EVENT}
                style={{ width: "90%", height: 200 }}
              />
            </View>
            <Text style={styles.detail}>
            {"      "}ไม่มีการตรวจโควิด19 ชนิดใดได้รับการขึ้นทะเบียน
                ยกเว้นภายใต้ข้อกําหนดการใช้ในสภาวะฉุกเฉินเท่านั้น
                ทุกประเภทกําลังอยู่ระหว่างการประเมิน{"\n"}
                {"      "}Nucleic Acid Amplification Test (NAATs)
                ใช้เพื่อตรวจวินิจฉัยการติดเชื้อ (ว่าตรวจพบไวรัสหรือไม่)
                ในระยะเฉียบพลันของโรค การตรวจเทคนิคนี้ ใช้เวลาระหว่าง 13 นาทีถึง
                3 ชั่วโมง และจําต้องมีอุปกรณ์เครื่องมือเฉพาะ{"\n"}
                {"\n"}
                {"      "}Nucleic Acid Amplification Test (NAATs)
                ใช้เพื่อตรวจวินิจฉัยการติด เชื้อ (ว่าตรวจพบไวรัสหรือไม่)
                ในระยะเฉียบพลันของโรค การตรวจเทคนิคนี้ ใช้เวลาระหว่าง 13 นาทีถึง
                3 ชั่วโมง และจําต้องมีอุปกรณ์เครื่องมือเฉพาะ{"\n"}
                {"\n"}
                {"      "}การตรวจหาแอนติเจน
                ใช้ตรวจหาแอนติเจนของไวรัสและอาจเป็นประโยชน์ใน
                การวินิจฉัยการติดเชื้อเฉียบพลัน
                การพัฒนาชุดตรวจทําอยู่ในหลายประเทศ
                {"\n"}
            </Text>
          </Card>

       </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flex: 1,
    backgroundColor: "rgb(242,242,247)",
    width: "90%",
    height: "90%",
    margin: 10,
    borderRadius: 10,
    top: 10,
    alignItems: "center",
  },

  boximage: {
    width: "100%",
    flex: 0.4,
    backgroundColor: "skyblue",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  boxdetail: {
    width: "100%",
    flex: 0.6,
    //justifyContent: 'center',
    backgroundColor: Color.lightgray,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headtext: {
    fontWeight: "bold",
    fontSize: 16,
    color: Color.darkpurple,
    margin: 10,
    textAlign: "center",
  },
  detail: {
    //textAlign: 'center',
    margin: 10,
    color: Color.gray,
    //fontWeight: 'bold',
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