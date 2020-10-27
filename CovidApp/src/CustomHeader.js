import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { IMAGE } from "./constants/image";
import Color from "./constants/colors";
import { Ionicons } from "@expo/vector-icons";

// const wait = (timeout) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, timeout);
//   });
// };

export class CustomHeader extends Component {
  render() {
    let { navigation, isHome, title } = this.props;

    // const [refreshing, setRefreshing] = this.setState(false);

    // const onRefresh = React.useCallback(() => {
    //   setRefreshing(true);

    //   wait(2000).then(() => setRefreshing(false));
    // }, []);

    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          {isHome ? (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{ width: 30, height: 30, marginLeft: 10 }}
                source={IMAGE.ICON_MENU}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={{ width: 20, height: 20, marginLeft: 10 }}
                source={IMAGE.ICON_BACK}
                resizeMode="contain"
              />
              <Text style={{ color: Color.white, fontWeight: "bold" }}>
                Back
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ flex: 1.5, justifyContent: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
              color: Color.white,
            }}
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
            right: 20,
          }}
        >
          <TouchableOpacity
            // refreshControl={
            //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            // }
          >
            <Ionicons name="ios-refresh" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
