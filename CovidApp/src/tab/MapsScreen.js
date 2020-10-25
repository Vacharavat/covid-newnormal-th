import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import Status from '../Status'

export class MapsScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1}}>
              <Status />
              <CustomHeader title='Maps' isHome={true} navigation={this.props.navigation}/>
             
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Maps</Text>
                <TouchableOpacity
                style={{marginTop:20}}
                onPress = {() => this.props.navigation.navigate('MapsDetail')}
                >
                  <Text>Go Maps Detail</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
    }
}