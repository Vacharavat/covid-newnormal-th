import React, { Component } from 'react';
import { Linking, StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import { CustomHeader } from '../index'
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';
import { Card } from "react-native-elements";
import { Feather } from '@expo/vector-icons';
import Status from '../Status'
export class InfoScreenDetail extends Component{
    render(){
        return (
        <SafeAreaView style={{flex: 1 , backgroundColor:Color.primary}}>
          <Status />
        <CustomHeader title="Emergency Contacts"  navigation={this.props.navigation}/>
        
        <ScrollView>
          <Card>
            <Card.Title>กรมควบคุมโรค</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:1412');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}  /> 1412 </Text>
            <Text>
              {"        "}
              สอบถามเรื่องโควิด 19 หรือรับแจ้งเหตุผู้ที่มีอาการป่วยเข้าเกณฑ์สงสัย รวมไปถึงประสานงานโรงพยาบาล โทร. ฟรี ตลอด 24 ชั่วโมง (For foreigner call 0-9684-7820-9)
            </Text>
          </Card>

          <Card>
            <Card.Title>ศูนย์ปฏิบัติการฉุกเฉินโควิด 19</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:1667');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}/> 1667 </Text>
            <Text>
              {"        "}
              สายด่วนรวบรวมข้อมูลโรงพยาบาลสนาม และแหล่งติดต่อบริจาค ติดต่อเป็นอาสาสมัคร หรือขอรับการสนับสนุนก็ได้ โทร. ฟรี ตลอด 24 ชั่วโมง โดยมีเบอร์ติดต่อเพิ่มเติมคือ 0-2193-7024/0-2193-7059 และ 0-2193-7097 (ในเวลาราชการ)
            </Text>
          </Card>

          <Card>
            <Card.Title>ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:1111');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}/> 1111 </Text>
            <Text>
              {"        "}
              ร้องเรียน/ร้องทุกข์ เกี่ยวกับโควิด 19 หรือสอบถามรายละเอียดโครงการเราไม่ทิ้งกัน ฟรี ตลอด 24 ชั่วโมง
            </Text>
          </Card>

          <Card>
            <Card.Title>ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:1668');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}/> 1668 </Text>
            <Text>
              {"        "}
              สายด่วนเพื่อผู้ป่วยเรื้อรังที่ขาดยา และไม่สามารถเดินทางไปรับยาได้ โทร. ฟรี ตลอด 24 ชั่วโมง
            </Text>
          </Card>

          <Card>
            <Card.Title>ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:1669');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}/> 1669 </Text>
            <Text>
              {"        "}
              สำหรับแจ้งเหตุฉุกเฉินทั้งผู้ป่วยและผู้บาดเจ็บจากอุบัติเหตุ (สพฉ.) โทร. ฟรี ตลอด 24 ชั่วโมง
            </Text>
          </Card>

          <Card>
            <Card.Title>ศูนย์บริการแพทย์ฉุกเฉิน (ศูนย์เอราวัณ)</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:1646');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}/> 1646 </Text>
            <Text>
              {"        "}
              สำหรับแจ้งเหตุฉุกเฉินทั้งผู้ป่วยและผู้บาดเจ็บจากอุบัติเหตุ (สพฉ.) ในเขตพื้นที่กรุงเทพมหานคร โทร. ฟรี ตลอด 24 ชั่วโมง
            </Text>
          </Card>

          <Card>
            <Card.Title>สายด่วนสำนักอนามัย</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:02-245-4964');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}/> 02-245-4964 </Text>
            <Text>
              {"        "}
              สอบถามอาการป่วยโควิด 19 ก็ได้ หรือผู้ป่วยโรคพิษสุราเรื้อรัง ก็สามารถสอบถามรายละเอียดรักษาฟรีได้ที่เบอร์นี้ ตลอด 24 ชั่วโมง
            </Text>
          </Card>

          <Card>
            <Card.Title>กรมสนับสนุนบริการสุขภาพ</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:0-2193-7057');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}/> 02-193-7057 </Text>
            <Text>
              {"        "}
              รับแจ้งเรื่องร้องเรียนโรงพยาบาลเอกชนเรียกเก็บค่ารักษาพยาบาลโรคติดเชื้อไวรัสโคโรนา 2019
            </Text>
          </Card>

          <Card>
            <Card.Title>โรงพยาบาลรามาธิบดี</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:0-2092-7222');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}/> 02-092-7222 </Text>
            <Text>
              {"        "}
              สายด่วนคัดกรองผู้ป่วยโควิด 19 หากสงสัยว่าเราติดหรือยัง สามารถโทร. สอบถามอาการได้ทุกวัน เวลา 08.00-16.00 น. (เบอร์ติดต่อเพิ่มเติม 0-9177-4507-5 / 0-9177-4517-3 / 0-9177-4517-8)
            </Text>
          </Card>

          <Card>
            <Card.Title>โรงพยาบาลบำรุงราษฎร์</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:1378');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}/> 1378 </Text>
            <Text>
              {"        "}
              สายด่วนปรึกษาแพทย์ทั้งที่เกี่ยวกับ COVID-19 หรือจะเป็นผู้ป่วยอื่น ๆ ผู้ป่วยตามใบนัด บริการเจาะเลือดตามใบสั่งแพทย์ในเขตกรุงเทพฯ และปริมณฑล รวมถึงบริการส่งยาตรงถึงบ้าน สามารถโทร. ได้ทุกวัน 24 ชั่วโมง
            </Text>
          </Card>

          <Card>
            <Card.Title>กรมสุขภาพจิต</Card.Title>
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
              <Text onPress={()=>{Linking.openURL('tel:1323');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}><Feather name="phone-call" size={24}/> 1323 </Text>
            <Text>
              {"        "}
              ปรึกษาปัญหาสุขภาพจิตได้ทุกวัน ตลอด 24 ชั่วโมง
            </Text>
          </Card>
          </ScrollView>     
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  //{/* Background Color */}
  topblock: {
    flex: 0.35,
    backgroundColor: Color.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },
  //{/* Statistic block1 */}
  bigstatblock: {
    top: -30,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  //{/* Substatistic block1 */}
  statblock: {
    backgroundColor: 'white',
    width: '90%',
    height: 150,
    // marginLeft: '5%', 
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
 
 
  
});