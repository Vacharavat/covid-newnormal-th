import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import { CustomHeader } from '../index'
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';


export class NewNormal1 extends Component{
    render(){
        return (
        <SafeAreaView style={{flex: 1 , backgroundColor:Color.primary}}>
        <CustomHeader title="" isHome={true} navigation={this.props.navigation}/>
        
        {/* Background Color */}
        <View style={{ flex: 1, backgroundColor: Color.secondary,}}>
        
        <ScrollView>
        {/* Top Page */}
          <View style={styles.topblock}>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, fontSize:28, top:0}}>การเตรียมตัวก่อนออกจากบ้าน</Text>
          </View>

          <View></View>

          {/* Statistic block1 */}
          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>การเตรียมความพร้อม</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>1.ออกจากบ้านเมื่อมีความจำเป็น</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>2.สังเกตอาการตัวเอง หากมีไข้ ปวดศีรษะ ปวดเมื่อย ครั่นเนื้อครั่นตัว มีน้ำมูก ไม่ควรออกจากบ้าน</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>3.เตรียมหน้ากากอนามัย 2 อัน และแอลกอฮอล์เจลล้างมือ</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>4.ใส่หน้ากากอนามัย หรือหน้ากากผ้าครอบปาก และจมูก กระชับใบหน้า ตลอดการเดินทางหรืออยู่ในที่คนแออัด</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>การเดินทาง</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>1.เมื่อขึ้นยานพาหนะไม่ควรเอามือสัมผัสใบหน้า</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>2.ให้อยู่ห่างผู้โดยสารคนอื่น 1-2 เมตร</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>3.หลังลงจากยานพาหนะ ให้ใช้แอลกอฮอล์เจลล้างมือ</Text>
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
    height: 260,
    marginLeft: '1%', 
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
});
