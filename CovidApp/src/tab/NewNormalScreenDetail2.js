import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { CustomHeader } from "../index";
import Status from "../Status";
import Color from "../constants/colors";
import { IMAGE } from "../constants/image";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export class NewNormalScreenDetail2 extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f556b0" }}>
        <Status />
        <CustomHeader title="New Normal" navigation={this.props.navigation} />
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
          <View style={{ backgroundColor: "#f787c7", flex: 1, width: screenWidth, }}>
            <ScrollView>
            <View style={styles.topblock}>
              <Text style={styles.toptext}><MaterialCommunityIcons name="stairs" size={22}/> บันได และ ลิฟท์</Text>
            </View>
            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR8} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"แนะนำว่า พยายามขึ้นบันได แทนการใช้ลิฟท์"</Text>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"หากต้องใช้ลิฟท์ ควรใส่หน้ากาก เลี่ยงสัมผัสออกจากลิฟท์ล้างมือ"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR9} resizeMode='contain'/>
              </View>
            </View>

            <View style={styles.topblock}>
              <Text style={styles.toptext}><FontAwesome5 name="toilet" size={22} /> ห้องสุขา</Text>
            </View>
            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR10} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"ล้างมือ ก่อนและหลังใช้ส้วม"</Text>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"ปิดฝาชักโครกก่อนกด"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR11} resizeMode='contain'/>
              </View>
            </View>
            </ScrollView>
          </View>
          <View
            style={{
              backgroundColor: "#f787c7",
              flex: 1,
              width: screenWidth,
             
            }}
          >
            <ScrollView>
            <View style={styles.topblock}>
              <Text style={styles.toptext}><MaterialCommunityIcons name="food" size={22}/> กินอาหาร</Text>
            </View>
            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR12} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"เหลื่อมเวลาพัก"</Text>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"ล้างมือก่อนกินและหลังกินอาหาร"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR13} resizeMode='contain'/>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR14} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"นั่งห่างกัน 1 เมตร"</Text>
              </View>
            </View>
            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"ควรเป็นอาหารจานเดียว"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR15} resizeMode='contain'/>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR16} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"กินอาหารปรุงสุกร้อน"</Text>
              </View>
            </View>
            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"หากเป็นไปได้ ควรมีภาชนะส่วนตัวของตัวเอง"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR17} resizeMode='contain'/>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR18} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"เลือกร้านที่สะอาด ปรุงอาหารตามสุขอนามัยที่ดี"</Text>
              </View>
            </View>
            </ScrollView>
          </View>

          <View
            style={{
              backgroundColor: "#f787c7",
              flex: 1,
              width: screenWidth,
             
            }}
          >
            <ScrollView>
            <View style={styles.topblock}>
              <Text style={styles.toptext}><Fontisto name="room" size={22}/> ในห้องทำงาน</Text>
            </View>
            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR19} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
          <Text style={styles.subdetail}>โต๊ะ เครื่องใช้ส่วนตัว{"\n"}"ทำความสะอาดสม่ำเสมอ ก่อนและหลังใช้งานทุกวัน"</Text>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>อุปกรณ์ เครื่องใช้{"\n"}"หลังจุดที่มีการสัมผัสใช้ร่วม ทำความสะอาดบ่อยๆ"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR20} resizeMode='contain'/>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR21} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>หลังใช้อุปกรณ์ เครื่องมือ{"\n"}"ควรล้างมือทุกครั้ง"</Text>
              </View>
            </View>
            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>นั่งห่างกัน{"\n"}"รักษาระยะห่างอย่างน้อย 1 เมตร"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR22} resizeMode='contain'/>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR23} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>เปิดระบายอากาศ{"\n"}"หน้าต่าง ประตู อย่างน้อย 1 ซม."</Text>
              </View>
            </View>
            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>หลีกเลี่ยงกิจกรรมที่มีคนอยู่ร่วมกัน{"\n"}"เช่น ประชุม สัมมนา หากจำเป็นอยู่ร่วมกันไม่เกิน 50 คน ให้อยู่ห่าง 1 เมตร"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR24} resizeMode='contain'/>
              </View>
            </View>

            
            
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topblock:{
    height:60,
    backgroundColor:'#c60c75', 
    justifyContent:'center',
    alignItems:'center', 
    margin:10, 
    borderRadius:10,
    padding:10
  },
  toptext:{
    fontSize:18,
    fontWeight:'bold',
    color:Color.white,
    alignContent:'center',

  },
  block:{
    height:100,
    //backgroundColor:'red',
    margin:10,
    borderRadius:10,
    flexDirection:'row'
  },
  image:{
    flex:0.25,
    //backgroundColor:'#a6c3c9',
    justifyContent:'center',
    alignItems:'center',
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10
  },
  image2:{
    flex:0.25,
    //backgroundColor:'#a6c3c9',
    justifyContent:'center',
    alignItems:'center',
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
  },
  imagedetail:{
    width:'70%',
    height:'70%'
  },
  detail:{
    padding:10,
    flex:0.75,
    backgroundColor:'#fccae6',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
  detail2:{
    padding:10,
    flex:0.75,
    backgroundColor:'#fccae6',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
  subdetail:{
    fontSize:16,
    alignContent:'center',
    color:'#f339a3',
    fontWeight:'bold'
  }
});

