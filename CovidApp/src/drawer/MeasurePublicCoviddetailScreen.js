import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, ScrollView} from 'react-native';
import {CustomHeader} from '../index'
import Color from '../constants/colors';
import { Card } from "react-native-elements";
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"
import { IMAGE } from "../constants/image";


export class MeasurePublicCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={DrawerStyles.safeview}>
              <Status />
              <CustomHeader title='Detail' navigation={this.props.navigation}/>
              <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>มาตรการทางสาธาณะสุข</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_PHYSICAL2} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox4}>
            <Text style={DrawerStyles.subdetailbox}>
        {"    "}การกักกัน คือ การจํากัดกิจกรรมต่างๆ หรือการแยกผู้ที่ ไม่ป่วย แต่ อาจมีประวัติสัมผัสใกล้ชิดกับผู้ป่วยโควิด19 จุดประสงค์คือเพื่อ ป้องกันการแพร่ระบาดของโรคในห้วงเวลาที่คนเริ่มมีอาการ{'\n'}{'\n'}
        {"    "}การแยกกัก หมายถึง การแยกผู้ป่วยที่ มีอาการของโรคโควิด 19 และ อาจแพร่เชื้อได้ จึงทําเพื่อป้องการป้องกันการแพร่ระบาดของโรค{'\n'}{'\n'}
        {"    "}การเว้นระยะ คือ การอยู่ห่างกันและกัน องค์การอนามัยโลกแนะนําให้ เว้นระยะอย่างน้อย 1 เมตรจากผู้อื่น ส่วนนี้เป็นมาตรการทั่วไปที่ทุกคน ควรทําถึงแม้ว่าจะแข็งแรงดี{'\n'}{'\n'}
        {"    "}การติดตามผู้สัมผัสโรค ทําเพื่อระบุหาคนที่ อาจมีประวัติสัมผัสโรค เพื่อที่จะแยกกักออกไปโดยเร็ว{'\n'}{'\n'}
            </Text>
              </View>
            </View>
            </ScrollView>
          </View>
            </SafeAreaView>
          );
    }
}
