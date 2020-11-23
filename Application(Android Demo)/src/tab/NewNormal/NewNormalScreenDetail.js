import React, { Component } from "react";
import { Text, View, SafeAreaView, Image, ScrollView, Dimensions, } from "react-native";
import { CustomHeader } from "../../index";
import Status from "../../Status";
import { Octicons,AntDesign } from "@expo/vector-icons";
import { IMAGE } from "../../constants/image";
import NewNormalDetail from "../../styles/tab/newnormaldetail";


export class NewNormalScreenDetail extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    let screenHeight = Dimensions.get("window").height;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#56939f" }}>
        <Status />
        <CustomHeader title="Details" navigation={this.props.navigation} />
        <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true}>
          <View style={{ backgroundColor: "#92c0c8", flex: 1, width: screenWidth, }}>
            <ScrollView>
            
            <View style={NewNormalDetail.topblock}>
              <Text style={NewNormalDetail.toptext}><Octicons name="checklist" size={22}/> การเตรียมตัวก่อนออกจากบ้าน</Text>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR1} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"แนะนำว่า เราควรออกจากบ้านเมื่อจำเป็น"</Text>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"สังเกตอาการตัวเอง หากมีไข้ ปวดศรีษะ ปวดเมื่อย ครั่นเนื้อครั่นตัว มีน้ำมูก {"\n"} ไม่ควรออกจากบ้าน"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR2} resizeMode='contain'/>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR3} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"เตรียมหน้ากาก 2 อัน แอลกอฮอล์เจล {"\n"} (ถ้าหาได้)"</Text>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"ใส่หน้ากากผ้า ครอบปากจมูก กระชับใบหน้าตลอดการเดินทาง {"\n"} หรืออยู่ในที่คนแออัด"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR4} resizeMode='contain'/>
              </View>
              
            </View>
            </ScrollView>
          </View>
           
           
           {/* Part2 */}
          <View style={{ backgroundColor: "#92c0c8", flex: 1, width: screenWidth,}}>
            <ScrollView>
            <View style={NewNormalDetail.topblock}>
              <Text style={NewNormalDetail.toptext}><AntDesign name="car" size={22} /> การเดินทาง</Text>
            </View>
            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR5} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"เมื่อขึ้นยานพาหนะ ไม่เอามือสัมผัสใบหน้า"</Text>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.detail2}>
                <Text style={NewNormalDetail.subdetail}>"อยู่ห่างผู้โดยสารอื่น 1-2 เมตร"</Text>
              </View>
              <View style={NewNormalDetail.image2}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR6} resizeMode='contain'/>
              </View>
            </View>

            <View style={NewNormalDetail.block}>
              <View style={NewNormalDetail.image}>
              <Image style={NewNormalDetail.imagedetail} source={IMAGE.IMAGE_AVATAR7} resizeMode='contain'/>
              </View>
              <View style={NewNormalDetail.detail}>
                <Text style={NewNormalDetail.subdetail}>"หลังลงจากพาหนะ{"\n"} ให้ใช้แอลกอฮอล์เจลล้างมือ"</Text>
              </View>
            </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

