import React, { Component } from "react";
import { Text, View, SafeAreaView, Image, ScrollView, } from "react-native";
import { CustomHeader } from "../index";
import { IMAGE } from "../constants/image";
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"

export class CoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={DrawerStyles.safeview}>
        <Status />
        <CustomHeader title="Detail" navigation={this.props.navigation} />
          <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>COVID-19 คืออะไร</Text>
            </View>
            <View style={DrawerStyles.blockcovid}>
              <View style={DrawerStyles.image}>
              <Image style={DrawerStyles.imagedetail} source={IMAGE.IMAGE_ฺฺWHAT} resizeMode='contain'/>
              </View>
              <View style={DrawerStyles.detail}>
                <Text style={DrawerStyles.subdetail}>"โรคโควิด 19 คือ โรคติดต่อซึ่งเกิดจากไวรัสโคโรนาชนิดที่มีการค้นพบล่าสุด"</Text>
              </View>
            </View>

            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>ไวรัสและโรคอุบัติใหม่</Text>
            </View>
            <View style={DrawerStyles.blockcovid}>
              <View style={DrawerStyles.detail2}>
                <Text style={DrawerStyles.subdetail}>"ไวรัสและโรคอุบัติใหม่นี้ไม่เป็นที่รู้จักเลยก่อนที่จะมีการระบาดในเมืองอู่ฮั่น
              ประเทศจีนในเดือนธันวาปี 2019"</Text>
              </View>
              <View style={DrawerStyles.image2}>
              <Image style={DrawerStyles.imagedetail} source={IMAGE.IMAGE_ฺฺCOVID} resizeMode='contain'/>
              </View>
            </View>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>ปัจจุบัน</Text>
            </View>
            <View style={DrawerStyles.blockcovid}>
              <View style={DrawerStyles.image}>
              <Image style={DrawerStyles.imagedetail} source={IMAGE.IMAGE_CALENDAR} resizeMode='contain'/>
              </View>
              <View style={DrawerStyles.detail}>
                <Text style={DrawerStyles.subdetail}>"ขณะนี้โรคโควิด 19 มีการระบาดใหญ่ไปทั่วโลก
              ส่งผลกระทบแก่หลายประเทศทั่วโลก"</Text>
              </View>
            </View>
            </ScrollView>
          </View>
      </SafeAreaView>
    );
  }
}
