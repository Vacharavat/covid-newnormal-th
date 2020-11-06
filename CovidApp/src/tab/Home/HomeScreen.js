import React, {Component} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import {CustomHeader} from '../../index';
import axios from 'axios';
import Status from '../../Status'
import { AntDesign } from '@expo/vector-icons';
import HomeStyles from "../../styles/tab/homestyle";
import MainPreventions from "../../components/MainPreventions";
import MainSymptomps from "../../components/MainSymptomps";
export class HomeScreen extends Component {
  
  state = {
    confirmed : '0',
    recovered : '0',
    hospitalized : '0',
    death :'0',
    newconfirmed:'0',
    newrecovered:'0',
    newhospitalized:'0',
    newdeath:'0',
    date :'0'
  }

  componentDidMount(){
    axios.get('https://covid19.th-stat.com/api/open/today')
      .then((res) => this.setState({
        confirmed: res.data.Confirmed,
        recovered: res.data.Recovered,
        hospitalized : res.data.Hospitalized,
        death : res.data.Deaths,
        newconfirmed : res.data.NewConfirmed,
        newrecovered : res.data.NewRecovered,
        newhospitalized : res.data.NewHospitalized,
        newdeath : res.data.NewDeaths,
        date : res.data.UpdateDate
      }))
      .catch((er) => console.log(er.messagge))
  }
  render() {
    return (
      <SafeAreaView style={HomeStyles.safeareaview}>
        <Status />
        <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
        <View style={HomeStyles.container}>
        <ScrollView>
        {/* Top Page */}
          <View style={HomeStyles.topblock}>
            <Text style={HomeStyles.welcome}>WELCOME TO</Text>
            <Text style={HomeStyles.txtcovid}>COVID-19</Text>
            <Text style={HomeStyles.txtsubcovid}>STATISTICS</Text>
            {/* Block and More */}
            <View style={HomeStyles.container1}>
              <View style={{flex: 3.5}}>
                <Text style={HomeStyles.txtupdate}>Update : {this.state.date}</Text>
              </View>
              {/* Button More */}
              <View style={{flex: 1}}>
                <TouchableOpacity style={{paddingLeft:10}} onPress={() => this.props.navigation.navigate('HomeDetail')}>
                  <Text style={HomeStyles.txtviewall}>View All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Statistic block1 */}
          <View style={HomeStyles.bigstatblock}>
            {/* Comfirm Block */}
            <View style={HomeStyles.statblock}>
              <Text style={HomeStyles.txtconfirm}>Confirmed</Text>
              <Text style={HomeStyles.txtstats}>{this.state.confirmed}</Text>
              <Text style={HomeStyles.subtxtstats}>(+{this.state.newconfirmed})</Text>
            </View>
            {/* Recovered Block */}
            <View style={HomeStyles.statblock}>
              <Text style={HomeStyles.txtrecovered}>Recovered</Text>
              <Text style={HomeStyles.txtstats}>{this.state.recovered}</Text>
              <Text style={HomeStyles.subtxtstats}>(+{this.state.newrecovered})</Text>
            </View>
          </View>
          {/* Statistic block2 */}
          <View style={HomeStyles.bigstatblock}>
            {/* Hopitalized Block */}
            <View style={HomeStyles.statblock}>
              <Text style={HomeStyles.txtHospitalized}>Hospitalized</Text>
              <Text style={HomeStyles.txtstats}>{this.state.hospitalized}</Text>
              <Text style={HomeStyles.subtxtstats}>({this.state.newhospitalized})</Text>
            </View>
            {/* Deaths Block */}
            <View style={HomeStyles.statblock}>
              <Text style={HomeStyles.txtDeath}>Deaths</Text>
              <Text style={HomeStyles.txtstats}>{this.state.death}</Text>
              <Text style={HomeStyles.subtxtstats}>(+{this.state.newdeath})</Text>
            </View>
          </View>
          {/* Symptomps block */}
          <View style={HomeStyles.symtompsblock}>
            {/* Block and More */}
            <View style={{flexDirection:'row', flex:0.7, justifyContent:'center',}}>
              {/* Name */}
              <View style={{flex: 3.5}}>
                <Text style={HomeStyles.headtitle}>Symptomps</Text>
              </View>
            </View>
            {/* Detail Symtomps */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 10}}>
              <View style={{flexDirection:'row'}}>
              <MainSymptomps />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SymptompsScreenDetail')}>
                <View style={HomeStyles.subdetail2}>
                    <View style={HomeStyles.imageblock}>
                    <AntDesign name="rightcircleo" size={40} color="white" />
                    </View>
                    <View style={HomeStyles.subimageblock}>
                      <Text style={HomeStyles.subimagetext}>More Details</Text>
                    </View>
                </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          {/* Preventions block */}
          <View style={HomeStyles.preventionsblock}>
            <View style={{flexDirection:'row', flex:0.7, justifyContent:'center',}}>
              <View style={{flex: 3.5}}>
                <Text style={HomeStyles.headtitle}>Preventions</Text>
              </View>
            </View>
            {/* Detail Prevention */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 10}}>
              <View style={{flexDirection: 'row'}}>
                <MainPreventions/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PreventionsScreenDetail')}>
                <View style={HomeStyles.subdetail2}>
                    <View style={HomeStyles.imageblock}>
                    <AntDesign name="rightcircleo" size={40} color="white" />
                    </View>
                    <View style={HomeStyles.subimageblock}>
                      <Text style={HomeStyles.subimagetext}>More Details</Text>
                    </View>
                </View>
                </TouchableOpacity>    
              </View>
            </ScrollView>
          </View>
        </ScrollView>
       </View>
      </SafeAreaView>
    );
  }
}