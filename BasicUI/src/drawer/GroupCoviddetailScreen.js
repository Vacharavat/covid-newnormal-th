// import React, { Component } from 'react';
// import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
// import {CustomHeader} from '../index'


// export class GroupCoviddetailScreen extends Component{
//     render(){
//         return (
//             <SafeAreaView style={{ flex: 1}}>
//               <CustomHeader title='มาตรการระดับบุคคล' navigation={this.props.navigation}/>
//               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text> กลุ่มเสี่ยง Screen</Text>
//               </View>
//             </SafeAreaView>
//           );
//     }
// }
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

export class GroupCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <CustomHeader title="กลุ่มเสี่ยง" navigation={this.props.navigation} />
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.boximage}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
                source={IMAGE.IMAGE_EVENT}
                //resizeMode="contain"
              />
            </View>
            <View style={styles.boxdetail}>
              <Text style={styles.headtext}>กลุ่มเสี่ยง</Text>

              {/* Statistic block2 */}
              <View style={styles.bigstatblock}>
                {/* Hopitalized Block */}
                <View style={styles.statblock}>
                  <Text
                    style={{
                      color: Color.skyblue,
                      fontWeight: "bold",
                      padding: 8,
                    }}
                  >
                    เสี่ยงต่ำ
                  </Text>
                  <Text style={styles.txtstats}>
                    งานวิจัยระบุว่า
                    เด็กและคนหนุ่มสาวติดเชื้อและแพร่เชื้อได้อย่างไรก็ตามเด็กมักจะไม่มีอาการรุนแรง
                  </Text>
                </View>

                {/* Deaths Block */}
                <View style={styles.statblock}>
                  <Text
                    style={{ color: Color.red, fontWeight: "bold", padding: 8 }}
                  >
                    เสี่ยงสูง
                  </Text>
                  <Text style={styles.txtstats}>
                    ความเสี่ยงต่ออาการรุนแรง ของโรคเพิ่มขึ้นตามอายุ และในผู้ที่
                    มีโรคประจําตัว เช่น ความดันโลหิตสูง โรคเบาหวาน โรคหลอด
                    เลือดหัวใจ โรคระบบทางเดินหายใจเรื้อรัง และโรคมะเร็ง
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
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