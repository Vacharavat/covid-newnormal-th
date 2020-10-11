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

export class CoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
        <CustomHeader
          title="COVID-19 คืออะไร"
          navigation={this.props.navigation}
        />

        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{flex: 0.4}}>
            <Image
              style={{width: 500, height: 700, flex: 1000}}
              source={IMAGE.IMAGE_COVIDDETAIL}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <View style={styles.box}>
              <Text style={styles.detail}>
                โรคโควิด 19 คือ
                โรคติดต่อซึ่งเกิดจากไวรัสโคโรนาชนิดที่มีการค้นพบล่าสุด
              </Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.detail}>
                ไวรัสและโรคอุบัติใหม่นี้ไม่เป็นที่รู้จักเลยก่อนที่จะมีการระบาดในเมืองอู่ฮั่น
                ประเทซจีนในเดือนธันวาปี 2019
              </Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.detail}>
                ขณะนี้โรคโควิด 19 มีการระบาดใหญ่ไปทั่วโลก
                ส่งผลกระทบแก่หลายประเทศทั่วโรค
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgb(242,242,247)',
    width: 350,
    height: 110,
    margin: 13,
    borderRadius: 10,
    top: 30,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  detail: {
    textAlign:'center',
    margin:10,
    color: Color.darkpurple,
    fontWeight: 'bold',
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
