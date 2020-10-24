import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import { CustomHeader } from '../index'
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';


export class PreventionsDetails extends Component{
    render(){
        return (
        <SafeAreaView style={{flex: 1 , backgroundColor:Color.primary}}>
        <CustomHeader title="" isHome={true} navigation={this.props.navigation}/>
        
        {/* Background Color */}
        <View style={{ flex: 1, backgroundColor: Color.secondary,}}>
        
        <ScrollView>
        {/* Top Page */}
          <View style={styles.topblock}>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, fontSize:48, top:-15}}>Preventions</Text>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, fontSize:25, top:-15}}>การป้องกันที่ควรรู้</Text>
          </View>

          <View></View>

          {/* Statistic block1 */}
          <View style={styles.bigstatblock}>
            <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION2} resizeMode='contain'/>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>1.ใส่หน้ากากอนามัย</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>เวลาออกข้างนอกทุกครั้งควรพกเเละใส่หน้ากากอนามัยตลอดเวลา</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION3} resizeMode='contain'/>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:17}}>2.ใช้เจลเเอลกอฮอล์ล้างมือ</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>เวลาเข้าสถานที่ควรใช้เจลล้างมือทุกครั้งหรือพกเจลเเอลกอฮอล์ล้างมือไปทุกที่</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION4} resizeMode='contain'/>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>3.วัดอุณหภูมิร่างกาย</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>ก่อนเข้าใช้บริการสถานที่ต่างๆควรวัดอุณหภูมิก่อนทุกครั้ง</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION5} resizeMode='contain'/>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>4.รักษาด้วยตัวเอง</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>เวลากลับจากพื้นที่เสี่ยงหรือต่างประเทศควรกักตัวอย่างน้อย 14 วัน</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION6} resizeMode='contain'/>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>5.เเจ้งข้อมูล</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>ควรบอกความจริงกับเจ้าหน้าที่ทุกครั้งเวลาถูกถามข้อมูล</Text>
            </View>
          </View>

          <View style={styles.bigstatblock}>
            <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION7} resizeMode='contain'/>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>6.เว้นระยะห่าง</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}>เวลาอยู่ในฝูงชนมากๆควรเว้นระยะห่างกันอย่างน้อย 2 เมตร</Text>
            </View>
          </View>

          {/* <View style={styles.bigstatblock}>
            <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION1} resizeMode='contain'/>
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8,  fontSize:18}}>7.</Text>
              <Text style={{color:Color.gray, padding:8,  fontSize:16}}></Text>
            </View>
          </View> */}

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
    width: '60%',
    height: 120,
    marginLeft: '5%', 
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
 
  // Image
  imagedetail:{
    justifyContent:'center', 
    alignItems:'center',
    width:100,
    height:100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    marginLeft:0,
    marginTop: 20,
  },
  
});
