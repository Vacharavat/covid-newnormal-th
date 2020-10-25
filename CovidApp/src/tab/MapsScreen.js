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
import MapView, { Circle, Marker, ProviderPropType } from "react-native-maps";
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
            <MapView.Marker
              coordinate={{ latitude: 13.732548, longitude: 100.536798 }}
              title={"รพ.จุฬาลงกรณ์"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 3,000 – 6,000 บาท"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.764352, longitude: 100.537155 }}
              title={"รพ.ราชวิถี"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 3,000 – 6,000 บาท"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.766049, longitude: 100.5267 }}
              title={"รพ.รามาธิบดี"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.783171, longitude: 100.534008 }}
              title={"รพ.ชัยยุทธ"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 7,500 บาท"}
            />
            <MapView.Marker
              coordinate={{ latitude: 13.682024, longitude: 100.474654 }}
              title={"รพ.บางปะกอก 9"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 7,900 – 10,000 บาท"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.770491, longitude: 100.540625 }}
              title={"รพ.พญาไท 2"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 6,100 บาท"}
            />
            <MapView.Marker
              coordinate={{ latitude: 13.722983, longitude: 100.464073 }}
              title={"รพ.พญาไท 3"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 6,100 บาท"}
            />
            <MapView.Marker
              coordinate={{ latitude: 13.963261, longitude: 100.621381 }}
              title={"รพ.แพทย์รังสิต"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 8,000 บาท"}
            />
            <MapView.Marker
              coordinate={{ latitude: 13.759907, longitude: 100.485862 }}
              title={"รพ.ศิริราชปิยมหาราชการุณย์"}
              image={hospital}
              description={"เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 9,900 บาท"}
            />
            <MapView.Marker
              coordinate={{ latitude: 13.853775, longitude: 100.52275 }}
              title={"สถาบันบำราศนราดูร"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 8,000-14,000 บาท"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.728271, longitude: 100.531252 }}
              title={"รพ.กรุงเทพคริสเตียน"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 – 10,000 บาท"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.753238, longitude: 100.570973 }}
              title={"รพ.พระราม 9"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 8,000 – 10,000 บาท"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.792221, longitude: 100.550129 }}
              title={"รพ.เปาโลเมโมเรียล"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.801892, longitude: 100.596289 }}
              title={"รพ.เปาโลเมโมเรียลโชคชัย 4"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.598271, longitude: 100.614676 }}
              title={"รพ.เปาโลเมโมเรียลสมุทรปราการ"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.985708, longitude: 100.619697 }}
              title={"รพ.เปาโลเมโมเรียลรังสิต"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.835377, longitude: 100.574222 }}
              title={"รพ.เปาโลเมโมเรียลเกษตร"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />
            <MapView.Marker
              coordinate={{ latitude: 13.608531, longitude: 100.551241 }}
              title={"รพ.เปาโลเมโมเรียลพระประแดง"}
              image={hospital}
              description={
                "เสียค่าใช้จ่ายในการตรวจเชื้อหาไวรัส ราคา 5,000 บาท ขึ้นไป"
              }
            />

            <MapView.Marker
              coordinate={{ latitude: 13.853437, longitude: 100.527139 }}
              title={"กระทรวงสาธารณะสุข"}
              image={department}
              description={"กรมควบคุมโรค 1422 | สายด่วนสุขภาพจิต 1323"}
            />
            <MapView.Marker
              coordinate={{ latitude: 13.851389, longitude: 100.503123 }}
              title={"สถาบันการแพทย์ฉุกเฉินแห่งชาติ"}
              image={department}
              description={"เบอร์โทรติดต่อ : 1669"}
            />
            <MapView.Marker
              coordinate={{ latitude: 13.851831, longitude: 100.52729 }}
              title={"ศูนย์บริการข้อมูลภาครัฐเพื่อประชาชน"}
              image={department}
              description={"เบอร์โทรติดต่อ : 1111"}
            />
            <MapView.Marker
              coordinate={{ latitude: 13.746339, longitude: 100.552297 }}
              title={"สายด่วนปรึกษาแพทย์โรงพยาบาลบำรุงราษฎร์"}
              image={department}
              description={"เบอร์โทรติดต่อ : 1378"}
            />
            {/* Bangkok */}
            <MapView.Marker
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
            </MapView.Marker>
            {/* Chonburi */}
            <MapView.Marker
              coordinate={{
                latitude: 13.361277,
                longitude: 100.984592,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Phuket */}
            <MapView.Marker
              coordinate={{ latitude: 7.88042, longitude: 98.39224 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Samut Prakan */}
            <MapView.Marker
              coordinate={{
                latitude: 13.599173,
                longitude: 100.599856,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Nonthaburi  */}
            <MapView.Marker
              coordinate={{
                latitude: 13.859122,
                longitude: 100.521644,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Yala  */}
            <MapView.Marker
              coordinate={{
                latitude: 6.541083,
                longitude: 101.280407,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Songkhla  */}
            <MapView.Marker
              coordinate={{
                latitude: 7.198745,
                longitude: 100.588915,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Pattani  */}
            <MapView.Marker
              coordinate={{
                latitude: 6.761878,
                longitude: 101.323773,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Narathiwat  */}
            <MapView.Marker
              coordinate={{
                latitude: 6.425636,
                longitude: 101.824988,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Chiang Mai  */}
            <MapView.Marker
              coordinate={{
                latitude: 18.788354,
                longitude: 98.985301,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Pathum Thani  */}
            <MapView.Marker
              coordinate={{
                latitude: 14.020824,
                longitude: 100.525035,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Chachoengsao */}
            <MapView.Marker
              coordinate={{
                latitude: 13.690419,
                longitude: 101.077963,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Nakhon Pathom */}
            <MapView.Marker
              coordinate={{
                latitude: 13.814048,
                longitude: 100.037293,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Chumphon */}
            <MapView.Marker
              coordinate={{
                latitude: 10.493049,
                longitude: 99.180022,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Krabi */}
            <MapView.Marker
              coordinate={{ latitude: 8.086124, longitude: 98.906339 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Nakhon Ratchasima */}
            <MapView.Marker
              coordinate={{
                latitude: 14.97386,
                longitude: 102.083651,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Surat Thani */}
            <MapView.Marker
              coordinate={{ latitude: 9.134195, longitude: 99.333423 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Satun */}
            <MapView.Marker
              coordinate={{
                latitude: 6.623824,
                longitude: 100.067373,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Prachuap Khiri Khan */}
            <MapView.Marker
              coordinate={{
                latitude: 11.812374,
                longitude: 99.797325,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Ubon Ratchathani*/}
            <MapView.Marker
              coordinate={{
                latitude: 15.244857,
                longitude: 104.847299,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Phatthalung */}
            <MapView.Marker
              coordinate={{
                latitude: 7.616689,
                longitude: 100.074025,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Samut Sakhon */}
            <MapView.Marker
              coordinate={{
                latitude: 13.547532,
                longitude: 100.274396,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Buriram */}
            <MapView.Marker
              coordinate={{
                latitude: 14.993004,
                longitude: 103.102919,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Nakhon Si Thammarat */}
            <MapView.Marker
              coordinate={{ latitude: 8.432493, longitude: 99.959904 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Udon Thani */}
            <MapView.Marker
              coordinate={{
                latitude: 17.364707,
                longitude: 102.815896,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Sa Kaeo */}
            <MapView.Marker
              coordinate={{
                latitude: 13.824036,
                longitude: 102.064585,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Prachinburi */}
            <MapView.Marker
              coordinate={{
                latitude: 14.050982,
                longitude: 101.372739,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Kanchanaburi */}
            <MapView.Marker
              coordinate={{ latitude: 14.022808, longitude: 99.53278 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Surin */}
            <MapView.Marker
              coordinate={{
                latitude: 14.882871,
                longitude: 103.493722,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Chiang Rai */}
            <MapView.Marker
              coordinate={{
                latitude: 19.907159,
                longitude: 99.830972,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Nakhon Sawan */}
            <MapView.Marker
              coordinate={{
                latitude: 15.693137,
                longitude: 100.122704,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Sisaket */}
            <MapView.Marker
              coordinate={{
                latitude: 15.118593,
                longitude: 104.321993,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Trang */}
            <MapView.Marker
              coordinate={{ latitude: 7.559362, longitude: 99.610995 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Ratchaburi */}
            <MapView.Marker
              coordinate={{
                latitude: 13.528292,
                longitude: 99.813415,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Phitsanulok */}
            <MapView.Marker
              coordinate={{
                latitude: 16.829811,
                longitude: 100.261469,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Khon Kaen */}
            <MapView.Marker
              coordinate={{
                latitude: 16.441857,
                longitude: 102.836028,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Suphan Buri */}
            <MapView.Marker
              coordinate={{
                latitude: 13.47442,
                longitude: 100.117714,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Rayong */}
            <MapView.Marker
              coordinate={{
                latitude: 12.683311,
                longitude: 101.237433,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Loei */}
            <MapView.Marker
              coordinate={{
                latitude: 17.486025,
                longitude: 101.722309,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Mae Hong Son */}
            <MapView.Marker
              coordinate={{
                latitude: 19.299022,
                longitude: 97.965621,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Saraburi */}
            <MapView.Marker
              coordinate={{
                latitude: 14.528885,
                longitude: 100.910102,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Mukdahan */}
            <MapView.Marker
              coordinate={{
                latitude: 16.542443,
                longitude: 104.720938,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Phra Nakhon Si Ayutthaya */}
            <MapView.Marker
              coordinate={{
                latitude: 14.358747,
                longitude: 100.571509,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Lamphun */}
            <MapView.Marker
              coordinate={{ latitude: 18.57444, longitude: 99.008739 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Lampang */}
            <MapView.Marker
              coordinate={{ latitude: 18.288857, longitude: 99.49089 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Phetchabun */}
            <MapView.Marker
              coordinate={{
                latitude: 16.419043,
                longitude: 101.15505,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Sukhothai */}
            <MapView.Marker
              coordinate={{
                latitude: 17.005552,
                longitude: 99.826344,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Uttaradit */}
            <MapView.Marker
              coordinate={{
                latitude: 17.620105,
                longitude: 100.099326,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Chanthaburi */}
            <MapView.Marker
              coordinate={{
                latitude: 12.611362,
                longitude: 102.103844,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Roi Et */}
            <MapView.Marker
              coordinate={{ latitude: 16.053797, longitude: 103.652 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Tak */}
            <MapView.Marker
              coordinate={{
                latitude: 16.883946,
                longitude: 99.125905,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Nong Bua Lamphu */}
            <MapView.Marker
              coordinate={{
                latitude: 17.222148,
                longitude: 102.426041,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Nong Khai */}
            <MapView.Marker
              coordinate={{
                latitude: 17.878274,
                longitude: 102.741329,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Chaiyaphum */}
            <MapView.Marker
              coordinate={{
                latitude: 15.806777,
                longitude: 102.031521,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Phayao */}
            <MapView.Marker
              coordinate={{ latitude: 19.16645, longitude: 99.90199 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Kalasin */}
            <MapView.Marker
              coordinate={{
                latitude: 16.43139,
                longitude: 103.505898,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Nakhon Nayok */}
            <MapView.Marker
              coordinate={{
                latitude: 14.206985,
                longitude: 101.213008,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Amnat Charoen */}
            <MapView.Marker
              coordinate={{
                latitude: 15.865647,
                longitude: 104.625724,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Phang Nga */}
            <MapView.Marker
              coordinate={{ latitude: 8.440713, longitude: 98.519354 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Lopburi */}
            <MapView.Marker
              coordinate={{ latitude: 14.7995, longitude: 100.65337 }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Nakhon Phanom" */}
            <MapView.Marker
              coordinate={{
                latitude: 17.392093,
                longitude: 104.769568,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Phetchaburi */}
            <MapView.Marker
              coordinate={{
                latitude: 13.111128,
                longitude: 99.939183,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Phrae */}
            <MapView.Marker
              coordinate={{
                latitude: 18.144553,
                longitude: 100.140284,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Yasothon */}
            <MapView.Marker
              coordinate={{
                latitude: 15.792629,
                longitude: 104.145279,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Uthai Thani */}
            <MapView.Marker
              coordinate={{
                latitude: 15.383526,
                longitude: 100.024635,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Samut Songkhram */}
            <MapView.Marker
              coordinate={{
                latitude: 13.40978,
                longitude: 100.002266,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Sakon Nakhon */}
            <MapView.Marker
              coordinate={{
                latitude: 17.154557,
                longitude: 104.134843,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
            {/* Maha Sarakham */}
            <MapView.Marker
              coordinate={{
                latitude: 16.185095,
                longitude: 103.302677,
              }}
              title={"กรุงเทพมหานคร"}
              description={"ยอดผู้ติดเชื้อทั้งหมด :  คน อัพเดตล่าสุดเมื่อ : "}
            >
              <Image
                source={IMAGE.IMAGE_ฺฺBKK}
                style={{ width: 100, height: 60 }}
                resizeMode="contain"
              />
            </MapView.Marker>
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
