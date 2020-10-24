import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';

export class LookCoviddetailScreen extends Component{
    render(){
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
        <CustomHeader
          title="ลักษณะจําเพาะ"
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
              <Text style={styles.headtext}>ลักษณะจําเพาะของโรค</Text>

              <Text style={styles.detail}>
                {'      '}อัตราการแพร่เชื้อและความรุนแรง{"\n"}{"\n"}
                {'      '}Basic Reproductive Rate(R0){"\n"}
                {'      '}คือ ค่าเฉลี่ยที่ี่ผู้ป่วย 1 คนจะแพร่เชื้อให้ผู้อื่นในกลุ่มประชากรที่มีความไวต่อการรับเชื้อ ค่า R0 ของโรคโควิด19 อยู่ที่ประมาณ 2 และ 4{"\n"}{"\n"}
                {'      '}Clinical Onset Interval{"\n"}
                {'      '}คือ ช่วงเวลาแสดงอาการในผู้ป่วยรายต่อๆ กันในห่วงโช่ของการแพร่ระบาด ในงานวิจัยส่วนใหญ่ เวลาเฉลี่ยอยู่ที่ 4 และ 5 วัน{"\n"}{"\n"}
                {'      '}Case Fatality Ratio (CFR){"\n"}
                {'      '}คือ สัดส่วนของผู้ป่วยที่ถึงแก่ชีวิตอัตราคร่าวๆของทั่วโลกอยู่ที่ 7% (ธันวาคม 2019 - พฤษภาคม 2020){"\n"}{"\n"}
                
                
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