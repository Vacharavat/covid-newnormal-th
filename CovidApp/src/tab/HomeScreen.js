import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image} from 'react-native';
import {CustomHeader} from '../index';
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';
import axios from 'axios';
import Status from '../Status'
import { AntDesign } from '@expo/vector-icons';
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
      <SafeAreaView style={{flex: 1 , backgroundColor:Color.primary}}>
        <Status />
        <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
        
        <View style={{flex:1,backgroundColor: Color.secondary,}}>
        <ScrollView>
        {/* Background Color */}
        {/* Top Page */}
          <View style={styles.topblock}>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15}}>WELCOME TO</Text>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, fontSize:23,}}>COVID-19</Text>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, fontSize:25,}}>STATISTICS</Text>
            
            {/* Block and More */}
            <View style={{flexDirection:'row', flex:0.3, justifyContent:'center',}}>
              <View style={{flex: 3.5}}>
                <Text style={{ color:Color.white, fontWeight:'bold', paddingLeft:15, paddingTop:5, fontSize:11,}}>Update : {this.state.date}</Text>
              </View>
              {/* Button More */}
              <View style={{flex: 1}}>
                <TouchableOpacity style={{paddingLeft:10}} onPress={() => this.props.navigation.navigate('HomeDetail')}>
                  <Text style={{top:5, color:Color.white, fontSize:15, textDecorationLine:'underline',right:0}}>View All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Statistic block1 */}
          <View style={styles.bigstatblock}>
            {/* Comfirm Block */}
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8}}>Confirmed</Text>
              <Text style={styles.txtstats}>{this.state.confirmed}</Text>
              <Text style={styles.subtxtstats}>(+{this.state.newconfirmed})</Text>
            </View>

            {/* Recovered Block */}
            <View style={styles.statblock}>
              <Text style={{color:Color.green, fontWeight:'bold', padding:8}}>Recovered</Text>
              <Text style={styles.txtstats}>{this.state.recovered}</Text>
              <Text style={styles.subtxtstats}>(+{this.state.newrecovered})</Text>
            </View>
          </View>

          {/* Statistic block2 */}
          <View style={styles.bigstatblock}>

            {/* Hopitalized Block */}
            <View style={styles.statblock}>
              <Text style={{color:Color.skyblue, fontWeight:'bold', padding:8}}>Hospitalized</Text>
              <Text style={styles.txtstats}>{this.state.hospitalized}</Text>
              <Text style={styles.subtxtstats}>(+{this.state.newhospitalized})</Text>
            </View>

            {/* Deaths Block */}
            <View style={styles.statblock}>
              <Text style={{color:Color.red, fontWeight:'bold', padding:8}}>Deaths</Text>
              <Text style={styles.txtstats}>{this.state.death}</Text>
              <Text style={styles.subtxtstats}>(+{this.state.newdeath})</Text>
            </View>
          </View>

          {/* Symptomps block */}
          <View style={styles.symtompsblock}>
            {/* Block and More */}
            <View style={{flexDirection:'row', flex:0.7, justifyContent:'center',}}>
              {/* Name */}
              <View style={{flex: 3.5}}>
                <Text style={styles.headtitle}>Symptomps</Text>
              </View>
              
              {/* Button */}
              {/* <View style={{flex: 1}}>
                <TouchableOpacity style={{paddingLeft:10}} onPress={() => this.props.navigation.navigate('SymptompsScreenDetail')}>
                  <Text style={styles.buttonmore}>More</Text>
                </TouchableOpacity>
              </View> */}
            </View>

            {/* Detail Symtomps */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 10}}>
              <View style={{flexDirection:'row'}}>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS1} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>Fever</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS3} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>Cough</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS2} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>Tired</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS4} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>Sore Throat</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS6} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>Runny Nose</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS5} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>Ache</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS8} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>Diarrhea</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS7} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>Blood-Thinged</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SymptompsScreenDetail')}>
                <View style={styles.subdetail2}>
                    <View style={styles.imageblock}>
                    <AntDesign name="rightcircleo" size={40} color="black" />
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>More Details</Text>
                    </View>
                </View>
                </TouchableOpacity>
              </View>
            </ScrollView>

          </View>

          {/* Preventions block */}
          <View style={styles.preventionsblock}>
            <View style={{flexDirection:'row', flex:0.7, justifyContent:'center',}}>
              <View style={{flex: 3.5}}>
                <Text style={styles.headtitle}>Preventions</Text>
              </View>
              
              {/* Button */}
              {/* <View style={{flex: 1}}>
                <TouchableOpacity style={{paddingLeft:10}} onPress={() => this.props.navigation.navigate('PreventionsScreenDetail')}>
                  <Text style={styles.buttonmore}>More</Text>
                </TouchableOpacity>
              </View> */}
            </View>

            {/* Detail Prevention */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.subdetail}>
                  <View style={styles.imageblock}>
                    <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION2} resizeMode='contain'/>
                  </View>
                  <View style={styles.subimageblock}>
                    <Text style={styles.subimagetext}>Mask</Text>
                  </View>
                </View>
                <View style={styles.subdetail}>
                  <View style={styles.imageblock}>
                    <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION3} resizeMode='contain'/>
                  </View>
                  <View style={styles.subimageblock}>
                    <Text style={styles.subimagetext}>Alcohol Gel</Text>
                  </View>
                </View>
                <View style={styles.subdetail}>
                  <View style={styles.imageblock}>
                    <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION7} resizeMode='contain'/>
                  </View>
                  <View style={styles.subimageblock}>
                    <Text style={styles.subimagetext}>Social Distance</Text>
                  </View>
                </View>
                <View style={styles.subdetail}>
                  <View style={styles.imageblock}>
                    <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION4} resizeMode='contain'/>
                  </View>
                  <View style={styles.subimageblock}>
                    <Text style={styles.subimagetext}>Scanning</Text>
                  </View>
                </View>
                <View style={styles.subdetail}>
                  <View style={styles.imageblock}>
                    <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION5} resizeMode='contain'/>
                  </View>
                  <View style={styles.subimageblock}>
                    <Text style={styles.subimagetext}>Isolation</Text>
                  </View>
                </View>
                <View style={styles.subdetail}>
                  <View style={styles.imageblock}>
                    <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION6} resizeMode='contain'/>
                  </View>
                  <View style={styles.subimageblock}>
                    <Text style={styles.subimagetext}>Details</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PreventionsScreenDetail')}>
                <View style={styles.subdetail2}>
                    <View style={styles.imageblock}>
                    <AntDesign name="rightcircleo" size={40} color="black" />
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>More Details</Text>
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



