import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image,ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import {IMAGE} from '../constants/image';
import { Card } from "react-native-elements";
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"

export class LookCoviddetailScreen extends Component{
    render(){
      return (
        <SafeAreaView style={DrawerStyles.safeview}>
          <Status />
        <CustomHeader title="Detail" navigation={this.props.navigation}/>

          <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>อัตราการแพร่เชื้อและความรุนแรง</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_LOOK} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox3}>
            <Text style={DrawerStyles.subdetailbox}>
                Basic Reproductive Rate(R0){"\n"}
                {'      '}คือ ค่าเฉลี่ยที่ผู้ป่วย 1 คนจะแพร่เชื้อให้ผู้อื่นในกลุ่มประชากรที่มีความไวต่อการรับเชื้อ ค่า R0 ของโรค{"\n"}โควิด19 อยู่ที่ประมาณ 2 และ 4{"\n"}{"\n"}
                Clinical Onset Interval{"\n"}
                {'      '}คือ ช่วงเวลาแสดงอาการในผู้ป่วยรายต่อๆ กันในห่วงโช่ของการแพร่ระบาด ในงานวิจัยส่วนใหญ่ เวลาเฉลี่ยอยู่ที่ 4 และ 5 วัน{"\n"}{"\n"}
                Case Fatality Ratio (CFR){"\n"}
                {'      '}คือ สัดส่วนของผู้ป่วยที่ถึงแก่ชีวิตอัตราคร่าวๆของทั่วโลกอยู่ที่ 7% (ธันวาคม 2019 - พฤษภาคม 2020){"\n"}{"\n"}
              </Text>
              </View>
            </View>
            </ScrollView>
          </View>
    
      </SafeAreaView>
    );
  }
}

