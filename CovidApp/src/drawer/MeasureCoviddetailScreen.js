import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {CustomHeader} from '../index'
import { Card } from "react-native-elements";
import Color from '../constants/colors';
import Status from '../Status'

export class MeasureCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary}}>
              <Status />
              <CustomHeader title='มาตรการระดับบุคคล' navigation={this.props.navigation}/>
              
              <ScrollView>
        <Card>
            <Card.Title>มาตรการระดับบุคคล</Card.Title>
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
            <Text style={styles.detail}>{'      '}การรักษาสุขอนามัยของมือและมารยาทในการไอ/จามเป็นสิ่งสําคัญที่ควรทําตลอดเวลาและเป็นวิธีที่ดีที่สุดที่จะป้องกันตัวเองและผู้อื่น</Text>
                  <Text style={styles.detail}>{'      '}เมื่อเป็นไปได้ รักษาระยะอย่างน้อย 1 เมตร จากผู้อื่น เนื่องจากผู้ติดเชื้อบางรายอาจ ยังไม่แสดงอาการหรือมีอาการไม่รุนแรง ดังนั้นการเว้นระยะห่างจากทุกคนสําคัญ มากหากคุณอยู่ในพื้นที่ ที่มีการระบาดของ โรคโควิด19</Text>
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