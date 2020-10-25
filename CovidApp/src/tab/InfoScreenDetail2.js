import React, { Component } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { CustomHeader } from "../index";
import Color from "../constants/colors";
import { IMAGE } from "../constants/image";
import { Card } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import Status from "../Status";
export class InfoScreenDetail2 extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="COVID AGENCY" navigation={this.props.navigation} />

        <ScrollView>
          <Card>
            <Card.Title>กระทรวงมหาดไทย (ศบค.มท.)</Card.Title>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={IMAGE.IMAGE_AGENCY1}
                style={{ width: 100, height: 100, marginBottom: 10 }}
              />
            </View>
            <Card.Divider />
            <Text
              onPress={() => {
                Linking.openURL("http://www.moicovid.com/");
              }}
              style={{
                color: Color.gray,
                fontWeight: "bold",
                padding: 1,
                fontSize: 14,
              }}
            >
              {" "}
              <Entypo name="link" size={14} color="black" />{" "}
              http://www.moicovid.com/
            </Text>
          </Card>

          <Card>
            <Card.Title>กระทรวงสาธารณสุข</Card.Title>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={IMAGE.IMAGE_AGENCY2}
                style={{ width: 100, height: 100, marginBottom: 10 }}
              />
            </View>
            <Card.Divider />
            <Text
              onPress={() => {
                Linking.openURL("https://www3.dmsc.moph.go.th/");
              }}
              style={{
                color: Color.gray,
                fontWeight: "bold",
                padding: 1,
                fontSize: 14,
              }}
            >
              {" "}
              <Entypo name="link" size={14} color="black" />{" "}
              https://www3.dmsc.moph.go.th/
            </Text>
          </Card>

          <Card>
            <Card.Title>World Health Organization (WHO)</Card.Title>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={IMAGE.IMAGE_AGENCY3}
                style={{ width: 100, height: 100, marginBottom: 10 }}
              />
            </View>
            <Card.Divider />
            <Text
              onPress={() => {
                Linking.openURL("https://www.who.int/");
              }}
              style={{
                color: Color.gray,
                fontWeight: "bold",
                padding: 1,
                fontSize: 14,
              }}
            >
              {" "}
              <Entypo name="link" size={14} color="black" />{" "}
              https://www.who.int/
            </Text>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  //{/* Background Color */}
  topblock: {
    flex: 0.35,
    backgroundColor: Color.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
  },
  //{/* Statistic block1 */}
  bigstatblock: {
    top: -30,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  //{/* Substatistic block1 */}
  statblock: {
    backgroundColor: "white",
    width: "90%",
    height: 150,
    // marginLeft: '5%',
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 20,
  },
});
