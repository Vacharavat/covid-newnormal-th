import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, ScrollView} from 'react-native';
import {CustomHeader} from '../index'
import { Card } from "react-native-elements";
import Color from '../constants/colors';
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"
import { IMAGE } from "../constants/image";

export class MeasureCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={DrawerStyles.safeview}>
              <Status />
              <CustomHeader title='Detail' navigation={this.props.navigation}/>
              <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>มาตรการระดับบุคคล</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_PHYSICAL} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox2}>
            <Text style={DrawerStyles.subdetailbox}>
            {'      '}การรักษาสุขอนามัยของมือและมารยาทในการไอ/จามเป็นสิ่งสําคัญที่ควรทําตลอดเวลาและเป็นวิธีที่ดีที่สุดที่จะป้องกันตัวเองและผู้อื่น{'\n'}{'\n'}{'     '}เมื่อเป็นไปได้ รักษาระยะอย่างน้อย 1 เมตร จากผู้อื่น เนื่องจากผู้ติดเชื้อบางรายอาจ ยังไม่แสดงอาการหรือมีอาการไม่รุนแรง ดังนั้นการเว้นระยะห่างจากทุกคนสําคัญ มากหากคุณอยู่ในพื้นที่ ที่มีการระบาดของ โรคโควิด19
              </Text>
              </View>
            </View>
            </ScrollView>
          </View>
            </SafeAreaView>
          );
    }
}