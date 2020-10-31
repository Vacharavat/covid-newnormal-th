import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, ScrollView} from 'react-native';
import {CustomHeader} from '../index'
import { Card } from "react-native-elements";
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"
import { IMAGE } from "../constants/image";
export class EffectCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={DrawerStyles.safeview}>
              <Status />
              <CustomHeader title='Detail' navigation={this.props.navigation}/>
              <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>ผลกระทบทางเศรษฐกิจและสังคม</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_EFFECT} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox4}>
            <Text style={DrawerStyles.subdetailbox}>
        {"    "}การระบาดไปทั่วในวงกว้างของโรคโควิด19 และวิกฤตทางเศรษฐกิจที่เชื่อมโยงกับสถานการณ์นี้ ทําให้เกิดความท้าทายใหญ่หลวงในระดับโลกและ ระดับท้องถิ่น{'\n'}{'\n'}
        {"    "}ผลกระทบทางสุขภาพ เศรษฐกิจและสังคมเกิดขึ้นกับกลุ่มคนทุกกลุ่ม แต่บ่อนทําลายกลุ่มประชากรเปราะบางมากที่สุด ซึ่งรวมถึง คนยากจน ผู้สูงอายุ ผู้พิการ เยาวชน และกลุ่มคนชาติพันธุ์{'\n'}{'\n'}
        {"    "}วิกฤตทางโรคระบาดและเศรษฐกิจกระทบต่อกลุ่มประชากรเปราะบางอย่างไม่ เป็นธรรม ซึ่งอาจจุดชนวนให้เกิดความไม่เท่าเทียมกันและความยากจนมากขึ้น{'\n'}{'\n'}
        {"    "}วิกฤตโลกในครั้งนี้ต้องการการประสานงาน ความเป็นอันหนึ่งอันเดียวกัน และ นโยบายทางเศรษฐกิจ สังคมและสาธารณสุขที่มีประสิทธิภาพ{'\n'}{'\n'}
            </Text>
              </View>
            </View>
            </ScrollView>
          </View>
            </SafeAreaView>
          );
    }
}

