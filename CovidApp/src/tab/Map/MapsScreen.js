import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { CustomHeader } from "../../index";
import Status from "../../Status";
import MapView, { Marker, Callout } from "react-native-maps";
import hospital from "../../image/hospital.png";
import department from "../../image/department.png";
import Color from "../../constants/colors";
import { IMAGE } from "../../constants/image";
import axios from "axios";
import { FontAwesome5 } from "@expo/vector-icons";
import datas from "../../data/data_map";



export class MapsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "0",
      bangkok: "0",
      chonburi: "0",
      phuket: "0",
      samutprakan: "0",
      arraydata: [],
      datas: datas,
    };
  
    

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  

  async componentDidMount() {
    await axios
      .get("https://covid19.th-stat.com/api/open/cases/sum")
      .then((res) => {
        var dataprovince = res.data.Province;
        var arrayProvince = [];
        for (var i in dataprovince)
          arrayProvince.push({ Province: i, Number: dataprovince[i] });
        this.setState({
          arraydata: arrayProvince,
        });
      })
      .catch((er) => console.log(er.messagge));
  }
  renderprovince = () => {
    return this.state.arraydata.map((map) => {
      for(var i=0; i<this.state.datas.length; i++){
      if (map.Province == "Bangkok") {
        return (
          <Marker
            coordinate={{
              latitude: 13.759957,
              longitude: 100.552297,
            }}
            title={"กรุงเทพมหานคร"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_BKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    กรุงเทพมหานคร (Bangkok)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } 
      else if (map.Province == this.state.datas[i].province) {
        return (
          <Marker
            coordinate={{
              latitude: this.state.datas[i].latitude,
              longitude: this.state.datas[i].longitude,
            }}
            title={"ชลบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={this.state.datas[i].image}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    {this.state.datas[i].name}
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      }}
    });
  };
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader
          title="Maps"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 13.75,
              longitude: 100.517,
              latitudeDelta: 1.4,
              longitudeDelta: 1.0,
            }}
          >
            {this.renderprovince()}
            <Marker
              coordinate={{ latitude: 13.732548, longitude: 100.536798 }}
              title={"รพ.จุฬาลงกรณ์"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 3,000 – 6,000 บาท"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.จุฬาลงกรณ์
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 3,000 – 6,000 บาท</Text>
                    <Text>
                      สถานที่ : 1873 ถนนพระรามที่ 4 แขวงปทุมวันเขตปทุมวัน
                      กรุงเทพมหานคร 10330
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image style={styles.image} source={IMAGE.IMAGE_ฺฺHOS1} />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.764352, longitude: 100.537155 }}
              title={"รพ.ราชวิถี"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 3,000 – 6,000 บาท"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.ราชวิถี
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 3,000 – 6,000 บาท</Text>
                    <Text>
                      สถานที่ : 2 ถนนพญาไท และ ถนนราชวิถี แขวงทุ่งพญาไท
                      เขตราชเทวี กรุงเทพมหานคร 10400
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image style={styles.image} source={IMAGE.IMAGE_ฺฺHOS2} />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.766049, longitude: 100.5267 }}
              title={"รพ.รามาธิบดี"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.รามาธิบดี
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 5,000 บาท ขึ้นไป</Text>
                    <Text>
                      สถานที่ : 270 ถนนพระรามที่หก แขวงทุ่งพญาไท เขตราชเทวี กทม. 10400
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image style={styles.image} source={IMAGE.IMAGE_ฺฺHOS3} />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.783171, longitude: 100.534008 }}
              title={"รพ.ชัยยุทธ"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 7,500 บาท"}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.วิชัยยุทธ
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 7,500 บาท</Text>
                    <Text>
                      สถานที่ : 71/3 ซอย เศรษฐศิริ 1 แขวง พญาไท Phaya Thai, Bangkok 10400
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image style={styles.image} source={IMAGE.IMAGE_ฺฺHOS4} />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.682024, longitude: 100.474654 }}
              title={"รพ.บางปะกอก 9"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 7,900 – 10,000 บาท"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.บางปะกอก 9
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 7,900 – 10,000 บาท</Text>
                    <Text>
                      สถานที่ : 362 ถ. พระราม 2 Bang Mot, Chom Thong, Bangkok
                      10150
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image style={styles.image} source={IMAGE.IMAGE_ฺฺHOS5} />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.770491, longitude: 100.540625 }}
              title={"รพ.พญาไท 2"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 6,100 บาท"}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.พญาไท 2
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 6,100 บาท</Text>
                    <Text>
                      สถานที่ : 943 Phahonyothin Rd, แขวง พญาไท Phaya Thai,
                      Bangkok 10400
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image style={styles.image} source={IMAGE.IMAGE_ฺฺHOS6} />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.722983, longitude: 100.464073 }}
              title={"รพ.พญาไท 3"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 6,100 บาท"}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.พญาไท 3
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 6,100 บาท</Text>
                    <Text>
                      สถานที่ : 111 Petchkasem Rd, Pak Khlong Phasi Charoen,
                      Phasi Charoen, Bangkok 10160
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image style={styles.image} source={IMAGE.IMAGE_ฺฺHOS7} />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.963261, longitude: 100.621381 }}
              title={"รพ.แพทย์รังสิต"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 8,000 บาท"}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.แพทย์รังสิต
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 8,000 บาท</Text>
                    <Text>
                      สถานที่ : 733/345 หมู่ 8 ถนน พหลโยธิน ตำบล คูคต อำเภอ
                      ลำลูกกา จังหวัด ปทุมธานี 12130
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image style={styles.image} source={IMAGE.IMAGE_ฺฺHOS8} />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.759907, longitude: 100.485862 }}
              title={"รพ.ศิริราชปิยมหาราชการุณย์"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 9,900 บาท"}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.ศิริราชปิยมหาราชการุณย์
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 9,900 บาท</Text>
                    <Text>
                      สถานที่ : 2 Thanon Wang Lang, Siri Rat, Bangkok Noi,
                      Bangkok 10700
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image style={styles.image} source={IMAGE.IMAGE_ฺฺHOS9} />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.853775, longitude: 100.52275 }}
              title={"สถาบันบำราศนราดูร"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 8,000-14,000 บาท"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      สถาบันบำราศนราดูร
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 8,000-14,000 บาท</Text>
                    <Text>
                      สถานที่ : 38 หมู่ที่ 4 Tiwanon Rd, Talat Kwan, Mueang
                      Nonthaburi District, Nonthaburi 11000
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺHOS10}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.728271, longitude: 100.531252 }}
              title={"รพ.กรุงเทพคริสเตียน"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 – 10,000 บาท"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.กรุงเทพคริสเตียน
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 5,000 – 10,000 บาท</Text>
                    <Text>
                      สถานที่ : 124 Si Lom, Suriya Wong, Bang Rak, Bangkok 10500
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺHOS11}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.753238, longitude: 100.570973 }}
              title={"รพ.พระราม 9"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 8,000 – 10,000 บาท"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.พระราม 9
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 8,000 – 10,000 บาท</Text>
                    <Text>
                      สถานที่ :99 Rama IX Rd, Bang Kapi, Huai Khwang, Bangkok
                      10310
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺHOS12}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.792221, longitude: 100.550129 }}
              title={"รพ.เปาโลเมโมเรียล"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.เปาโลเมโมเรียล
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 5,000 บาท ขึ้นไป</Text>
                    <Text>
                      สถานที่ :670 1 Phahonyothin Rd, Samsen Nai, Phaya Thai,
                      Bangkok 10400
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺHOS13}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.801892, longitude: 100.596289 }}
              title={"รพ.เปาโลเมโมเรียลโชคชัย 4"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.เปาโลเมโมเรียล โชคชัย 4
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 5,000 บาท ขึ้นไป</Text>
                    <Text>
                      สถานที่ :1 Chok Chai 4 Rd, Lat Phrao, Bangkok 10230
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺHOS14}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.598271, longitude: 100.614676 }}
              title={"รพ.เปาโลเมโมเรียลสมุทรปราการ"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.เปาโลเมโมเรียลสมุทรปราการ
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 5,000 บาท ขึ้นไป</Text>
                    <Text>
                      สถานที่ :123 หมู่ที่ 8 Srinagarindra Rd, Bang Muang,
                      Mueang Samut Prakan District, Samut Prakan 10270
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺHOS15}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.985708, longitude: 100.619697 }}
              title={"รพ.เปาโลเมโมเรียลรังสิต"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.เปาโลเมโมเรียลรังสิต
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 5,000 บาท ขึ้นไป</Text>
                    <Text>
                      สถานที่ : 11, 1 Rangsit - Nakhon Nayok Rd, Tambon
                      Prachathipat, Thanyaburi District, Pathum Thani 12130
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺHOS16}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.835377, longitude: 100.574222 }}
              title={"รพ.เปาโลเมโมเรียลเกษตร"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.เปาโลเมโมเรียลเกษตร
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 5,000 บาท ขึ้นไป</Text>
                    <Text>
                      สถานที่ : 2012 5-7 Soi Phahon Yothin 34, Sena Nikhom,
                      Chatuchak, Bangkok 10900
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺHOS17}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.608531, longitude: 100.551241 }}
              title={"รพ.เปาโลเมโมเรียลพระประแดง"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      รพ.เปาโลเมโมเรียลพระประแดง
                    </Text>
                    <Text>ค่าตรวจเชื้อหาไวรัส : 5,000 บาท ขึ้นไป</Text>
                    <Text>
                      สถานที่ : 288 หมู่ที่ 1 ถ. สุขสวัสดิ์ Pak Khlong Bang Pla
                      Kot, Phra Samut Chedi District, Samut Prakan 10290
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺHOS18}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>

            <Marker
              coordinate={{ latitude: 13.853437, longitude: 100.527139 }}
              title={"กระทรวงสาธารณะสุข"}
              image={department}
              description={"กรมควบคุมโรค 1422 | สายด่วนสุขภาพจิต 1323"}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      กระทรวงสาธารณะสุข
                    </Text>
                    <Text>กรมควบคุมโรค 1422 | สายด่วนสุขภาพจิต 1323</Text>
                    <Text>
                      สถานที่ : 88/20 ถ.ติวานนท์ ต.ตลาดขวัญ อ.เมืองนนทบุรี
                      จ.นนทบุรี 11000
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺDEP1}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.851389, longitude: 100.503123 }}
              title={"สถาบันการแพทย์ฉุกเฉินแห่งชาติ"}
              image={department}
              description={"เบอร์โทรติดต่อ : 1669"}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      สถาบันการแพทย์ฉุกเฉินแห่งชาติ
                    </Text>
                    <Text>เบอร์โทรติดต่อ : 1669</Text>
                    <Text>
                      สถานที่ : อาคารเฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัว
                      ๘๔ พรรษา 88/40 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ Mueang
                      Nonthaburi District, Nonthaburi 11000
                    </Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺDEP2}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.851831, longitude: 100.52729 }}
              title={"ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน"}
              image={department}
              description={"เบอร์โทรติดต่อ : 1111"}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน
                    </Text>
                    <Text>เบอร์โทรติดต่อ : 1111</Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺDEP3}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
            <Marker
              coordinate={{ latitude: 13.746339, longitude: 100.552297 }}
              title={"สายด่วนปรึกษาแพทย์โรงพยาบาลบำรุงราษฎร์"}
              image={department}
              description={"เบอร์โทรติดต่อ : 1378"}
            >
              <Callout tooltip>
                <View>
                  <View style={styles.bubble}>
                    <Text style={styles.name}>
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="red"
                      />{" "}
                      สายด่วนปรึกษาแพทย์โรงพยาบาลบำรุงราษฎร์
                    </Text>
                    <Text>เบอร์โทรติดต่อ : 1378</Text>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 10,
                      }}
                    >
                      <Image
                        style={styles.image}
                        source={IMAGE.IMAGE_ฺฺDEP4}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
          </MapView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bubble: {
    // flexDirection:'row',
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 300,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: 32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: Color.darkpurple,
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    width: 200,
    height: 100,
  },
});
