import React, { Component } from "react";
import { Text, View } from "react-native";
import Color from "../../constants/colors";
import axios from "axios";
import { Card } from "react-native-elements";

export class GlobalReport extends Component {
  state = {
    confirmedglobal: "0",
    recoveredglobal: "0",
    deathglobal: "0",
    bangkok: "0",
  };

  componentDidMount() {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) =>
        this.setState({
          confirmedglobal: res.data.Global.TotalConfirmed,
          recoveredglobal: res.data.Global.TotalRecovered,
          deathglobal: res.data.Global.TotalDeaths,
        })
      )
      // console.log(res.data.Global.TotalConfirmed)),
      .catch((er) => console.log(er.messagge));
  }

  render() {
    return (
      <Card>
        <Card.Title>GLOBAL STATISTICS</Card.Title>

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
            <View style={{ flex: 0.6, justifyContent: "center" }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  color: Color.primary,
                  fontWeight: "bold",
                }}
              >
                Confirmed
              </Text>
            </View>
            <View style={{ flex: 0.4, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "right",
                  paddingRight: 10,
                }}
              >
                {Intl.NumberFormat('THB', { maximumSignificantDigits: 20 }).format(this.state.confirmedglobal)} คน
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
            <View style={{ flex: 0.6, justifyContent: "center" }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  color: Color.green,
                  fontWeight: "bold",
                }}
              >
                Recovered
              </Text>
            </View>
            <View style={{ flex: 0.4, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "right",
                  paddingRight: 10,
                }}
              >
                {Intl.NumberFormat('THB', { maximumSignificantDigits: 20 }).format(this.state.recoveredglobal)} คน
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
            <View style={{ flex: 0.6, justifyContent: "center" }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  color: Color.red,
                  fontWeight: "bold",
                }}
              >
                Deaths
              </Text>
            </View>
            <View style={{ flex: 0.4, justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  textAlign: "right",
                  paddingRight: 10,
                }}
              >
                {Intl.NumberFormat('THB', { maximumSignificantDigits: 20 }).format(this.state.deathglobal)} คน
              </Text>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

