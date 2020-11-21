import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import {IMAGE} from '../constants/image';
import { Card } from "react-native-elements";
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"

export class TransCoviddetailScreen extends Component{
    render(){
        return (
          <SafeAreaView style={DrawerStyles.safeview}>
            <Status />
          <CustomHeader
            title="Detail"
            navigation={this.props.navigation}
          />
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
          <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>การเเพร่เชื้อของ COVID-19</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_TRANS} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox2}>
            <Text style={DrawerStyles.subdetailbox}>
            {'      '}โรคโควิด19 นี้โดยหลักแล้ว แพร่จากคนสู่คนผ่านทางฝอยละอองจากจมูกหรือปากซึ่งขับออกมาเมื่อผู้ป่วย ไอหรือจาม เรารับเชื้อได้จากการหายใจเอาฝอยละอองเข้าไปจากผู้ป่วย หรือจากการเอามือไปจับพื้นผิวที่มีฝอยละอองเหล่านั้นแล้วมาจับตามใบหน้า{"\n"}
                  {'      '}ระยะเวลานับจากการติดเชื้อและการแสดงอาการ (ระยะฟักตัว) มีตั้งแต่ 1-14 วัน และมีค่าเฉลี่ยอยู่ที่ 5-6 วัน เกิน 97% ของผู้ป่วยเริ่มมีอาการภายใน 14 วัน{"\n"}
              </Text>
              </View>
            </View>
            </ScrollView>
          </View>
        </ScrollView>
        </SafeAreaView>
      );
    }
  }