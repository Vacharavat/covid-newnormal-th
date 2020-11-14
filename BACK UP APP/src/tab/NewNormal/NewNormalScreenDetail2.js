import React, { Component } from "react";
import { Text, View, SafeAreaView, Image, ScrollView, Dimensions,} from "react-native";
import { CustomHeader } from "../../index";
import Status from "../../Status";
import { IMAGE } from "../../constants/image";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import NewNormalDetail from "../../styles/tab/newnormaldetail"

export class NewNormalScreenDetail2 extends Component {
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
            <View style={NewNormalDetail.topblock}>
              <Text style={NewNormalDetail.toptext}><MaterialCommunityIcons name="stairs" size={22}/> บันได และ ลิฟท์</Text>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR8} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"แนะนำว่า พยายามขึ้นบันได{"\n"} แทนการใช้ลิฟท์"</Text>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"หากต้องใช้ลิฟท์ ควรใส่หน้ากาก {"\n"} เลี่ยงสัมผัสออกจากลิฟท์ล้างมือ"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR9} resizeMode='contain'/>
              </View>
            </View>

            <View style={NewNormalDetail.topblock}>
              <Text style={NewNormalDetail.toptext}><FontAwesome5 name="toilet" size={22} /> ห้องสุขา</Text>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR10} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"ล้างมือ ก่อนและหลังใช้ส้วม"</Text>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"ปิดฝาชักโครกก่อนกด"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR11} resizeMode='contain'/>
              </View>
            </View>
            </ScrollView>
          </View>


          {/* part2 */}
          <View style={{ backgroundColor: "#92c0c8", flex: 1, width: screenWidth,}}>
            <ScrollView>
            <View style={NewNormalDetail.topblock}>
              <Text style={NewNormalDetail.toptext}><MaterialCommunityIcons name="food" size={22}/> กินอาหาร</Text>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR12} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"เหลื่อมเวลาพัก"</Text>
              </View>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"ล้างมือก่อนกินและหลังกินอาหาร"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR13} resizeMode='contain'/>
              </View>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR14} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"นั่งห่างกัน 1 เมตร"</Text>
              </View>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"ควรเป็นอาหารจานเดียว"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR15} resizeMode='contain'/>
              </View>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR16} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"กินอาหารปรุงสุกร้อน"</Text>
              </View>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"หากเป็นไปได้ ควรมีภาชนะ{"\n"}ส่วนตัวของตัวเอง"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR17} resizeMode='contain'/>
              </View>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR18} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"เลือกร้านที่สะอาด ปรุงอาหารตาม{"\n"}สุขอนามัยที่ดี"</Text>
              </View>
            </View>
            </ScrollView>
          </View>

          {/* Part3 */}
          <View style={{ backgroundColor: "#92c0c8", flex: 1, width: screenWidth,}}>
            <ScrollView>
            <View style={NewNormalDetail.topblock}>
              <Text style={NewNormalDetail.toptext}><Fontisto name="room" size={22}/> ในห้องทำงาน</Text>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR19} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>โต๊ะ เครื่องใช้ส่วนตัว{"\n"}"ทำความสะอาดสม่ำเสมอ ก่อนและหลังใช้งานทุกวัน"</Text>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>อุปกรณ์ เครื่องใช้{"\n"}"หลังจุดที่มีการสัมผัสใช้ร่วม {"\n"}ทำความสะอาดบ่อยๆ"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR20} resizeMode='contain'/>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR21} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>หลังใช้อุปกรณ์ เครื่องมือ{"\n"}"ควรล้างมือทุกครั้ง"</Text>
              </View>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>นั่งห่างกัน{"\n"}"รักษาระยะห่างอย่างน้อย 1 เมตร"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR22} resizeMode='contain'/>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR23} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>เปิดระบายอากาศ{"\n"}"หน้าต่าง ประตู อย่างน้อย 1 ซม."</Text>
              </View>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>หลีกเลี่ยงกิจกรรมที่มีคนอยู่ร่วมกัน{"\n"}"เช่น ประชุม สัมมนา หากจำเป็นอยู่ร่วมกันไม่เกิน 50 คน ให้อยู่ห่าง 1 เมตร"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR24} resizeMode='contain'/>
              </View>
            </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}


