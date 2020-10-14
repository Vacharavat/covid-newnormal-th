import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image} from 'react-native';
import {CustomHeader} from '../index';
import Color from '../constants/colors';
import {IMAGE} from '../constants/image';
import { color } from 'react-native-reanimated';
// import {FlatList, ScrollView} from 'react-native-gesture-handler';

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1 , backgroundColor:Color.primary}}>
        <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
        
        {/* Background Color */}
        <View style={{ flex: 1, backgroundColor: Color.secondary,}}>
        
        {/* Top Page */}
          <View style={styles.topblock}>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, top:-15}}>WELCOME TO</Text>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, fontSize:23, top:-15}}>COVID-19</Text>
            <Text style={{color:Color.white, fontWeight:'bold', paddingLeft:15, fontSize:25, top:-15}}>STATISTICS</Text>
            
            {/* Block and More */}
            <View style={{flexDirection:'row', flex:0.3, justifyContent:'center', top:-15}}>
              <View style={{flex: 1.5}}>
                <Text style={{ color:Color.white, fontWeight:'bold', paddingLeft:15, paddingTop:5, fontSize:11,}}>Update 2020-10-04</Text>
              </View>

              {/* Blank block */}
              <View style={{flex: 2}}/> 

              {/* Button More */}
              <View style={{flex: 1}}>
                <TouchableOpacity style={{paddingLeft:10}} onPress={() => this.props.navigation.navigate('HomeDetail')}>
                  <Text style={{top:5, color:Color.white, fontSize:15, textDecorationLine:'underline',right:-15}}>More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Statistic block1 */}
          <View style={styles.bigstatblock}>
            {/* Comfirm Block */}
            <View style={styles.statblock}>
              <Text style={{color:Color.gray, fontWeight:'bold', padding:8}}>Confirmed</Text>
              <Text style={styles.txtstats}>3427</Text>
              <Text style={styles.subtxtstats}>(+5)</Text>
            </View>

            {/* Recovered Block */}
            <View style={styles.statblock}>
              <Text style={{color:Color.green, fontWeight:'bold', padding:8}}>Recovered</Text>
              <Text style={styles.txtstats}>3227</Text>
              <Text style={styles.subtxtstats}>(+5)</Text>
            </View>
          </View>

          {/* Statistic block2 */}
          <View style={styles.bigstatblock}>

            {/* Hopitalized Block */}
            <View style={styles.statblock}>
              <Text style={{color:Color.skyblue, fontWeight:'bold', padding:8}}>Hospitalized</Text>
              <Text style={styles.txtstats}>92</Text>
              <Text style={styles.subtxtstats}>(+5)</Text>
            </View>

            {/* Deaths Block */}
            <View style={styles.statblock}>
              <Text style={{color:Color.red, fontWeight:'bold', padding:8}}>Deaths</Text>
              <Text style={styles.txtstats}>58</Text>
              <Text style={styles.subtxtstats}>(+5)</Text>
            </View>
          </View>

          {/* Symptomps block */}
          <View style={styles.symtompsblock}>
            {/* Block and More */}
            <View style={{flexDirection:'row', flex:0.7, top:-13, justifyContent:'center',}}>
              {/* Name */}
              <View style={{flex: 1.5}}>
                <Text style={styles.headtitle}>Symptomps</Text>
              </View>
              {/* Blank Block */}
              <View style={{flex: 2}} />
              {/* Button */}
              <View style={{flex: 1}}>
                <TouchableOpacity style={{paddingLeft:10}} onPress={() => this.props.navigation.navigate('HomeDetail')}>
                  <Text style={styles.buttonmore}>More</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Detail Symtomps */}
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 10}}>
              <View style={{flexDirection:'row'}}>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS1} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>text</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS3} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>text</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS2} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>text</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS4} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>text</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS6} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>text</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS5} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>text</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS8} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>text</Text>
                    </View>
                </View>
                <View style={styles.subdetail}>
                    <View style={styles.imageblock}>
                      <Image style={styles.imagedetail} source={IMAGE.IMAGE_SYMPTOMPS7} resizeMode='contain'/>
                    </View>
                    <View style={styles.subimageblock}>
                      <Text style={styles.subimagetext}>text</Text>
                    </View>
                </View>
              </View>
            </ScrollView>

          </View>

          {/* Preventions block */}
          <View style={styles.preventionsblock}>
            <View style={{flexDirection:'row', flex:0.7, top:-13, justifyContent:'center',}}>
              <View style={{flex: 1.5}}>
                <Text style={styles.headtitle}>Preventions</Text>
              </View>
              {/* Blank Block */}
              <View style={{flex: 2}}/>
              {/* Button */}
              <View style={{flex: 1}}>
                <TouchableOpacity style={{paddingLeft:10}} onPress={() => this.props.navigation.navigate('HomeDetail')}>
                  <Text style={styles.buttonmore}>More</Text>
                </TouchableOpacity>
              </View>
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
                    <Text style={styles.subimagetext}>Alchol Gel</Text>
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
                    <Image style={styles.imagedetail} source={IMAGE.IMAGE_PREVENTION1} resizeMode='contain'/>
                  </View>
                  <View style={styles.subimageblock}>
                    <Text style={styles.subimagetext}>Safetysuits</Text>
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
                
              </View>
            </ScrollView>

          </View>
        </View>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  //{/* Background Color */}
  topblock: {
    flex: 0.35,
    backgroundColor: Color.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },
  //{/* Statistic block1 */}
  bigstatblock: {
    top: -30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  //{/* Substatistic block1 */}
  statblock: {
    backgroundColor: 'white',
    width: '43%',
    height: 100,
    margin: 7,
    borderRadius: 10,
  },
  // Text Stat
  txtstats:{
    fontSize:25, 
    color:Color.gray, 
    fontWeight:'bold', 
    paddingLeft:8,
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
    flex: 0.43,
  },
  //Preventblock
  preventionsblock: {
    flex: 0.43,
  },
  //Block preventions, symtomp details
  subdetail: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 10,
    flex:1
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
