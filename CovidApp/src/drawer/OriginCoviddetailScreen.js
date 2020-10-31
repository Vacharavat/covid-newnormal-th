import React, {Component} from 'react';
import { Text, View, SafeAreaView, Image, ScrollView, StyleSheet,} from 'react-native';
import {CustomHeader} from '../index';
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';
import { Card } from "react-native-elements";
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"

export class OriginCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={DrawerStyles.safeview}>
        <Status />
        <CustomHeader title="Detail" navigation={this.props.navigation}/>
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
          <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>1. ไวรัสจากสัตว์ตัวกลางระบาดมาสู่คน</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_ORIGIN1} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox}>
            <Text style={DrawerStyles.subdetailbox}>{"     "}"ไวรัสโคโรนาสายพันธุ์ใหม่มีความใกล้ชิดกับลักษณะทางพันธุกรรมของไวรัสซาร์สและไวรัสเมอร์สที่มาจากค้างคาวมากที่สุด 
                ก่อนที่จะพบว่า ลักษณะตัวรับของเชื้อไวรัสที่กลายพันธ์ุนี้จะมีความคล้ายคลึงกับเชื้อไวรัสโคโรนาที่พบในงู จึงมีความเป็นไปได้ที่งู โดยเฉพาะงูเห่าจีน อาจเป็นสัตว์ตัวกลางที่ส่งต่อเชื้อไวรัสโคโรนาที่เกิดการกลายพันธ์ุจากค้างคาวเข้าสู่ร่างกายมนุษย์"</Text>
              </View>
            </View>
            </ScrollView>
          </View>

          <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>2. ผู้ป่วยรายแรกเท่าที่ทราบกัน</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_ORIGIN2} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox}>
            <Text style={DrawerStyles.subdetailbox}>{"     "}"ผู้ป่วยรายแรกเท่าที่ทราบกัน เริ่มมีอาการตั้งแต่{'\n'}วันที่ 1 ธันวาคม และไม่มีความเชื่อมโยงกับตลาดต้องสงสัย
                ในเมืองอู่ฮั่น ประเทศจีน {"\n"}{"     "}แต่ผู้ป่วยหลายรายอาจมีมาตั้งแต่ช่วงกลางเดือนพฤศจิกายนหรือก่อนหน้านั้น"</Text>
              </View>
            </View>
            </ScrollView>
          </View>

          <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>3. การระบาด</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_ORIGIN3} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox}>
            <Text style={DrawerStyles.subdetailbox}>{"     "}"ผู้ป่วยรายแรกเท่าที่ทราบกันขณะนี้โรคโควิด 19 มีการระบาดใหญ่ไปทั่วโลก
                ส่งผลกระทบแก่หลายประเทศทั่วโรค"</Text>
              </View>
            </View>
            </ScrollView>
          </View>

          <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>4. ต้นกำเนิด</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_ORIGIN4} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox}>
            <Text style={DrawerStyles.subdetailbox}>{"     "}"ตลอดอาจเป็นต้นกำเนิดของไวรัส หรืออาจมีบทบาทในการขนานวงของการระบาดในระยะเริ่มแรก"</Text>
              </View>
            </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
