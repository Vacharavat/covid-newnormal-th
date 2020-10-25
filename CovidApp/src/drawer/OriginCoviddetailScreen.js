import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {CustomHeader} from '../index';
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';
import { Card } from "react-native-elements";
import Status from '../Status'


export class OriginCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
        <Status />
        <CustomHeader
          title="ต้นกำเนิดของไวรัส"
          navigation={this.props.navigation}
        />
        <ScrollView>
        <Card>
            <Card.Title>ต้นตอของไวรัสน่าจะมาจากการท่ีไวรัสจากสัตว์ตัวกลางระบาดมาสู่คน</Card.Title>
            <Card.Divider />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={IMAGE.IMAGE_ORIGIN1}
                style={{ width: 300, height: 200 }}
              />
            </View>
            <Text style={styles.detail}>
            ไวรัสโคโรนาสายพันธุ์ใหม่มีความใกล้ชิดกับลักษณะทางพันธุกรรมของไวรัสซาร์สและไวรัสเมอร์สที่มาจากค้างคาวมากที่สุด 
                {"\n"}ก่อนที่จะพบว่า ลักษณะตัวรับของเชื้อไวรัสที่กลายพันธ์ุนี้จะมีความคล้ายคลึงกับเชื้อไวรัสโคโรนาที่พบในงู จึงมีความเป็นไปได้ที่งู โดยเฉพาะงูเห่าจีน อาจเป็นสัตว์ตัวกลางที่ส่งต่อเชื้อไวรัสโคโรนาที่เกิดการกลายพันธ์ุจากค้างคาวเข้าสู่ร่างกายมนุษย์
            </Text>
          </Card>

          <Card>
            <Card.Title>ผู้ป่วยรายแรกเท่าที่ทราบกัน</Card.Title>
            <Card.Divider />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={IMAGE.IMAGE_ORIGIN2}
                style={{ width: 300, height: 200 }}
              />
            </View>
            <Text style={styles.detail}>
            ผู้ป่วยรายแรกเท่าที่ทราบกัน เริ่มมีอาการตั้งแต่วันที่ 1 ธันวาคม และไม่มีความเชื่อมโยงกับตลาดต้องสงสัย
                ในเมืองอู่ฮั่น ประเทศจีน {"\n"}{"\n"}{'      '}แต่ผู้ป่วยหลายรายอาจมีมาตั้งแต่ช่วงกลางเดือนพฤศจิกายนหรือก่อนหน้านั้น
            </Text>
          </Card>

          <Card>
            <Card.Title>การระบาด</Card.Title>
            <Card.Divider />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={IMAGE.IMAGE_ORIGIN3}
                style={{ width: 300, height: 200 }}
              />
            </View>
            <Text style={styles.detail}>
            ผู้ป่วยรายแรกเท่าที่ทราบกันขณะนี้โรคโควิด 19 มีการระบาดใหญ่ไปทั่วโลก
                ส่งผลกระทบแก่หลายประเทศทั่วโรค
            </Text>
          </Card>

          <Card>
            <Card.Title>ต้นกำเนิด</Card.Title>
            <Card.Divider />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={IMAGE.IMAGE_ORIGIN4}
                style={{ width: 300, height: 200 }}
              />
            </View>
            <Text style={styles.detail}>
            ตลอดอาจเป็นต้นกำเนิดของไวรัส หรืออาจมีบทบาทในการขนานวงของการระบาดในระยะเริ่มแรก
            </Text>
          </Card>
      
      
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    //backgroundColor: 'rgb(242,242,247)',
    width: 374,
    height: '90%',
    //margin:10,
    borderRadius: 10,
    top: 10,
    alignItems: 'center',
  },

  boximage: {
    width: '100%',
    flex: 0.4,
    //backgroundColor: 'skyblue',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  boxdetail: {
    width: '100%',
    flex: 0.6,
    //justifyContent: 'center',
    backgroundColor: Color.lightgray,
 
  },
  detailpage:{
    width: '100%',
    backgroundColor: Color.lightgray,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  pagetext:{
    textAlign: 'center',
    margin: 10,
    color: Color.gray,
    fontWeight: 'bold',
    fontSize: 16,
    color: Color.darkpurple,
  },
  headtext:{
    fontWeight: 'bold',
    fontSize: 16,
    color: Color.darkpurple,
    margin: 10,
    textAlign: 'center',
  },
  detail: {
    //textAlign: 'center',
    margin: 10,
    color: Color.gray,
    //fontWeight: 'bold',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
