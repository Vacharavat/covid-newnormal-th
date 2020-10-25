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
import { Octicons } from "@expo/vector-icons";
import { IMAGE } from "../constants/image";
import { AntDesign } from '@expo/vector-icons';

export class NewNormalScreenDetail extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#56939f" }}>
        <Status />
        <CustomHeader title="New Normal" navigation={this.props.navigation} />
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
          <View style={{ backgroundColor: "#92c0c8", flex: 1, width: screenWidth, }}>
            <ScrollView>
            <View style={styles.topblock}>
              <Text style={styles.toptext}><Octicons name="checklist" size={22}/> การเตรียมตัวก่อนออกจากบ้าน</Text>
            </View>
            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR1} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"แนะนำว่า เราควรออกจากบ้านเมื่อจำเป็น"</Text>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"สังเกตอาการตัวเอง หากมีไข้ ปวดศรีษะ ปวดเมื่อย ครั่นเนื้อครั่นตัว มีน้ำมูก ไม่ควรออกจากบ้าน"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR2} resizeMode='contain'/>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR3} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"เตรียมหน้ากาก 2 อัน แอลกอฮอล์เจล (ถ้าหาได้)"</Text>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"ใส่หน้ากากผ้า ครอบปากจมูก กระชับใบหน้าตลอดการเดินทาง หรืออยู่ในที่คนแออัด"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR4} resizeMode='contain'/>
              </View>
            </View>
            </ScrollView>
          </View>
          









          <View
            style={{
              backgroundColor: "#92c0c8",
              flex: 1,
              width: screenWidth,
             
            }}
          >
            <ScrollView>
            <View style={styles.topblock}>
              <Text style={styles.toptext}><AntDesign name="car" size={22} /> การเดินทาง</Text>
            </View>
            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR5} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"เมื่อขึ้นยานพาหนะ ไม่เอามือสัมผัสใบหน้า"</Text>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.detail2}>
                <Text style={styles.subdetail}>"อยู่ห่างผู้โดยสารอื่น 1-2 เมตร"</Text>
              </View>
              <View style={styles.image2}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR6} resizeMode='contain'/>
              </View>
            </View>

            <View style={styles.block}>
              <View style={styles.image}>
              <Image style={styles.imagedetail} source={IMAGE.IMAGE_AVATAR7} resizeMode='contain'/>
              </View>
              <View style={styles.detail}>
                <Text style={styles.subdetail}>"หลังลงจากพาหนะ ให้ใช้แอลกอฮอล์เจลล้างมือ"</Text>
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
    backgroundColor:'#324d52', 
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
    backgroundColor:'#dae5e7',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
  detail2:{
    padding:10,
    flex:0.75,
    backgroundColor:'#dae5e7',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
  subdetail:{
    fontSize:16,
    alignContent:'center',
    color:'#5d878e',
    fontWeight:'bold'
  }
});

