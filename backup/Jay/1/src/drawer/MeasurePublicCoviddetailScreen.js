import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {CustomHeader} from '../index'
import Color from '../constants/colors';

export class MeasurePublicCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1,backgroundColor: Color.primary}}>
              <CustomHeader title='มาตรการทางสาธาณะสุข' navigation={this.props.navigation}/>
              <View style={styles.container}>
                <View style={styles.box}>
                  <Text style={styles.headtext}>มาตรการทางสาธาณะสุข</Text>
                  <Text style={styles.detail}>{'      '}การกักกัน คือ การจํากัดกิจกรรมต่างๆ หรือการแยกผู้ที่ ไม่ป่วย แต่ อาจมีประวัติสัมผัสใกล้ชิดกับผู้ป่วยโควิด19 จุดประสงค์คือเพื่อ ป้องกันการแพร่ระบาดของโรคในห้วงเวลาที่คนเริ่มมีอาการ</Text>
                  <Text style={styles.detail}>{'      '}การแยกกัก หมายถึง การแยกผู้ป่วยที่ มีอาการของโรคโควิด 19 และ อาจแพร่เชื้อได ้ จึงทําเพื่อป้องการป้องกันการแพร่ระบาดของโรค</Text>
                  <Text style={styles.detail}>{'      '}การเว้นระยะ คือ การอยู่ห่างกันและกัน องค์การอนามัยโลกแนะนําให้ เว้นระยะอย่างน้อย 1 เมตรจากผู้อื่น ส่วนนี้เป็นมาตรการทั่วไปที่ทุกคน ควรทําถึงแม้ว่าจะแข็งแรงดี</Text>
                  <Text style={styles.detail}>{'      '}การติดตามผู้สัมผัสโรค ทําเพื่อระบุหาคนที่ อาจมีประวัติสัมผัสโรค เพื่อที่จะแยกกักออกไปโดยเร็ว</Text>
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