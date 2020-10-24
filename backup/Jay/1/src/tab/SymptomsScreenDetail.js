import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import Color from '../constants/colors'
import { Card } from 'react-native-elements'

export class SymptomsScreenDetail extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary}}>
              <CustomHeader title='Symptoms Detail' navigation={this.props.navigation}/>
              <ScrollView>
                <Card>
                    <Card.Title>1. Fever</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps1.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        Sysmptom Detail
                    </Text>
                </Card>
                <Card>
                    <Card.Title>2. Cough</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps3.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        Sysmptom Detail
                    </Text>
                </Card>
                <Card>
                    <Card.Title>3. Sore throat</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps4.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        Sysmptom Detail
                    </Text>
                </Card>
                <Card>
                    <Card.Title>4. Runny nose</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps6.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        Sysmptom Detail
                    </Text>
                </Card>
                <Card>
                    <Card.Title>5. Diarrhea</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps8.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        Sysmptom Detail
                    </Text>
                </Card>
                <Card>
                    <Card.Title>6. Tired</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps2.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        Sysmptom Detail
                    </Text>
                </Card>
                <Card>
                    <Card.Title>7. Ache</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps5.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        Sysmptom Detail
                    </Text>
                </Card>
                <Card>
                    <Card.Title>8. Blood-Tinged Sputum</Card.Title>
                    <Card.Divider/>
                    <View style={{ flex:1,flexDirection:'row', alignContent:'center', justifyContent:'center' }}>
                        <Image source={require('../image/symptomps7.png')} style={{width: 100, height: 100,}} />
                    </View>
                    <Text style={{textAlign:'center', margin:10}}>
                        Sysmptom Detail
                    </Text>
                </Card>
              </ScrollView>
            </SafeAreaView>
          );
    }
}