import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {CustomHeader} from '../index'
import Color from '../constants/colors';

export class MeasureCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary}}>
              <CustomHeader title='มาตรการระดับบุคคล' navigation={this.props.navigation}/>
              <View style={styles.container}>
                <View style={styles.box}>
                  <Text style={styles.headtext}>มาตรการระดับบุคคล</Text>
                  <Text style={styles.detail}>{'      '}การรักษาสุขอนามัยของมือและมารยาทในการไอ/จามเป็นสิ่งสําคัญที่ควรทําตลอดเวลาและเป็นวิธีที่ดีที่สุดที่จะป้องกันตัวเองและผู้อื่น</Text>
                  <Text style={styles.detail}>{'      '}เมื่อเป็นไปได ้ รักษาระยะอย่างน้อย 1 เมตร จากผู้อื่น เนื่องจากผู้ติดเชื้อบางรายอาจ ยังไม่แสดงอาการหรือมีอาการไม่รุนแรง ดังนั้นการเว้นระยะห่างจากทุกคนสําคัญ มากหากคุณอยู่ในพื้นท ี่ ที่มีการระบาดของ โรคโควิด19</Text>
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
  headtext: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Color.darkpurple,
    margin: 10,
    textAlign: 'center',
  },
  box: {
    flex: 0.9,
    backgroundColor: 'rgb(242,242,247)',
    width: '80%',
    height: '90%',
    margin: 10,
    borderRadius: 10,
    top: 5,
    alignItems: 'center',
  },
  detail: {
    margin: 10,
    color: Color.gray,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  }
})