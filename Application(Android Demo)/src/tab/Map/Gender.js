import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Color from "../../constants/colors";
import axios from "axios";
import { Card } from "react-native-elements";
import { PieChart } from "react-native-chart-kit";
import { FontAwesome } from "@expo/vector-icons";

export class Gender extends Component {
  state = {
    male: "0",
    female: "0",
  };
  componentDidMount() {
    axios
      .get("https://covid19.th-stat.com/api/open/cases/sum")
      .then((res) =>
        this.setState({
          male: res.data.Gender.Male,
          female: res.data.Gender.Female,
        })
      )
      // console.log(res.data.Province.Bangkok))
      .catch((er) => console.log(er.messagge));
  }

  render() {
    var total = this.state.male + this.state.female;
    var mal = Math.round((this.state.male / total) * 100);
    var femal = Math.round((this.state.female / total) * 100);
    return (
      <Card>
        <Card.Title>GENDER THAILAND STATISTICS</Card.Title>
        <Card.Divider />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <PieChart
            data={[
              {
                name: "Male",
                population: Number(this.state.male),
                color: "rgb(10,132,255)",
                legendFontColor: "#7F7F7F",
                // legendFontSize: 15,
              },
              {
                name: "Female",
                population: Number(this.state.female),
                color: "rgb(191,90,242)",
                legendFontColor: "#7F7F7F",
                // legendFontSize: 15,
              },
            ]}
            width={Dimensions.get("window").width - 60}
            height={175}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <View
            style={{
              flex: 0.5,
              height: 50,
              width: "100%",
              backgroundColor: "rgb(242,242,247)",
              margin: 5,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                paddingTop: 5,
                paddingLeft: 10,
                fontSize: 14,
                color: "rgb(10,132,255)",
                fontWeight: "bold",
              }}
            >
              <FontAwesome name="male" size={14} /> MALE
            </Text>
            <Text
              style={{
                paddingTop: 5,
                paddingLeft: 10,
                fontSize: 14,
                color: Color.gray,
              }}
            >
              {/* {Intl.NumberFormat('en-IN', { maximumSignificantDigits: 20 }).format(this.state.male)} คน ({mal}%) */}
              <Text>{Number(this.state.male).toLocaleString('en')} คน ({mal}%)</Text>
            </Text>
          </View>
          <View
            style={{
              flex: 0.5,
              height: 50,
              width: "100%",
              backgroundColor: "rgb(242,242,247)",
              margin: 5,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                paddingTop: 5,
                paddingLeft: 10,
                fontSize: 14,
                color: "rgb(191,90,242)",
                fontWeight: "bold",
              }}
            >
              <FontAwesome name="female" size={14} /> FEMALE
            </Text>
            <Text
              style={{
                paddingTop: 5,
                paddingLeft: 10,
                fontSize: 14,
                color: Color.gray,
              }}
            >
              {/* {Intl.NumberFormat('en-IN', { maximumSignificantDigits: 20 }).format(this.state.female)} คน ({femal}%) */}
              <Text>{Number(this.state.female).toLocaleString('en')} คน ({femal}%)</Text>
            </Text>
          </View>
        </View>
      </Card>
    );
  }
}
