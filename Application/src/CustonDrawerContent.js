import React, { Component } from 'react';
import { Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Color from './constants/colors'

export class CustonDrawerContent extends Component{
    render(){
        return(
            <SafeAreaView style ={{flex:1 , backgroundColor:Color.darkpurple}}>

              <ScrollView style={{marginLeft:10}}>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Menu')}
                >
                  <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>COVID-19 TH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('COVID-19')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>ที่มาของโรค</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Origin')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>ต้นกำเนิดของไวรัส</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Event')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>เหตุการณ์ระบาดเป็นวงกว้าง</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Trans')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>การแพร่เชื้อ</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Looks')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>ลักษณะจำเพาะโรค</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Groups')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>กลุ่มเสี่ยงที่จะติดเชื้อ</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Correct')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>การตรวจโรค</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Heal')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>การรักษาโรค</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Measure')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>มาตรการระดับบุคคล</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Measurepublic')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>มาตรการทางสาธาณะสุข</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('Effect')}
                >
                  <Text style={{color:'white', fontWeight:'normal', fontSize:14, margin:2, paddingLeft:12}}>ผลกระทบทางเศรษฐกิจและสังคม</Text>
                </TouchableOpacity> 
                
              </ScrollView>
            </SafeAreaView>
          );
    }
}