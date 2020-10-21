import React, { Component } from 'react';
import { Linking, StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import { CustomHeader } from '../index'
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';


export class InfoScreenDetail extends Component{
    render(){
        return (
        <SafeAreaView style={{flex: 1 , backgroundColor:Color.primary}}>
        <CustomHeader title="" isHome={true} navigation={this.props.navigation}/>
        
        {/* Background Color */}
        <View style={{ flex: 1, backgroundColor: Color.secondary,}}>
        
        <ScrollView>
        {/* Top Page */}
          <View style={styles.topblock}>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, fontSize:48, top:-15}}>Information</Text>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, fontSize:25, top:-15}}>เบอร์โทรติดต่อฉุกเฉิน</Text>
          </View>

          <View></View>

          {/* Statistic block1 */}
          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:1412');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>1412 <Text style={{color:Color.gray, padding:1,  fontSize:20}}>กรมควบคุมโรค</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}> สอบถามเรื่องโควิด 19 หรือรับแจ้งเหตุผู้ที่มีอาการป่วยเข้าเกณฑ์สงสัย รวมไปถึงประสานงานโรงพยาบาล โทร. ฟรี ตลอด 24 ชั่วโมง (For foreigner call 0-9684-7820-9)</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:1667');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>1667 <Text style={{color:Color.gray, padding:1,  fontSize:20}}>ศูนย์ปฏิบัติการฉุกเฉินโควิด 19</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}> สายด่วนรวบรวมข้อมูลโรงพยาบาลสนาม และแหล่งติดต่อบริจาค ติดต่อเป็นอาสาสมัคร หรือขอรับการสนับสนุนก็ได้ โทร. ฟรี ตลอด 24 ชั่วโมง โดยมีเบอร์ติดต่อเพิ่มเติมคือ 0-2193-7024/0-2193-7059 และ 0-2193-7097 (ในเวลาราชการ)</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:1111');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>1111  <Text style={{color:Color.gray, padding:1,  fontSize:20}}>ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}> ร้องเรียน/ร้องทุกข์ เกี่ยวกับโควิด 19 หรือสอบถามรายละเอียดโครงการเราไม่ทิ้งกัน ฟรี ตลอด 24 ชั่วโมง</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:1668');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>1668  <Text style={{color:Color.gray, padding:1,  fontSize:20}}>ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}> สายด่วนเพื่อผู้ป่วยเรื้อรังที่ขาดยา และไม่สามารถเดินทางไปรับยาได้ โทร. ฟรี ตลอด 24 ชั่วโมง</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:1669');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>1669   <Text style={{color:Color.gray, padding:1,  fontSize:20}}>ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>สำหรับแจ้งเหตุฉุกเฉินทั้งผู้ป่วยและผู้บาดเจ็บจากอุบัติเหตุ (สพฉ.) โทร. ฟรี ตลอด 24 ชั่วโมง</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:1646');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>1646 <Text style={{color:Color.gray, padding:1,  fontSize:20}}>ศูนย์บริการแพทย์ฉุกเฉิน (ศูนย์เอราวัณ)</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}> สำหรับแจ้งเหตุฉุกเฉินทั้งผู้ป่วยและผู้บาดเจ็บจากอุบัติเหตุ (สพฉ.) ในเขตพื้นที่กรุงเทพมหานคร โทร. ฟรี ตลอด 24 ชั่วโมง</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:0-2245-4964');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>0-2245-4964 <Text style={{color:Color.gray, padding:1,  fontSize:20}}>สายด่วนสำนักอนามัย</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>สอบถามอาการป่วยโควิด 19 ก็ได้ หรือผู้ป่วยโรคพิษสุราเรื้อรัง ก็สามารถสอบถามรายละเอียดรักษาฟรีได้ที่เบอร์นี้ ตลอด 24 ชั่วโมง</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:0-2193-7057');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>0-2193-7057 <Text style={{color:Color.gray, padding:1,  fontSize:20}}>กรมสนับสนุนบริการสุขภาพ</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>รับแจ้งเรื่องร้องเรียนโรงพยาบาลเอกชนเรียกเก็บค่ารักษาพยาบาลโรคติดเชื้อไวรัสโคโรนา 2019</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:0-2092-7222');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>0-2092-7222 <Text style={{color:Color.gray, padding:1,  fontSize:20}}>โรงพยาบาลรามาธิบดี</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}> สายด่วนคัดกรองผู้ป่วยโควิด 19 หากสงสัยว่าเราติดหรือยัง สามารถโทร. สอบถามอาการได้ทุกวัน เวลา 08.00-16.00 น. (เบอร์ติดต่อเพิ่มเติม 0-9177-4507-5 / 0-9177-4517-3 / 0-9177-4517-8)</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:1378 ');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>1378 <Text style={{color:Color.gray, padding:1,  fontSize:20}}>โรงพยาบาลบำรุงราษฎร์</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}> สายด่วนปรึกษาแพทย์ทั้งที่เกี่ยวกับ COVID-19 หรือจะเป็นผู้ป่วยอื่น ๆ ผู้ป่วยตามใบนัด บริการเจาะเลือดตามใบสั่งแพทย์ในเขตกรุงเทพฯ และปริมณฑล รวมถึงบริการส่งยาตรงถึงบ้าน สามารถโทร. ได้ทุกวัน 24 ชั่วโมง</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text onPress={()=>{Linking.openURL('tel:1323  ');}} style={{color:Color.green, fontWeight:'bold', padding:1,  fontSize:32}}>1323  <Text style={{color:Color.gray, padding:1,  fontSize:20}}>กรมสุขภาพจิต</Text></Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>   ปรึกษาปัญหาสุขภาพจิตได้ทุกวัน ตลอด 24 ชั่วโมง</Text>
            </View>
          </View>

        
          </ScrollView>
            


          
        </View>
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
