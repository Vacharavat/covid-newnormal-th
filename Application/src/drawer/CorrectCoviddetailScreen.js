import React, { Component } from "react";
import {Text, View, SafeAreaView, Image, ScrollView,} from "react-native";
import { CustomHeader } from "../index";
import { IMAGE } from "../constants/image";
import { Card } from "react-native-elements";
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"

export class CorrectCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={DrawerStyles.safeview}>
        <Status />
        <CustomHeader title="Detail" navigation={this.props.navigation} />
        <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>การตรวจเชื้อ COVID-19</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_CORRECT} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox4}>
            <Text style={DrawerStyles.subdetailbox}>
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
              </View>
            </View>
            </ScrollView>
          </View>
      </SafeAreaView>
    );
  }
}
