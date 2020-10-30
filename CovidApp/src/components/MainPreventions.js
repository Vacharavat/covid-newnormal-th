import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import datas from "../data/data_preventions";
import Preventions from "./Preventions";

class MainPreventions extends Component {
  state = {
    datas: datas,
  };
  getPreventionsData() {
    return this.state.datas.map((data) => {
      return <Preventions detail={data} key={data.id} />;
    });
  }

  render() {
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
          {this.getPreventionsData()}
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
export default MainPreventions;
