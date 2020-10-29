import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import { CustomHeader } from "../index";
import Status from "../Status";
import MapView, { Marker, Callout } from "react-native-maps";
import hospital from "../image/hospital.png";
import department from "../image/department.png";
import Color from "../constants/colors";
import { IMAGE } from "../constants/image";
import axios from "axios";
import { FontAwesome5 } from "@expo/vector-icons";

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
              source={IMAGE.IMAGE_ฺฺBKK}
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
      } else if (map.Province == "Chonburi") {
        return (
          <Marker
            coordinate={{
              latitude: 13.361277,
              longitude: 100.984592,
            }}
            title={"ชลบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ชลบุรี (Chonburi)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Phuket") {
        return (
          <Marker
            coordinate={{ latitude: 7.88042, longitude: 98.39224 }}
            title={"ภูเก็ต"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ภูเก็ต (Phuket)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Samut Prakan") {
        return (
          <Marker
            coordinate={{
              latitude: 13.599173,
              longitude: 100.599856,
            }}
            title={"สมุทรปราการ"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สมุทรปราการ (Samut Prakan)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Nonthaburi") {
        return (
          <Marker
            coordinate={{
              latitude: 13.859122,
              longitude: 100.521644,
            }}
            title={"นนทบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    นนทบุรี (Nonthaburi)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Yala") {
        return (
          <Marker
            coordinate={{
              latitude: 6.541083,
              longitude: 101.280407,
            }}
            title={"ยะลา"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ยะลา (Yala)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Songkhla") {
        return (
          <Marker
            coordinate={{
              latitude: 7.198745,
              longitude: 100.588915,
            }}
            title={"สงขลา"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สงขลา (Songkhla)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Pattani") {
        return (
          <Marker
            coordinate={{
              latitude: 6.761878,
              longitude: 101.323773,
            }}
            title={"ปัตตานี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ปัตตานี (Pattani)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Narathiwat") {
        return (
          <Marker
            coordinate={{
              latitude: 6.425636,
              longitude: 101.824988,
            }}
            title={"นราธิวาส"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    นราธิวาส (Narathiwat)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Chiang Mai") {
        return (
          <Marker
            coordinate={{
              latitude: 18.788354,
              longitude: 98.985301,
            }}
            title={"เชียงใหม่"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    เชียงใหม่ (Chiang Mai)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Pathum Thani") {
        return (
          <Marker
            coordinate={{
              latitude: 14.020824,
              longitude: 100.525035,
            }}
            title={"ปทุมธานี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ปทุมธานี (Pathum Thani)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Chachoengsao") {
        return (
          <Marker
            coordinate={{
              latitude: 13.690419,
              longitude: 101.077963,
            }}
            title={"ฉะเชิงเทรา"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ฉะเชิงเทรา (Chachoengsao)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Nakhon Pathom") {
        return (
          <Marker
            coordinate={{
              latitude: 13.814048,
              longitude: 100.037293,
            }}
            title={"นครปฐม"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    นครปฐม (Nakhon Pathom)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Chumphon") {
        return (
          <Marker
            coordinate={{
              latitude: 10.493049,
              longitude: 99.180022,
            }}
            title={"ชุมพร"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ชุมพร (Chumphon)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Krabi") {
        return (
          <Marker
            coordinate={{ latitude: 8.086124, longitude: 98.906339 }}
            title={"กระบี่"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    กระบี่ (Krabi)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Nakhon Ratchasima") {
        return (
          <Marker
            coordinate={{
              latitude: 14.97386,
              longitude: 102.083651,
            }}
            title={"นครราชสีมา"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    นครราชสีมา (Nakhon Ratchasima)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Surat Thani") {
        return (
          <Marker
            coordinate={{ latitude: 9.134195, longitude: 99.333423 }}
            title={"สุราษฎร์ธานี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สุราษฎร์ธานี (Surat Thani)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Satun") {
        return (
          <Marker
            coordinate={{
              latitude: 6.623824,
              longitude: 100.067373,
            }}
            title={"สตูล"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สตูล (Satun)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Prachuap Khiri Khan") {
        return (
          <Marker
            coordinate={{
              latitude: 11.812374,
              longitude: 99.797325,
            }}
            title={"ประจวบคีรีขันธ์"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ประจวบคีรีขันธ์ (Prachuap Khiri Khan)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Ubon Ratchathani") {
        return (
          <Marker
            coordinate={{
              latitude: 15.244857,
              longitude: 104.847299,
            }}
            title={"อุบลราชธานี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    อุบลราชธานี (Ubon Ratchathani)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Phatthalung") {
        return (
          <Marker
            coordinate={{
              latitude: 7.616689,
              longitude: 100.074025,
            }}
            title={"พัทลุง"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    พัทลุง (Phatthalung)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Samut Sakhon") {
        return (
          <Marker
            coordinate={{
              latitude: 13.547532,
              longitude: 100.274396,
            }}
            title={"สมุทรสาคร"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สมุทรสาคร (Samut Sakhon)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Buriram") {
        return (
          <Marker
            coordinate={{
              latitude: 14.993004,
              longitude: 103.102919,
            }}
            title={"บุรีรัมย์"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    บุรีรัมย์ (Buriram)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Nakhon Si Thammarat") {
        return (
          <Marker
            coordinate={{ latitude: 8.432493, longitude: 99.959904 }}
            title={"นครศรีธรรมราช"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    นครศรีธรรมราช (Nakhon Si Thammarat)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Udon Thani") {
        return (
          <Marker
            coordinate={{
              latitude: 17.364707,
              longitude: 102.815896,
            }}
            title={"อุดรธานี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    อุดรธานี (Udon Thani)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Sa Kaeo") {
        return (
          <Marker
            coordinate={{
              latitude: 13.824036,
              longitude: 102.064585,
            }}
            title={"สระแก้ว"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สระแก้ว (Sa Kaeo)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Prachinburi") {
        return (
          <Marker
            coordinate={{
              latitude: 14.050982,
              longitude: 101.372739,
            }}
            title={"ปราจีนบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ปราจีนบุรี (Prachinburi)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Kanchanaburi") {
        return (
          <Marker
            coordinate={{ latitude: 14.022808, longitude: 99.53278 }}
            title={"กาญจนบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    กาญจนบุรี (Kanchanaburi)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Surin") {
        return (
          <Marker
            coordinate={{
              latitude: 14.882871,
              longitude: 103.493722,
            }}
            title={"สุรินทร์"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สุรินทร์ (Surin)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Chiang Rai") {
        return (
          <Marker
            coordinate={{
              latitude: 19.907159,
              longitude: 99.830972,
            }}
            title={"เชียงราย"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    เชียงราย (Chiang Rai)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Nakhon Sawan") {
        return (
          <Marker
            coordinate={{
              latitude: 15.693137,
              longitude: 100.122704,
            }}
            title={"นครสวรรค์"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    นครสวรรค์ (Nakhon Sawan)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Sisaket") {
        return (
          <Marker
            coordinate={{
              latitude: 15.118593,
              longitude: 104.321993,
            }}
            title={"ศรีสะเกษ"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ศรีสะเกษ (Sisaket)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Trang") {
        return (
          <Marker
            coordinate={{ latitude: 7.559362, longitude: 99.610995 }}
            title={"ตรัง"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ตรัง (Trang)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Ratchaburi") {
        return (
          <Marker
            coordinate={{
              latitude: 13.528292,
              longitude: 99.813415,
            }}
            title={"ราชบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ราชบุรี (Ratchaburi)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Phitsanulok") {
        return (
          <Marker
            coordinate={{
              latitude: 16.829811,
              longitude: 100.261469,
            }}
            title={"พิษณุโลก"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    พิษณุโลก (Phitsanulok)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Khon Kaen") {
        return (
          <Marker
            coordinate={{
              latitude: 16.441857,
              longitude: 102.836028,
            }}
            title={"ขอนแก่น"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ขอนแก่น (Khon Kaen)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Suphan Buri") {
        return (
          <Marker
            coordinate={{
              latitude: 13.47442,
              longitude: 100.117714,
            }}
            title={"สุพรรณบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สุพรรณบุรี (Suphan Buri)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Rayong") {
        return (
          <Marker
            coordinate={{
              latitude: 12.683311,
              longitude: 101.237433,
            }}
            title={"ระยอง"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ระยอง (Rayong)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Loei") {
        return (
          <Marker
            coordinate={{
              latitude: 17.486025,
              longitude: 101.722309,
            }}
            title={"เลย"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    เลย (Loei)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Mae Hong Son") {
        return (
          <Marker
            coordinate={{
              latitude: 19.299022,
              longitude: 97.965621,
            }}
            title={"แม่ฮ่องสอน"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    แม่ฮ่องสอน (Mae Hong Son)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Saraburi") {
        return (
          <Marker
            coordinate={{
              latitude: 14.528885,
              longitude: 100.910102,
            }}
            title={"สระบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สระบุรี (Saraburi)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Mukdahan") {
        return (
          <Marker
            coordinate={{
              latitude: 16.542443,
              longitude: 104.720938,
            }}
            title={"มุกดาหาร"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    มุกดาหาร (Mukdahan)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Phra Nakhon Si Ayutthaya") {
        return (
          <Marker
            coordinate={{
              latitude: 14.358747,
              longitude: 100.571509,
            }}
            title={"พระนครศรีอยุธยา"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    พระนครศรีอยุธยา (Phra Nakhon Si Ayutthaya)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Lamphun") {
        return (
          <Marker
            coordinate={{ latitude: 18.57444, longitude: 99.008739 }}
            title={"ลำพูน"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ลำพูน (Lamphun)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Lampang") {
        return (
          <Marker
            coordinate={{ latitude: 18.288857, longitude: 99.49089 }}
            title={"ลำปาง"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ลำปาง (Lampang)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Phetchabun") {
        return (
          <Marker
            coordinate={{
              latitude: 16.419043,
              longitude: 101.15505,
            }}
            title={"เพชรบูรณ์"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    เพชรบูรณ์ (Phetchabun)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Sukhothai") {
        return (
          <Marker
            coordinate={{
              latitude: 17.005552,
              longitude: 99.826344,
            }}
            title={"สุโขทัย"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สุโขทัย (Sukhothai)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Uttaradit") {
        return (
          <Marker
            coordinate={{
              latitude: 17.620105,
              longitude: 100.099326,
            }}
            title={"อุตรดิตถ์"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    อุตรดิตถ์ (Uttaradit)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Chanthaburi") {
        return (
          <Marker
            coordinate={{
              latitude: 12.611362,
              longitude: 102.103844,
            }}
            title={"จันทบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    จันทบุรี (Chanthaburi)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Roi Et") {
        return (
          <Marker
            coordinate={{ latitude: 16.053797, longitude: 103.652 }}
            title={"ร้อยเอ็ด"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ร้อยเอ็ด (Roi Et)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Tak") {
        return (
          <Marker
            coordinate={{
              latitude: 16.883946,
              longitude: 99.125905,
            }}
            title={"ตาก"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ตาก (Tak)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Nong Bua Lamphu") {
        return (
          <Marker
            coordinate={{
              latitude: 17.222148,
              longitude: 102.426041,
            }}
            title={"หนองบัวลำพู"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    หนองบัวลำพู (Nong Bua Lamphu)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Nong Khai") {
        return (
          <Marker
            coordinate={{
              latitude: 17.878274,
              longitude: 102.741329,
            }}
            title={"หนองคาย"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    หนองคาย (Nong Khai)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Chaiyaphum") {
        return (
          <Marker
            coordinate={{
              latitude: 15.806777,
              longitude: 102.031521,
            }}
            title={"ชัยภูมิ"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ชัยภูมิ (Chaiyaphum)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Phayao") {
        return (
          <Marker
            coordinate={{ latitude: 19.16645, longitude: 99.90199 }}
            title={"พะเยา"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    พะเยา (Phayao)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Kalasin") {
        return (
          <Marker
            coordinate={{
              latitude: 16.43139,
              longitude: 103.505898,
            }}
            title={"กาฬสินธิ์ุ"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    กาฬสินธิ์ุ (Kalasin)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Nakhon Nayok") {
        return (
          <Marker
            coordinate={{
              latitude: 14.206985,
              longitude: 101.213008,
            }}
            title={"นครนายก"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    นครนายก (Nakhon Nayok)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Amnat Charoen") {
        return (
          <Marker
            coordinate={{
              latitude: 15.865647,
              longitude: 104.625724,
            }}
            title={"อำนาจเจริญ"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    อำนาจเจริญ (Amnat Charoen)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Phang Nga") {
        return (
          <Marker
            coordinate={{ latitude: 8.440713, longitude: 98.519354 }}
            title={"พังงา"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    พังงา (Phang Nga)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Lopburi") {
        return (
          <Marker
            coordinate={{ latitude: 14.7995, longitude: 100.65337 }}
            title={"ลพบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ลพบุรี (Lopburi)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Nakhon Phanom") {
        return (
          <Marker
            coordinate={{
              latitude: 17.392093,
              longitude: 104.769568,
            }}
            title={"นครปฐม"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    นครปฐม (Nakhon Phanom)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Phetchaburi") {
        return (
          <Marker
            coordinate={{
              latitude: 13.111128,
              longitude: 99.939183,
            }}
            title={"เพชรบุรี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    เพชรบุรี (Phetchaburi)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Phrae") {
        return (
          <Marker
            coordinate={{
              latitude: 18.144553,
              longitude: 100.140284,
            }}
            title={"แพร่"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    แพร่ (Phrae)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Yasothon") {
        return (
          <Marker
            coordinate={{
              latitude: 15.792629,
              longitude: 104.145279,
            }}
            title={"ยโสธร"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    ยโสธร (Yasothon)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Uthai Thani") {
        return (
          <Marker
            coordinate={{
              latitude: 15.383526,
              longitude: 100.024635,
            }}
            title={"อุทัยธานี"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    อุทัยธานี (Uthai Thani)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Samut Songkhram") {
        return (
          <Marker
            coordinate={{
              latitude: 13.40978,
              longitude: 100.002266,
            }}
            title={"สมุทรสงคราม"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สมุทรสงคราม (Samut Songkhram)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Sakon Nakhon") {
        return (
          <Marker
            coordinate={{
              latitude: 17.154557,
              longitude: 104.134843,
            }}
            title={"สมุทรสาคร"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    สมุทรสาคร (Sakon Nakhon)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      } else if (map.Province == "Maha Sarakham") {
        return (
          <Marker
            coordinate={{
              latitude: 16.185095,
              longitude: 103.302677,
            }}
            title={"มหาสารคาม"}
            description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
          >
            <Image
              source={IMAGE.IMAGE_ฺฺBKK}
              style={{ width: 100, height: 60 }}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                    มหาสารคาม (Maha Sarakham)
                  </Text>
                  <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                </View>
                <View style={styles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
        );
      }
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
                      สถานที่ : 270 ถนนพระรามที่หก แขวงทุ่งพญาไท เขตราชเทวี กทม.
                      10400
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
                      สถานที่ : 71/3 ซอย เศรษฐศิริ 1 แขวง พญาไท Phaya Thai,
                      Bangkok 10400
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
    borderTopColor: "#007a87",
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
