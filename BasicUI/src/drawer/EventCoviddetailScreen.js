import React, { Component } from 'react';
import { Text, View, SafeAreaView,Image, TouchableOpacity, ScrollView } from 'react-native';
import {CustomHeader} from '../index'


export class EventCoviddetailScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1}}>
              <CustomHeader title='เหตุการณ์ระบาดเป็นวงกว้าง' navigation={this.props.navigation}/>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>เหตุการณ์ระบาดเป็นวงกว้าง Screen</Text>
              </View>
            </SafeAreaView>
          );
    }
}