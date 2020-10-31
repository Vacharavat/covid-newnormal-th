import React, { Component } from "react";
import { Text, View, SafeAreaView, Image, ScrollView, Dimensions,} from "react-native";
import { CustomHeader } from "../../index";
import Status from "../../Status";
import { IMAGE } from "../../constants/image";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import NewNormalDetail from "../../styles/tab/newnormaldetail"

export class NewNormalScreenDetail3 extends Component {
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
              <Text style={NewNormalDetail.toptext}><MaterialCommunityIcons name="worker" size={22}/> หลังเลิกงาน</Text>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR25} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"ไม่ควรไปในที่มีคนรวมตัวกันมาก และรีบกลับบ้านทันที"</Text>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"หากจำเป็นต้องไป สวมหน้ากากล้างมือ อยู่ให้ห่างอย่างน้อย 1 เมตร"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR26} resizeMode='contain'/>
              </View>
            </View>

            <View style={NewNormalDetail.topblock}>
              <Text style={NewNormalDetail.toptext}><FontAwesome name="home" size={22}/> กลับบ้าน</Text>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR27} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"ควรล้างมือก่อนเข้าบ้าน"</Text>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"หลังเข้าบ้าน เปลี่ยนชุด ชำรำร่างกาย"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR28} resizeMode='contain'/>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR29} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"ในบ้าน หากสมาชิก มีอาการต้องสงสัยให้ปฏิบัติตตามแนวทาง {"\n"}  Home Quarantine"</Text>
              </View>
            </View>

            <View style={NewNormalDetail.topblock}>
              <Text style={NewNormalDetail.toptext}><MaterialIcons name="pets" size={22} />  สัตว์เลี้ยง</Text>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR30} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"สัตว์เลี้ยงไม่ควรปล่อยนอกบ้าน"</Text>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"หลังจับสัตว์เลี้ยง ให้ล้างมือ ไม่ควรหอมจูบกอด"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR31} resizeMode='contain'/>
              </View>
            </View>
            </ScrollView>
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}



