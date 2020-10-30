import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Linking } from "react-native";
import datas from "../data/data_emergency";
import Emergency from "./Emergency";

class MainEmergency extends Component {
  state = {
    datas: datas,
  };

  getEmergencyData() {
    return this.state.datas.map((data) => {
      return <Emergency detail={data} key={data.id} />;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
        //   contentContainerStyle={{ width: "100" }}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
        >
          {this.getEmergencyData()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainEmergency;
