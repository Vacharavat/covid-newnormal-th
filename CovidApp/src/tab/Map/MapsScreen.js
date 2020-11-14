import React, { Component } from "react";
import {SafeAreaView, View, Text, Image,} from "react-native";
import { CustomHeader } from "../../index";
import Status from "../../Status";
import MapView, { Marker, Callout } from "react-native-maps";
import Color from "../../constants/colors";
import axios from "axios";
import { FontAwesome5, Ionicons, FontAwesome } from "@expo/vector-icons";
import datas from "../../data/data_map";
import data2 from "../../data/data_hospital";
import MapStyles from "../../styles/tab/mapstyles";
import { TouchableOpacity } from "react-native-gesture-handler";

export class MapsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "0",
      bangkok: "0",
      chonburi: "0",
      phuket: "0",
      samutprakan: "0",
      arraydata: [],
      arraydata2: [],
      datas: datas,
      data2: data2,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    await axios
      .get("https://covid19.th-stat.com/api/open/cases/sum")
      .then((res) => {
        var dataprovince = res.data.Province;
        var arrayProvince = [];
        for (var i in dataprovince)
          arrayProvince.push({ Province: i, Number: dataprovince[i] });
        this.setState({
          arraydata: arrayProvince,
        });
      })
      .catch((er) => console.log(er.messagge));
  } 

  renderprovince = () => {
      return this.state.arraydata.map((map) => {
        for(var i=0; i<this.state.datas.length; i++){
         
         if (map.Province == this.state.datas[i].province) {
          return (
            <Marker coordinate={{ latitude: this.state.datas[i].latitude, longitude: this.state.datas[i].longitude,}}>
              <Image source={this.state.datas[i].image} style={{ width: 80, height: 50 }} resizeMode="contain"/>
              <Callout tooltip>
                <View>
                  <View style={MapStyles.bubble}>
                    <Text style={MapStyles.name}>
                      <FontAwesome5 name="map-marker-alt" size={24} color="red" />{" "}
                      {this.state.datas[i].name}
                    </Text>
                    <Text>ยอดผู้ติดเชื้อทั้งหมด : {map.Number} คน</Text>
                  </View>
                  <View style={MapStyles.arrowBorder} />
                </View>
              </Callout>
            </Marker>
          );
        }}
      });
    };

    renderhospital = () => {
      return this.state.data2.map((map) => { 
        for(var i=0; i<this.state.data2.length; i++){ 
          if (map.id == this.state.data2[i].id) {
          return (
            <Marker
            coordinate={{ latitude: this.state.data2[i].latitude, longitude: this.state.data2[i].longitude, }}
            image={this.state.data2[i].logo}
            >
            
            <Callout tooltip>
              <View>
                <View style={MapStyles.bubble}>
                  <Text style={MapStyles.name}>
                    <FontAwesome5 name="map-marker-alt" size={24} color="red"/>{" "}{this.state.data2[i].name}
                  </Text>
                  <Text>ค่าตรวจเชื้อหาไวรัส : {this.state.data2[i].price}</Text>
                  <Text>สถานที่ : {this.state.data2[i].detail} </Text>
                  <View style={{ justifyContent: "center", alignItems: "center", margin: 10,}}>
                    <Image style={MapStyles.image} source={this.state.data2[i].image} />
                  </View>
                </View>
                <View style={MapStyles.arrowBorder} />
              </View>
            </Callout>
          </Marker>
          );
        }}
      });
    };


  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
        <Status />
        <CustomHeader title="Thailand" isHome={true} navigation={this.props.navigation}/>
        <View style={MapStyles.container}>
          <MapView style={MapStyles.map} initialRegion={{latitude: 13.75,longitude: 100.517,latitudeDelta: 1.5,longitudeDelta: 1.0,}}>
            {this.renderprovince()} 
            {this.renderhospital()}
          </MapView>


          <View style={{ flex: 0.07, flexDirection: "row", backgroundColor: "rgb(242,242,247)",}}>
            
            <View style={{flex: 0.5, justifyContent: "center", alignItems: "center",}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Report")}>
              <Text style={{ color: Color.gray, fontSize: 14, fontWeight: "600" }}><FontAwesome5 name="clipboard-list" size={15} color="black" /> รายงาน</Text>
              </TouchableOpacity >
            </View>
            <View style={{flex: 0.5, justifyContent: "center", alignItems: "center",}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("News")}>
              <Text style={{ color: Color.gray, fontSize: 14, fontWeight: "600" }}><FontAwesome name="newspaper-o" size={15} color="black" /> ข่าว</Text>
              </TouchableOpacity >
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}