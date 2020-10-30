import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Linking } from "react-native";
import datas from "../data/data_agency";
import Agency from "./Agency";

class MainAgency extends Component {
  state = {
    datas: datas,
  };

  getAgencyData() {
    return this.state.datas.map((data) => {
      return <Agency detail={data} key={data.id} />;
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
          {this.getAgencyData()}
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

export default MainAgency;
