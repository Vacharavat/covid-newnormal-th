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
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export class NewNormalScreenDetail3 extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#bd4cf6" }}>
        <Status />
        <CustomHeader title="New Normal" navigation={this.props.navigation} />
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
          <View style={{ backgroundColor: "#da99fa", flex: 1, width: screenWidth, }}>
            <ScrollView>
            <View style={styles.topblock}>
              <Text style={styles.toptext}><MaterialCommunityIcons name="worker" size={22}/> หลังเลิกงาน</Text>
            </View>
            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR25} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"ไม่ควรไปในที่มีคนรวมตัวกันมาก และรีบกลับบ้านทันที"</Text>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"หากจำเป็นต้องไป สวมหน้ากากล้างมือ อยู่ให้ห่างอย่างน้อย 1 เมตร"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR26} resizeMode='contain'/>
              </View>
            </View>

            <View style={styles.topblock}>
              <Text style={styles.toptext}><FontAwesome name="home" size={22}/> กลับบ้าน</Text>
            </View>
            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR27} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"ควรล้างมือก่อนเข้าบ้าน"</Text>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"หลังเข้าบ้าน เปลี่ยนชุด ชำรำร่างกาย"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR28} resizeMode='contain'/>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR29} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"ในบ้าน หากสมาชิก มีอาการต้องสงสัยให้ปฏิบัติตตามแนวทาง  Home Quarantine"</Text>
              </View>
            </View>

            <View style={styles.topblock}>
              <Text style={styles.toptext}><MaterialIcons name="pets" size={22} />  สัตว์เลี้ยง</Text>
            </View>
            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR30} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"สัตว์เลี้ยงไม่ควรปล่อยนอกบ้าน"</Text>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"หลังจับสัตว์เลี้ยง ให้ล้างมือ ไม่ควรหอมจูบกอด"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR31} resizeMode='contain'/>
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
    backgroundColor:'#8f0ad1', 
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
    backgroundColor:'#e8bffd',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
  detail2:{
    padding:10,
    flex:0.75,
    backgroundColor:'#e8bffd',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
  subdetail:{
    fontSize:16,
    alignContent:'center',
    color:'#6d0995',
    fontWeight:'bold'
  }
});

