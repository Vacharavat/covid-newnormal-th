import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import datas from "../data/data_symptomps";
import SymptompsDetail from "./SymptompsDetail";

class MainSymptompsDetail extends Component {
  state = {
    datas: datas,
  };

  getSymptompsDetailData() {
    return this.state.datas.map((data) => {
      return <SymptompsDetail detail={data} key={data.id} />;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          // contentContainerStyle={{ width: "100" }}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
        >
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

export default MainSymptompsDetail;
