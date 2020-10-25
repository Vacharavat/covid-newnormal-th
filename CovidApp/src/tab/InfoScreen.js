import React, { Component } from 'react';
import { Linking,Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView, StyleSheet,ImageBackground } from 'react-native';
import { CustomHeader } from '../index'
import Color from '../constants/colors';
import { Feather } from '@expo/vector-icons';
import Status from '../Status'
import { FontAwesome } from '@expo/vector-icons';
import { IMAGE } from "../constants/image";
export class InfoScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor:Color.primary}}>
              <Status />
              <CustomHeader title='Information' isHome={true} navigation={this.props.navigation}/>
              <ScrollView >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              // backgroundColor: Color.secondary,
            }}
          >
            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate("InfoDetail")}
            >
              <ImageBackground
                source={IMAGE.IMAGE_EMER}
                style={styles.image}
              />
              <View
                style={styles.detail}
              >
                <Text style={styles.text}>EMERGENCY CONTACTS</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate("InfoDetail2")}
            >
              <ImageBackground
                source={IMAGE.IMAGE_AGEN}
                style={styles.image}
              />
              <View
                style={styles.detail}
              >
                <Text style={styles.text}>COVID AGENCY</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate("InfoDetail3")}
            >
              <ImageBackground
                source={IMAGE.IMAGE_THCHANA}
                style={styles.image}
              />
              <View
                style={styles.detail}
              >
                <Text style={styles.text}>THAICHANA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
             
            </SafeAreaView>
          );
    }
}
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    position: "absolute",
    opacity:0.9
  },
  box: {
    height: 200,
    width: "90%",
    position: "relative",
    borderRadius: 20,
    margin: 10,
    alignItems: "stretch",
    
  },
  image: {
    height: 200,
    width: "100%",
    position: "absolute",
    opacity:0.9
  },
  detail:{
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.gray,
    top: 160,
  },
  text:{
    color : Color.white,
    fontSize: 15,
    fontWeight:'600'
  }

});