import React, {Component} from 'react';
import {Text, View, SafeAreaView, Image,ScrollView,} from 'react-native';
import {CustomHeader} from '../index';
import {IMAGE} from '../constants/image';
import { Card } from "react-native-elements";
import Status from '../Status'
import DrawerStyles from "../styles/drawer/drawerstyle"

export class EventCoviddetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={DrawerStyles.safeview}>
        <Status />
        <CustomHeader title="Detail" navigation={this.props.navigation}/>
          <View style={DrawerStyles.container}>
            <ScrollView>
            <View style={DrawerStyles.topblock}>
              <Text style={DrawerStyles.toptext}>เหตุการณ์ระบาดเป็นวงกว้าง</Text>
            </View>
            <Card>
            <View style={DrawerStyles.viewimage}>
              <Image source={IMAGE.IMAGE_EVENT} style={{ width: 350, height: 200 }}/>
            </View>
          </Card>
            <View style={DrawerStyles.block}>
              <View style={DrawerStyles.detailbox1}>
            <Text style={DrawerStyles.subdetailbox}>
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
              </View>
            </View>
            </ScrollView>
          </View>
      </SafeAreaView>
    );
  }
}