const styles = StyleSheet.create({
  //{/* Background Color */}
  topblock: {
    // flex: ,
    height:130,
    backgroundColor: Color.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    //backgroundColor:'red'

  },
  //{/* Statistic block1 */}
  bigstatblock: {
   // top: -30,
    flexDirection: 'row',
    justifyContent: 'center',
    //backgroundColor:'yellow'
  },
  //{/* Substatistic block1 */}
  statblock: {
    flex:1,
    backgroundColor: 'white',
    width: '43%',
    height: 100,
    margin: 7,
    borderRadius: 10,
    //backgroundColor:'green',
    
  },
  // Text Stat
  txtstats:{
    fontSize:25, 
    color:Color.gray, 
    fontWeight:'bold', 
    paddingLeft:8,
   // backgroundColor:'pink'
  },
  // Subtext Stat
  subtxtstats:{
    fontSize:12, 
    color:Color.gray, 
    fontWeight:'normal', 
    padding:8,
  },
  //Symtompblock
  symtompsblock: {
    flex: 0.5,
    //backgroundColor:'blue',
    paddingTop:10
  },
  //Preventblock
  preventionsblock: {
    flex: 0.5,
   // backgroundColor:'purple',
    paddingTop:10
  },
  //Block preventions, symtomp details
  subdetail: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 10,
    flex:1,
    //backgroundColor:'red',
    top:10
  },
  subdetail2: {
    //backgroundColor: '#000000',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 10,
    flex:1,
    //backgroundColor:'red',
    top:10
  },
  // Title Name : Systomps && Prevention
  headtitle:{
    color:Color.white, 
    fontWeight:'bold', 
    paddingLeft:10, 
    fontSize:20,
  },
  // Button More : Systomps && Prevention
  buttonmore:{
    color:Color.primary, 
    fontSize:15, 
    textDecorationLine:'underline', 
    top:5,
    right:-15
  },
  // Image Block
  imageblock:{
    flex:0.75, 
    //backgroundColor:'red', 
    justifyContent:'center', 
    alignItems:'center'
  },
  // Image
  imagedetail:{
    width:65,
    height:65,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  // Detail image block
  subimageblock:{
    flex:0.25, 
    justifyContent:'center', 
    alignItems:'center'
  },
  subimagetext:{
    fontWeight:'bold',
    color: Color.primary,
    fontSize:12.5
  },
});
