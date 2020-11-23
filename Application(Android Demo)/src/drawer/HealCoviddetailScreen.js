import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import { Card } from "react-native-elements";
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"
import { IMAGE } from "../constants/image";

export class HealCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={DrawerStyles.safeview}>
              <Status />
              <CustomHeader title='Detail' navigation={this.props.navigation}/>
              <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>การรักษาโรค COVID-19</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_HEAL} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox2}>
            <Text style={DrawerStyles.subdetailbox}>
            {'      '}ขณะนี้ ยังไม่มียาต้านไวรัสที่ ได้รับการขึ้นทะเบียนให้ใช้รักษาโรคโควิด19 แต่มีการมีทําวิจัยเพื่อพิจารณาว่ามียาตัวใดบ้างที่อาจปรับวัตถุประสงค์การใช้เดิมเพื่อการ รักษาโรคโควิด19{'\n'}{'\n'}{'     '}องค์การอนามัยโลกกําลังประสานงานความร่วมมือในโครงการขนาดใหญ่ชื่อ Solidarity Trial ในหลายประเทศเพื่อประเมินยา/สูตรการรักษา
              </Text>
              </View>
            </View>
            </ScrollView>
          </View>
            </SafeAreaView>
          );
    }
}

