import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import {CustomHeader} from '../index'
import { Card } from "react-native-elements";
import Color from '../constants/colors';
import Status from '../Status'

export class EffectCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary}}>
              <Status />
              <CustomHeader title='ผลกระทบ' navigation={this.props.navigation}/>
              <ScrollView>
        <Card>
            <Card.Title>ผลกระทบทางเศรษฐกิจและสังคม</Card.Title>
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
            <Text style={styles.headtext}>ผลกระทบทางเศรษฐกิจและสังคม</Text>
                  <Text style={styles.detail}>{'      '}การระบาดไปทั่วในวงกว้างของโรคโควิด19 และวิกฤตทางเศรษฐกิจที่เชื่อมโยงกับสถานการณ์นี้ ทําให้เกิดความท้าทายใหญ่หลวงในระดับโลกและ ระดับท้องถิ่น</Text>
                  <Text style={styles.detail}>{'      '}ผลกระทบทางสุขภาพ เศรษฐกิจและสังคมเกิดขึ้นกับกลุ่มคนทุกกลุ่ม แต่บ่อนทําลายกลุ่มประชากรเปราะบางมากที่สุด ซึ่งรวมถึง คนยากจน ผู้สูงอาย ุ ผู้พิการ เยาวชน และกลุ่มคนชาติพันธุ์</Text>
                  <Text style={styles.detail}>{'      '}วิกฤตทางโรคระบาดและเศรษฐกิจกระทบต่อกลุ่มประชากรเปราะบางอย่างไม่ เป็นธรรม ซึ่งอาจจุดชนวนให้เกิดความไม่เท่าเทียมกันและความยากจนมากขึ้น</Text>
                  <Text style={styles.detail}>{'      '}วิกฤตโลกในครั้งนี้ต้องการการประสานงาน ความเป็นอันหนึ่งอันเดียวกัน และ นโยบายทางเศรษฐกิจ สังคมและสาธารณสุขท ี่ มีประสิทธิภาพ</Text>
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