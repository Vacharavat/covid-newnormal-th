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

export class OriginCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
        <CustomHeader
          title="ต้นกำเนิดของไวรัส"
          navigation={this.props.navigation}
        />
        <ScrollView
          horizontal
          style={{marginHorizontal: 20}}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.box}>
              <View style={styles.boximage}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  source={IMAGE.IMAGE_ORIGIN1}
                  //resizeMode="contain"
                />
              </View>
              <View style={styles.boxdetail}>
                <Text style={styles.headtext}>
              ต้นตอของไวรัสน่าจะมาจากการท่ีไวรัส{"\n"}จากสัตว์ตัวกลางระบาดมาสู่คน
                </Text>
                <Text style={styles.detail}>{'      '}ไวรัสโคโรนาสายพันธุ์ใหม่มีความใกล้ชิดกับลักษณะทางพันธุกรรมของไวรัสซาร์สและไวรัสเมอร์สที่มาจากค้างคาวมากที่สุด 
                {"\n"}{"\n"}{'      '}ก่อนที่จะพบว่า ลักษณะตัวรับของเชื้อไวรัสที่กลายพันธ์ุนี้จะมีความคล้ายคลึงกับเชื้อไวรัสโคโรนาที่พบในงู จึงมีความเป็นไปได้ที่งู โดยเฉพาะงูเห่าจีน อาจเป็นสัตว์ตัวกลางที่ส่งต่อเชื้อไวรัสโคโรนาที่เกิดการกลายพันธ์ุจากค้างคาวเข้าสู่ร่างกายมนุษย์</Text>
              </View>
              <View style={styles.detailpage}>
              <Text style={styles.pagetext}>1 OF 4</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.boximage}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  source={IMAGE.IMAGE_ORIGIN2}
                  //resizeMode="contain"
                />
              </View>
              <View style={styles.boxdetail}>
              <Text style={styles.headtext}>
              ผู้ป่วยรายแรกเท่าที่ทราบกัน
                </Text>
                <Text style={styles.detail}>
                {'      '}ผู้ป่วยรายแรกเท่าที่ทราบกัน เริ่มมีอาการตั้งแต่วันที่ 1 ธันวาคม และไม่มีความเชื่อมโยงกับตลาดต้องสงสัย
                ในเมืองอู่ฮั่น ประเทศจีน {"\n"}{"\n"}{'      '}แต่ผู้ป่วยหลายรายอาจมีมาตั้งแต่ช่วงกลางเดือนพฤศจิกายนหรือก่อนหน้านั้น
                </Text>
              </View>
              <View style={styles.detailpage}>
              <Text style={styles.pagetext}>2 OF 4</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.boximage}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  source={IMAGE.IMAGE_ORIGIN3}
                  //resizeMode="contain"
                />
              </View>
              <View style={styles.boxdetail}>
              <Text style={styles.headtext}>
              การระบาด
                </Text>
                <Text style={styles.detail}>
                {'      '}ผู้ป่วยรายแรกเท่าที่ทราบกันขณะนี้โรคโควิด 19 มีการระบาดใหญ่ไปทั่วโลก
                ส่งผลกระทบแก่หลายประเทศทั่วโรค
                </Text>
              </View>
              <View style={styles.detailpage}>
              <Text style={styles.pagetext}>3 OF 4</Text>
              </View>
            </View>

            <View style={styles.box}>
              <View style={styles.boximage}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  source={IMAGE.IMAGE_ORIGIN4}
                  //resizeMode="contain"
                />
              </View>
              <View style={styles.boxdetail}>
              <Text style={styles.headtext}>
              ต้นกำเนิด
                </Text>
                <Text style={styles.detail}>
                {'      '}ตลอดอาจเป็นต้นกำเนิดของไวรัส หรืออาจมีบทบาทในการขนานวงของการระบาดในระยะเริ่มแรก
                </Text>
              </View>
              <View style={styles.detailpage}>
              <Text style={styles.pagetext}>4 OF 4</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'rgb(242,242,247)',
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
    backgroundColor: 'skyblue',
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
