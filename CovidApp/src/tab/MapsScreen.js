import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { CustomHeader } from "../index";
import Status from "../Status";
import MapView, { Circle, Marker  } from "react-native-maps";
import hospital from "../image/hospital.png";
import department from "../image/department.png";
import Color from "../constants/colors";
import { IMAGE } from "../constants/image";

export class MapsScreen extends Component {
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
            <Marker
              coordinate={{ latitude: 13.732548, longitude: 100.536798 }}
              title={"รพ.จุฬาลงกรณ์"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 3,000 – 6,000 บาท"
              }
            />
            <Marker
              coordinate={{ latitude: 13.764352, longitude: 100.537155 }}
              title={"รพ.ราชวิถี"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 3,000 – 6,000 บาท"
              }
            />
            <Marker
              coordinate={{ latitude: 13.766049, longitude: 100.5267 }}
              title={"รพ.รามาธิบดี"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <Marker
              coordinate={{ latitude: 13.783171, longitude: 100.534008 }}
              title={"รพ.ชัยยุทธ"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 7,500 บาท"}
            />
            <Marker
              coordinate={{ latitude: 13.682024, longitude: 100.474654 }}
              title={"รพ.บางปะกอก 9"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 7,900 – 10,000 บาท"
              }
            />
            <Marker
              coordinate={{ latitude: 13.770491, longitude: 100.540625 }}
              title={"รพ.พญาไท 2"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 6,100 บาท"}
            />
            <Marker
              coordinate={{ latitude: 13.722983, longitude: 100.464073 }}
              title={"รพ.พญาไท 3"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 6,100 บาท"}
            />
            <Marker
              coordinate={{ latitude: 13.963261, longitude: 100.621381 }}
              title={"รพ.แพทย์รังสิต"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 8,000 บาท"}
            />
            <Marker
              coordinate={{ latitude: 13.759907, longitude: 100.485862 }}
              title={"รพ.ศิริราชปิยมหาราชการุณย์"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 9,900 บาท"}
            />
            <Marker
              coordinate={{ latitude: 13.853775, longitude: 100.52275 }}
              title={"สถาบันบำราศนราดูร"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 8,000-14,000 บาท"
              }
            />
            <Marker
              coordinate={{ latitude: 13.728271, longitude: 100.531252 }}
              title={"รพ.กรุงเทพคริสเตียน"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 – 10,000 บาท"
              }
            />
            <Marker
              coordinate={{ latitude: 13.753238, longitude: 100.570973 }}
              title={"รพ.พระราม 9"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 8,000 – 10,000 บาท"
              }
            />
            <Marker
              coordinate={{ latitude: 13.792221, longitude: 100.550129 }}
              title={"รพ.เปาโลเมโมเรียล"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <Marker
              coordinate={{ latitude: 13.801892, longitude: 100.596289 }}
              title={"รพ.เปาโลเมโมเรียลโชคชัย 4"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <Marker
              coordinate={{ latitude: 13.598271, longitude: 100.614676 }}
              title={"รพ.เปาโลเมโมเรียลสมุทรปราการ"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <Marker
              coordinate={{ latitude: 13.985708, longitude: 100.619697 }}
              title={"รพ.เปาโลเมโมเรียลรังสิต"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <Marker
              coordinate={{ latitude: 13.835377, longitude: 100.574222 }}
              title={"รพ.เปาโลเมโมเรียลเกษตร"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <Marker
              coordinate={{ latitude: 13.608531, longitude: 100.551241 }}
              title={"รพ.เปาโลเมโมเรียลพระประแดง"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />

            <Marker
              coordinate={{ latitude: 13.853437, longitude: 100.527139 }}
              title={"กระทรวงสาธารณะสุข"}
              image={department}
              description={"กรมควบคุมโรค 1422 | สายด่วนสุขภาพจิต 1323"}
            />
            <Marker
              coordinate={{ latitude: 13.851389, longitude: 100.503123 }}
              title={"สถาบันการแพทย์ฉุกเฉินแห่งชาติ"}
              image={department}
              description={"เบอร์โทรติดต่อ : 1669"}
            />
            <Marker
              coordinate={{ latitude: 13.851831, longitude: 100.52729 }}
              title={"ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน"}
              image={department}
              description={"เบอร์โทรติดต่อ : 1111"}
            />
            <Marker
              coordinate={{ latitude: 13.746339, longitude: 100.552297 }}
              title={"สายด่วนปรึกษาแพทย์โรงพยาบาลบำรุงราษฎร์"}
              image={department}
              description={"เบอร์โทรติดต่อ : 1378"}
            />
            {/* Bangkok */}
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
            </Marker>
            {/* Chonburi */}
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
            </Marker>
            {/* Phuket */}
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
            </Marker>
            {/* Samut Prakan */}
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
            </Marker>
            {/* Nonthaburi  */}
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
            </Marker>
            {/* Yala  */}
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
            </Marker>
            {/* Songkhla  */}
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
            </Marker>
            {/* Pattani  */}
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
            </Marker>
            {/* Narathiwat  */}
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
            </Marker>
            {/* Chiang Mai  */}
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
            </Marker>
            {/* Pathum Thani  */}
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
            </Marker>
            {/* Chachoengsao */}
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
            </Marker>
            {/* Nakhon Pathom */}
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
            </Marker>
            {/* Chumphon */}
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
            </Marker>
            {/* Krabi */}
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
            </Marker>
            {/* Nakhon Ratchasima */}
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
            </Marker>
            {/* Surat Thani */}
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
            </Marker>
            {/* Satun */}
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
            </Marker>
            {/* Prachuap Khiri Khan */}
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
            </Marker>
            {/* Ubon Ratchathani*/}
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
            </Marker>
            {/* Phatthalung */}
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
            </Marker>
            {/* Samut Sakhon */}
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
            </Marker>
            {/* Buriram */}
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
            </Marker>
            {/* Nakhon Si Thammarat */}
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
            </Marker>
            {/* Udon Thani */}
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
            </Marker>
            {/* Sa Kaeo */}
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
            </Marker>
            {/* Prachinburi */}
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
            </Marker>
            {/* Kanchanaburi */}
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
            </Marker>
            {/* Surin */}
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
            </Marker>
            {/* Chiang Rai */}
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
            </Marker>
            {/* Nakhon Sawan */}
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
            </Marker>
            {/* Sisaket */}
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
            </Marker>
            {/* Trang */}
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
            </Marker>
            {/* Ratchaburi */}
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
            </Marker>
            {/* Phitsanulok */}
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
            </Marker>
            {/* Khon Kaen */}
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
            </Marker>
            {/* Suphan Buri */}
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
            </Marker>
            {/* Rayong */}
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
            </Marker>
            {/* Loei */}
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
            </Marker>
            {/* Mae Hong Son */}
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
            </Marker>
            {/* Saraburi */}
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
            </Marker>
            {/* Mukdahan */}
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
            </Marker>
            {/* Phra Nakhon Si Ayutthaya */}
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
            </Marker>
            {/* Lamphun */}
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
            </Marker>
            {/* Lampang */}
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
            </Marker>
            {/* Phetchabun */}
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
            </Marker>
            {/* Sukhothai */}
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
            </Marker>
            {/* Uttaradit */}
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
            </Marker>
            {/* Chanthaburi */}
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
            </Marker>
            {/* Roi Et */}
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
            </Marker>
            {/* Tak */}
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
            </Marker>
            {/* Nong Bua Lamphu */}
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
            </Marker>
            {/* Nong Khai */}
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
            </Marker>
            {/* Chaiyaphum */}
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
            </Marker>
            {/* Phayao */}
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
            </Marker>
            {/* Kalasin */}
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
            </Marker>
            {/* Nakhon Nayok */}
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
            </Marker>
            {/* Amnat Charoen */}
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
            </Marker>
            {/* Phang Nga */}
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
            </Marker>
            {/* Lopburi */}
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
            </Marker>
            {/* Nakhon Phanom" */}
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
            </Marker>
            {/* Phetchaburi */}
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
            </Marker>
            {/* Phrae */}
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
            </Marker>
            {/* Yasothon */}
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
            </Marker>
            {/* Uthai Thani */}
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
            </Marker>
            {/* Samut Songkhram */}
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
            </Marker>
            {/* Sakon Nakhon */}
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
            </Marker>
            {/* Maha Sarakham */}
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
            </Marker>
          </MapView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
});
