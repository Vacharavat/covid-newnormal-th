import React, { Component } from "react";
import {Text, View, SafeAreaView, Image, ScrollView,} from "react-native";
import { CustomHeader } from "../index";
import { IMAGE } from "../constants/image";
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"

export class GroupCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={DrawerStyles.safeview}>
        <Status />
        <CustomHeader title="Detail" navigation={this.props.navigation} />
        <View style={DrawerStyles.container}>
        <ScrollView>
        <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>กลุ่มเสี่ยงต่ำ</Text>
            </View>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.image}>
              <Image style={DrawerStyles.imagedetail} source={IMAGE.IMAGE_LOW} resizeMode='contain'/>
              </View>
              <View style={DrawerStyles.detail}>
                <Text style={DrawerStyles.subdetail}>"งานวิจัยระบุว่า
                    เด็กและคนหนุ่มสาวติดเชื้อและแพร่เชื้อได้อย่างไรก็ตามเด็กมักจะไม่มีอาการรุนแรง"</Text>
              </View>
            </View>

            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>กลุ่มเสี่ยงสูง</Text>
            </View>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detail2}>
                <Text style={DrawerStyles.subdetail}>"ความเสี่ยงต่ออาการรุนแรง ของโรคเพิ่มขึ้นตามอายุ และในผู้ที่
                  มีโรคประจําตัว"</Text>
              </View>
              <View style={DrawerStyles.image2}>
              <Image style={DrawerStyles.imagedetail} source={IMAGE.IMAGE_HIGH} resizeMode='contain'/>
              </View>
            </View>
          </ScrollView>
          </View>
      </SafeAreaView>
    );
  }
}