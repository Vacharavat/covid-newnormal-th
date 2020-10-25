import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { CustomHeader } from "../index";
import Color from "../constants/colors";
import { IMAGE } from "../constants/image";
import { Card } from "react-native-elements";
import Status from '../Status'

export class PreventionsScreenDetail extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="Preventions" navigation={this.props.navigation} />
        
        <ScrollView>
          
          <Card>
            <Card.Title>Mask</Card.Title>
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
                source={IMAGE.IMAGE_PREVENTION2}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <Text
              style={{ textAlign: "center", margin: 10, fontWeight: "bold" }}
            >
              ใส่หน้ากากอนามัย
            </Text>
            <Text>
              {"        "}
              เวลาออกข้างนอกทุกครั้งควรพกเเละใส่หน้ากากอนามัยตลอดเวลา
            </Text>
          </Card>

          <Card>
            <Card.Title>Alcohol Gel</Card.Title>
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
                source={IMAGE.IMAGE_PREVENTION3}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <Text
              style={{ textAlign: "center", margin: 10, fontWeight: "bold" }}
            >
              ใช้เจลเเอลกอฮอล์ล้างมือ
            </Text>
            <Text>
              {"        "}
              เวลาเข้าสถานที่ควรใช้เจลล้างมือทุกครั้งหรือพกเจลเเอลกอฮอล์ล้างมือไปทุกที่
            </Text>
          </Card>
          <Card>
            <Card.Title>Social Distance</Card.Title>
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
                source={IMAGE.IMAGE_PREVENTION7}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <Text
              style={{ textAlign: "center", margin: 10, fontWeight: "bold" }}
            >
              รักษาระยะห่าง
            </Text>
            <Text>
              {"        "}
              เวลาอยู่ในฝูงชนมากๆควรเว้นระยะห่างกันอย่างน้อย 2 เมตร
            </Text>
          </Card>

          <Card>
            <Card.Title>Scanning</Card.Title>
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
                source={IMAGE.IMAGE_PREVENTION4}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <Text
              style={{ textAlign: "center", margin: 10, fontWeight: "bold" }}
            >
              วัดอุณหภูมิร่างกาย
            </Text>
            <Text style={{ textAlign: "center"}}>
              ก่อนเข้าใช้บริการสถานที่ต่างๆควรวัดอุณหภูมิก่อนทุกครั้ง
            </Text>
          </Card>

          <Card>
            <Card.Title>Isolation</Card.Title>
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
                source={IMAGE.IMAGE_PREVENTION5}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <Text
              style={{ textAlign: "center", margin: 10, fontWeight: "bold" }}
            >
              รักษาด้วยตัวเอง
            </Text>
            <Text style={{ textAlign: "center"}}>
            เวลากลับจากพื้นที่เสี่ยงหรือต่างประเทศควรกักตัวอย่างน้อย 14 วัน
            </Text>
          </Card>

          <Card>
            <Card.Title>Details</Card.Title>
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
                source={IMAGE.IMAGE_PREVENTION6}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <Text
              style={{ textAlign: "center", margin: 10, fontWeight: "bold" }}
            >
              เเจ้งข้อมูล
            </Text>
            <Text style={{ textAlign: "center"}}>
            ควรบอกความจริงกับเจ้าหน้าที่ทุกครั้งเวลาถูกถามข้อมูล
            </Text>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}