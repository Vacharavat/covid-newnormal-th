import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';
import { Card } from "react-native-elements";
import Status from '../Status'

export class TransCoviddetailScreen extends Component{
    render(){
        return (
          <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
            <Status />
          <CustomHeader
            title="การเเพร่เชื้อ"
            navigation={this.props.navigation}
          />
          <ScrollView>
        <Card>
            <Card.Title>การเเพร่เชื้อ</Card.Title>
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
            {'      '}โรคโควิด19 นี้โดยหลักแล้ว แพร่จากคนสู่คนผ่านทางฝอยละอองจากจมูกหรือปากซึ่งขับออกมาเมื่อผู้ป่วย ไอหรือจาม เรารับเชื้อได้จากการหายใจเอาฝอยละอองเข้าไปจากผู้ป่วย หรือจากการเอามือไปจับพื้นผิวที่มีฝอยละอองเหล่านั้นแล้วมาจับตามใบหน้า{"\n"}
                  {'      '}ระยะเวลานับจากการติดเชื้อและการแสดงอาการ (ระยะฟักตัว) มีตั้งแต่ 1-14 วัน และมีค่าเฉลี่ยอยู่ที่ 5-6 วัน เกิน 97% ของผู้ป่วยเริ่มมีอาการภายใน 14 วัน{"\n"}
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