
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

export class GroupCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="กลุ่มเสี่ยง" navigation={this.props.navigation} />
        <ScrollView>
        <Card>
            <Card.Title style={{color:Color.skyblue}}>กลุ่มเสี่ยงต่ำ</Card.Title>
            <Card.Divider />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              
            </View>
            <Text style={styles.detail}>
            งานวิจัยระบุว่า
                    เด็กและคนหนุ่มสาวติดเชื้อและแพร่เชื้อได้อย่างไรก็ตามเด็กมักจะไม่มีอาการรุนแรง
            </Text>
          </Card>

          <Card>
            <Card.Title style={{color:Color.red}}>กลุ่มเสี่ยงสูง</Card.Title>
            <Card.Divider />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              
            </View>
            <Text style={styles.detail}>
            ความเสี่ยงต่ออาการรุนแรง ของโรคเพิ่มขึ้นตามอายุ และในผู้ที่
                    มีโรคประจําตัว เช่น ความดันโลหิตสูง โรคเบาหวาน โรคหลอด
                    เลือดหัวใจ โรคระบบทางเดินหายใจเรื้อรัง และโรคมะเร็ง
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
  bigstatblock: {
    top: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  //{/* Substatistic block1 */}
  statblock: {
    backgroundColor: "white",
    width: "43%",
    height: 100,
    margin: 7,
    borderRadius: 10,
  },
});