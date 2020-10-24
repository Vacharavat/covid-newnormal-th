// import React, { Component } from 'react';
// import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
// import {CustomHeader} from '../index'


// export class TransCoviddetailScreen extends Component{
//     render(){
//         return (
//             <SafeAreaView style={{ flex: 1}}>
//               <CustomHeader title='การแพร่เชื้อ' navigation={this.props.navigation}/>
//               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>การแพร่เชื้อ Screen</Text>
//               </View>
//             </SafeAreaView>
//           );
//     }
// }
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';

export class TransCoviddetailScreen extends Component{
    render(){
        return (
          <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
          <CustomHeader
            title="การเเพร่เชื้อ"
            navigation={this.props.navigation}
          />
          <View style={styles.container}>
            <View style={styles.box}>
              <View style={styles.boximage}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  source={IMAGE.IMAGE_EVENT}
                  //resizeMode="contain"
                />
              </View>
              <View style={styles.boxdetail}>
                <Text style={styles.headtext}>การเเพร่เชื้อ</Text>
  
                <Text style={styles.detail}>
                  {'      '}โรคโควิด19 นี้โดยหลักแล้ว แพร่จากคนสู่คนผ่านทางฝอยละอองจากจมูกหรือปากซึ่งขับออกมาเมื่อผู้ป่วย ไอหรือจาม เรารับเชื้อได้จากการหายใจเอาฝอยละอองเข้าไปจากผู้ป่วย หรือจากการเอามือไปจับพื้นผิวที่มีฝอยละอองเหล่านั้นแล้วมาจับตามใบหน้า{"\n"}
                  {'      '}ระยะเวลานับจากการติดเชื้อและการแสดงอาการ (ระยะฟกั ตัว) มีตั้งแต่ 1-14 วัน และมีค่าเฉลี่ยอยู่ที่ 5-6 วัน เกิน 97% ของผู้ป่วยเริ่มมีอาการภายใน 14 วัน{"\n"}
                  
                  
                </Text>
                
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      flex: 1,
      backgroundColor: 'rgb(242,242,247)',
      width: '90%',
      height: '90%',
      margin: 10,
      borderRadius: 10,
      top: 10,
      alignItems: 'center',
    },
  
    boximage: {
      width: '100%',
      flex: 0.4,
      backgroundColor: 'skyblue',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    boxdetail: {
      width: '100%',
      flex: 0.6,
      //justifyContent: 'center',
      backgroundColor: Color.lightgray,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    headtext: {
      fontWeight: 'bold',
      fontSize: 16,
      color: Color.darkpurple,
      margin: 10,
      textAlign: 'center',
    },
    detail: {
      //textAlign: 'center',
      margin: 10,
      color: Color.gray,
      //fontWeight: 'bold',
      fontSize: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
  
      elevation: 3,
    },
  });