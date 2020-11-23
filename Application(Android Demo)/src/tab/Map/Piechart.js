import React, { Component } from "react";
import {Text,View,Dimensions,} from "react-native";
import { CustomHeader } from "../../index";
import Color from "../../constants/colors";
import Status from "../../Status";
import axios from "axios";
import {PieChart} from "react-native-chart-kit";
import { Card} from "react-native-elements";

export class Piechart extends Component {

  state = {
    confirmed: "0",
    recovered: "0",
    hospitalized: "0",
    death: "0",
    newconfirmed: "0",
    newrecovered: "0",
    newhospitalized: "0",
    newdeath: "0",
    date: "0",
  };

  calculateSum = () => {
    const { firstValue, secondValue } = this.state;

    this.setState({
      sum: Number(firstValue) + Number(secondValue),
    });
  };

  componentDidMount() {
    axios
      .get("https://covid19.th-stat.com/api/open/today")
      .then((res) =>
        this.setState({
          confirmed: res.data.Confirmed,
          recovered: res.data.Recovered,
          hospitalized: res.data.Hospitalized,
          death: res.data.Deaths,
          newconfirmed: res.data.NewConfirmed,
          newrecovered: res.data.NewRecovered,
          newhospitalized: res.data.NewHospitalized,
          newdeath: res.data.NewDeaths,
          date: res.data.UpdateDate,
        })
      )
      .catch((er) => console.log(er.messagge));
  }

  render() {
    var con = Math.floor((this.state.recovered / this.state.confirmed) * 100);
    var hos = Math.round(
      (this.state.hospitalized / this.state.confirmed) * 100
    );
    var dea = Math.round((this.state.death / this.state.confirmed) * 100);
    return (
      <Card>
        <Card.Title>
          THAILAND STATISTICS
          {/* {"\n"}{this.state.confirmed} คน */}
        </Card.Title>
        <Card.Divider />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <PieChart
            data={[
              {
                name: "คน",
                population: Number(this.state.recovered),
                color: Color.green,
                legendFontColor: "#7F7F7F",
                // legendFontSize: 15,
              },
              {
                name: "คน",
                population: Number(this.state.hospitalized),
                color: Color.skyblue,
                legendFontColor: "#7F7F7F",
                // legendFontSize: 15,
              },
              {
                name: "คน",
                population: Number(this.state.death),
                color: Color.red,
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
        <Card.Divider />

        <View style={{ alignItems: "center" }}>
          <View
            style={{
              height: 50,
              width: "100%",
              backgroundColor: "rgb(242,242,247)",
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 15,
                  color: Color.green,
                  fontWeight: "bold",
                }}
              >
                Recovered
              </Text>
            </View>
            <View style={{ flex: 0.2, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "right",
                  paddingRight: 10,
                }}
              >
                {con} %
              </Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center", paddingTop: 10 }}>
          <View
            style={{
              height: 50,
              width: "100%",
              backgroundColor: "rgb(242,242,247)",
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 15,
                  color: Color.skyblue,
                  fontWeight: "bold",
                }}
              >
                Hospitalized
              </Text>
            </View>
            <View style={{ flex: 0.2, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "right",
                  paddingRight: 10,
                }}
              >
                {hos} %
              </Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center", paddingTop: 10 }}>
          <View
            style={{
              height: 50,
              width: "100%",
              backgroundColor: "rgb(242,242,247)",
              borderRadius: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 0.8, justifyContent: "center" }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 15,
                  color: Color.red,
                  fontWeight: "bold",
                }}
              >
                Deaths
              </Text>
            </View>
            <View style={{ flex: 0.2, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "right",
                  paddingRight: 10,
                }}
              >
                {dea} %
              </Text>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

