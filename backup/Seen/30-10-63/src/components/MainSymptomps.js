import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import datas from "../data/data_symptomps";
import Symptomps from "./Symptomps";

class MainSymptomps extends Component {
  state = {
    datas: datas,
  };

  getSymptompsData() {
    return this.state.datas.map((data) => {
      return <Symptomps detail={data} key={data.id} />;
    });
  }

  render() {
    return (
      <View>
        <ScrollView
          horizontal={true}
          // contentContainerStyle={{ width: "100" }}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
        >
          {this.getSymptompsData()}
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

export default MainSymptomps;
