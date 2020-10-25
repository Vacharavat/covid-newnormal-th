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


export class EventCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Color.primary}}>
        <Status />
        <CustomHeader
          title="เหตุการณ์ระบาด"
          navigation={this.props.navigation}
        />
        <ScrollView>
        <Card>
            <Card.Title>เหตุการณ์ระบาดเป็นวงกว้าง</Card.Title>
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
                source={IMAGE.IMAGE_EVENT}
                style={{ width: "90%", height: 200 }}
              />
            </View>
            <Text style={styles.detail}>
            {'      '}
                เหตุการณ์ระบาดเป็นวงกว้างเกิดเมื่อคนหนึ่งคนแพร่เชื้อไวรัสไปสู่คนกลุ่มใหญ่ผิดปกติ
                {"\n"}{'      '}สถานการณ์ที่จะทวีความรุนแรงของการระบาด{"\n"}เป็นวงกว้างรวมถึง ดังนี้{"\n"}
                {"\n"}{'      '}1. การชุมนุมขนาดใหญ่{"\n"}
                {'      '}2. ประชาการผู้สูงอายุ{"\n"}
                {'      '}3. ประชาการไร้พื้นฐาน{"\n"}
                {'      '}4. การสัมผัสโรคจากต่างประเทศ{"\n"}
                {'      '}5. ความหนาแน่นของเขตเมือง{"\n"}
                {'      '}6. ระบบสาธารณสุขไม่เข็มแข็ง{"\n"}
                {'      '}7. รัฐบาลขาดความโปร่งใส{"\n"}
                {'      '}8. สื่อขาดเสรีภาพ{"\n"}
            </Text>
          </Card>

          </ScrollView>     
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    backgroundColor: 'rgb(242,242,247)',
    width: '90%',
    height: '90%',
    margin: 10,
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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headtext: {
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
