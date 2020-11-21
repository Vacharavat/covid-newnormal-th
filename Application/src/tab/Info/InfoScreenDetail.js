import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { CustomHeader } from '../../index'
import Color from '../../constants/colors';
import Status from '../../Status'
import MainEmergency from "../../components/MainEmergency";
export class InfoScreenDetail extends Component{
    render(){
        return (
        <SafeAreaView style={{flex: 1 , backgroundColor:Color.primary}}>
          <Status />
        <CustomHeader title="CONTACTS"  navigation={this.props.navigation}/>
        <MainEmergency/>
      </SafeAreaView>
    );
  }
}
