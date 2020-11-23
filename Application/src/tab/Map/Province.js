import React, { Component } from "react";
import { Text, View, Dimensions} from "react-native";
import Color from "../../constants/colors";
import axios from "axios";
import { Card } from "react-native-elements";
import { BarChart } from "react-native-chart-kit";
import 'intl';
import 'intl/locale-data/jsonp/en';
export class Province extends Component {
  state = {
    bangkok: "0",
    chonburi: "0",
    phuket: "0",
  };
  componentDidMount() {
    axios
      .get("https://covid19.th-stat.com/api/open/cases/sum")
      .then((res) =>
        this.setState({
          bangkok: res.data.Province.Bangkok,
          chonburi: res.data.Province.Chonburi,
          phuket: res.data.Province.Phuket,

        })
      )
      // console.log(res.data.Province.Bangkok))
      .catch((er) => console.log(er.messagge));
  }

  render() {

    return (
      <Card>
        <Card.Title>TOP 3 THAILAND</Card.Title>

        <Card.Divider />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <BarChart
            data={{
              labels: ["BANGKOK", "CHONBURI", "PHUKET"],
              datasets: [
                {
                  data: [
                    this.state.bangkok,
                    this.state.chonburi,
                    this.state.phuket,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width-60}
            height={180}
            // yAxisLabel={'Rs'}
            yAxisSuffix=" คน"
            chartConfig={{
              backgroundColor: "#1cc910",
              backgroundGradientFrom: Color.primary,
              backgroundGradientTo: "#efefef",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 5,
            }}
          />
        </View>
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
                BANGKOK
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
                {Number(this.state.bangkok).toLocaleString('en')} คน
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
                  color: Color.primary,
                  fontWeight: "bold",
                }}
              >
                CHONBURI
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
                {Number(this.state.chonburi).toLocaleString('en')} คน
              </Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center", paddingTop: 10, paddingBottom:10 }}>
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
                PHUKET
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
                {Number(this.state.phuket).toLocaleString('en')} คน
              </Text>
            </View>
          </View>
        </View>
      </Card>
      
    );
  }
}
