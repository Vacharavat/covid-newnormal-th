import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import datas2 from "../data/data_symptomps";
import SymptompsDetail from "./SymptompsDetail";

export class MainSymptompsDetail extends Component {
  state = {
    datas2: datas2,
  };
  getSymptompsDetailData() {
    return this.state.datas2.map((data) => {
      return <SymptompsDetail detail={data} key={data.id} />;
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} style={styles.container}>
          {this.getSymptompsDetailData()}
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

