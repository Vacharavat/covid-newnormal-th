import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {CustomHeader} from '../index'
import Color from '../constants/colors';


export class HealCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
              <CustomHeader title='การรักษา' navigation={this.props.navigation}/>
              <View style={styles.container}>
                <View style={styles.box}>
                  <Text style={styles.headtext}>การรักษา</Text>
                  <Text style={styles.detail}>{'      '}ขณะนี้ ยังไม่มียาต้านไวรัสที่ ได้รับการขึ้นทะเบียนให้ใช้รักษาโรคโควิด19 แต่มีการมีทําวิจัยเพื่อพิจารณาว่ามียาตัวใดบ้างที่อาจปรับวัตถุประสงค์การใช้เดิมเพื่อการ รักษาโรคโควิด19</Text>
                  <Text style={styles.detail}>{'      '}องค์การอนามัยโลกกําลังประสานงานความร่วมมือในโครงการขนาดใหญ่ชื่อ Solidarity Trial ในหลายประเทศเพื่อประเมินยา/สูตรการรักษา 4 ชนิด ดังนี้</Text>
                  <Image source={require('../image/symptomps5.png')} style={{width: 200, height: 200,}} />
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
});