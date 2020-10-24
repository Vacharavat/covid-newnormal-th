import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import { CustomHeader } from '../index'
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';


export class NewNormal2 extends Component{
    render(){
        return (
        <SafeAreaView style={{flex: 1 , backgroundColor:Color.primary}}>
        <CustomHeader title="" isHome={true} navigation={this.props.navigation}/>
        
        {/* Background Color */}
        <View style={{ flex: 1, backgroundColor: Color.secondary,}}>
        
        <ScrollView>
        {/* Top Page */}
          <View style={styles.topblock}>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, fontSize:28, top:0}}>การใช้ชีวิตในที่ทำงาน</Text>
          </View>

          <View></View>

          {/* Statistic block1 */}
          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>บันได และลิฟต์</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}> พยายามขึ้นบันไดแทนการใช้ลิฟต์ หรือหากต้องใช้ลิฟต์ให้สวมหน้ากากอนามัย เลี่ยงการสัมผัสกับผู้อื่น และให้ล้างมือทุกครั้งเมื่อออกจากลิฟต์</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>กินอาหาร</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>1.เหลื่อมเวลาพัก</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>2.ล้างมือก่อนกินและหลังกิน</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>3.นั่งห่างกัน 1 เมตร</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>4.ควรเป็นอาหารจานเดียว</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>5.กินอาหารปรุงสุก ร้อน</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>6.หากเป็นไปได้ควรมีภาชนะส่วนตัว</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>7.เลือกร้านสะอาด ปรุงอาหารตามสุขอนามัยที่ดี</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>ในห้องทำงาน</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>1.โต๊ะ เครื่องใช้ส่วนตัว ทำความสะอาดสม่ำเสมอ ก่อนและหลังใช้งานทุกวัน</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>2.อุปกรณ์ เครื่องใช้ หรือจุดที่มีการสัมผัสใช้ร่วม ให้ทำความสะอาดบ่อยๆ</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>3.หลังใช้อุปกรณ์ เครื่องมือ หรือจุดรวมให้ล้างมือทุกครั้ง</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>4.นั่งห่างกันอย่างน้อย 1 เมตร</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>5.เปิดระบายอากาศ หน้าต่าง ประตู อย่างน้อย 1 ซม.</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>6.หลีกเลี่ยงกิจกรรมที่มีคนอยู่ร่วมกัน เช่น ประชุม สัมมนา หากจำเป็นอยู่ร่วมกันไม่เกิน 50 คน ให้อยู่ห่าง 1 เมตร และควรสวมหน้ากากอนามัยทุกครั้ง</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>สุขา</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>ล้างมือก่อน และหลังใช้ส้วม และปิดฝาชักโครกก่อนกด</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>หลังเลิกงาน</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>1.ไม่ควรไปในที่ที่มีคนรวมตัวกันมากๆ และให้รีบกลับบ้านทันที หากจำเป็นต้องไปให้สวมหน้ากากอนามัย ล้างมือ และอยู่ให้ห่างผู้อื่นอย่างน้อย 1 เมตร</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>2.กลับบ้าน ล้างมือก่อนเข้าบ้าน หลังเข้าบ้านให้เปลี่ยนชุด ชำระร่างกาย ในบ้านหากสมาชิกมีอาการต้องสงสัย ให้ปฏิบัติตามแนวทาง Home Quarantine</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>3.สัตว์เลี้ยงไม่ควรปล่อยนอกบ้าน หลังจับสัตว์เลี้ยงให้ล้างมือ ไม่ควรหอมจูบกอด</Text>

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
    height: 340,
    marginLeft: '1%', 
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
});
