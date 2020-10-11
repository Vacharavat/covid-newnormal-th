import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {CustomHeader} from '../index';
import {CovidText} from '../core';
import Color from '../constants/colors';
// import {FlatList, ScrollView} from 'react-native-gesture-handler';

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1 , backgroundColor:Color.primary}}>
        <CustomHeader
          title="Home"
          isHome={true}
          navigation={this.props.navigation}
        />
        {/* Head Block */}
        <View
          style={{
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: Color.secondary,
            
          }}>
          <View style={styles.bg}>
            <Text
              style={{color: Color.white, fontWeight: 'bold', paddingLeft: 15 ,top:-15}}>
              WELCOME TO
            </Text>
            <Text
              style={{
                color: Color.white,
                fontWeight: 'bold',
                paddingLeft: 15,
                fontSize: 23,
                top:-15
              }}>
              COVID-19
            </Text>
            <Text
              style={{
                color: Color.white,
                fontWeight: 'bold',
                paddingLeft: 15,
                fontSize: 25,
                top:-15
              }}>
              STATISTICS
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flex: 0.3,
                top: 0,
                justifyContent: 'center',
                top:-15
              }}>
              <View style={{flex: 1.5}}>
                <Text
                  style={{
                    color: Color.white,
                    fontWeight: 'bold',
                    paddingLeft: 15,
                    paddingTop: 5,
                    fontSize: 11,
                  }}>
                  Update 2020-10-04
                </Text>
              </View>

              <View style={{flex: 2}} />
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{paddingLeft: 10}}
                  onPress={() => this.props.navigation.navigate('HomeDetail')}>
                  <Text
                    style={{
                      top: 5,
                      color: Color.white,
                      // fontWeight: 'bold',
                      fontSize: 15,
                      textDecorationLine: 'underline',
                    }}>
                    More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Statistic block */}
          <View style={styles.bigbox}>
            <View style={styles.box1}>
              <Text style={{color: '#3a3a3c', fontWeight: 'bold', padding: 8}}>
                Confirmed
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  color: '#3a3a3c',
                  fontWeight: 'bold',
                  paddingLeft: 8,
                }}>
                3427
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: '#3a3a3c',
                  fontWeight: 'normal',
                  padding: 8,
                }}>
                (+5)
              </Text>
            </View>
            <View style={styles.box1}>
              <Text style={{color: '#34C759', fontWeight: 'bold', padding: 8}}>
                Recovered
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  color: '#3a3a3c',
                  fontWeight: 'bold',
                  paddingLeft: 8,
                }}>
                3227
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: '#3a3a3c',
                  fontWeight: 'normal',
                  padding: 8,
                }}>
                (+5)
              </Text>
            </View>
          </View>
          <View style={styles.bigbox}>
            <View style={styles.box1}>
              <Text style={{color: '#5AC8FA', fontWeight: 'bold', padding: 8}}>
                Hospitalized
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  color: '#3a3a3c',
                  fontWeight: 'bold',
                  paddingLeft: 8,
                }}>
                92
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: '#3a3a3c',
                  fontWeight: 'normal',
                  padding: 8,
                }}>
                (+5)
              </Text>
            </View>
            <View style={styles.box1}>
              <Text style={{color: '#FF313A', fontWeight: 'bold', padding: 8}}>
                Deaths
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  color: '#3a3a3c',
                  fontWeight: 'bold',
                  paddingLeft: 8,
                }}>
                58
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: '#3a3a3c',
                  fontWeight: 'normal',
                  padding: 8,
                }}>
                (+5)
              </Text>
            </View>
          </View>
          {/* Symptomps block */}
          <View style={styles.symtomps}>
            <View
              style={{
                flexDirection: 'row',
                flex: 0.7,
                top: -13,
                justifyContent: 'center',
              }}>
              <View style={{flex: 1.5}}>
                <Text
                  style={{
                    color: Color.white,
                    fontWeight: 'bold',
                    paddingLeft: 10,
                    paddingTop: 0,
                    fontSize: 20,
                  }}>
                  Symptomps
                </Text>
              </View>

              <View style={{flex: 2}} />
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{paddingLeft: 10}}
                  onPress={() => this.props.navigation.navigate('HomeDetail')}>
                  <Text
                    style={{
                      color: Color.primary,
                      // fontWeight: 'bold',
                      fontSize: 15,
                      textDecorationLine: 'underline',
                      top: 5,
                    }}>
                    More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
             style={{marginHorizontal: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.box2}></View>
                <View style={styles.box2}></View>
                <View style={styles.box2}></View>
                <View style={styles.box2}></View>
                <View style={styles.box2}></View>
                <View style={styles.box2}></View>
              </View>
            </ScrollView>
          </View>

          {/* ///////////////////////////////////// */}
          {/* Preventions */}
          <View style={styles.preventions}>
            <View
              style={{
                flexDirection: 'row',
                flex: 0.7,
                top: -13,
                justifyContent: 'center',
              }}>
              <View style={{flex: 1.5}}>
                <Text
                  style={{
                    color: Color.white,
                    fontWeight: 'bold',
                    paddingLeft: 10,
                    paddingTop: 0,
                    fontSize: 20,
                  }}>
                  Preventions
                </Text>
              </View>

              <View style={{flex: 2}} />
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={{paddingLeft: 10}}
                  onPress={() => this.props.navigation.navigate('HomeDetail')}>
                  <Text
                    style={{
                      color: Color.primary,
                      // fontWeight: 'bold',
                      fontSize: 15,
                      textDecorationLine: 'underline',
                      top: 5,
                    }}>
                    More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView horizontal={true} 
            showsHorizontalScrollIndicator={false} 
                                                                                                                                                                                                                                                                                                                     
            style={{marginHorizontal: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.box2}></View>
                <View style={styles.box2}></View>
                <View style={styles.box2}></View>
                <View style={styles.box2}></View>
                <View style={styles.box2}></View>
                <View style={styles.box2}></View>
              </View>
            </ScrollView>
          </View>
          {/* <CovidText content="Home" />
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('HomeDetail')}>
            <CovidText content="Go Home Detail" />
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#b7b7ff',
  // },
  bg: {
    flex: 0.35,
    //height:220,
    backgroundColor: Color.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
  },

  bigbox: {
    top: -30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box1: {
    backgroundColor: 'white',
    width: '43%',
    height: 100,
    margin: 7,
    borderRadius: 10,
  },
  symtomps: {
    flex: 0.43,
  },

  preventions: {
    flex: 0.43,
  },
  box2: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 10,
  },
  box3: {
    backgroundColor: 'white',
    width: '90%',
    height: 120,
    margin: 8,
    borderRadius: 10,
  },
});
