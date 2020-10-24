import * as React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { SafeAreaView } from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomHeader, CustonDrawerContent} from './src';

import {HomeScreen, HomeScreenDetail, MapsScreen, MapsScreenDetail, NewNormalScreen,
  NewNormalScreenDetail, NewNormal1, NewNormal2, NewNormal3, InfoScreen, InfoScreenDetail, PreventionsDetails} from './src/tab'

import {CoviddetailScreen, OriginCoviddetailScreen, EventCoviddetailScreen, TransCoviddetailScreen,LookCoviddetailScreen,
  GroupCoviddetailScreen, CorrectCoviddetailScreen,HealCoviddetailScreen, MeasureCoviddetailScreen, MeasurePublicCoviddetailScreen,
  EffectCoviddetailScreen} from './src/drawer';

import {IMAGE} from './src/constants/image';

// Bottom
const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown : false
})

// HOME
const StackHome = createStackNavigator();
function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component= {HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="HomeDetail" component= {HomeScreenDetail} options={navOptionHandler}/>
      <StackHome.Screen name="Preventions" component= {PreventionsDetails} options={navOptionHandler}/>
    </StackHome.Navigator>
  );
}

// MAPS
const StackMaps = createStackNavigator();
function MapsStack(){
  return(
    <StackMaps.Navigator initialRouteName="Maps">
      <StackMaps.Screen name="Maps" component= {MapsScreen} options={navOptionHandler}/>
      <StackMaps.Screen name="MapsDetail" component= {MapsScreenDetail} options={navOptionHandler}/>
    </StackMaps.Navigator>
  );
}

// NEW NORMAL
const StackNewNormal = createStackNavigator();
function NewNormalStack(){
  return(
    <StackNewNormal.Navigator initialRouteName="New Normal">
      <StackNewNormal.Screen name="NewNormal" component= {NewNormalScreen} options={navOptionHandler}/>
      <StackNewNormal.Screen name="NewNormalDetail" component= {NewNormalScreenDetail} options={navOptionHandler}/>
      <StackNewNormal.Screen name="NewNormal1" component= {NewNormal1} options={navOptionHandler}/>
      <StackNewNormal.Screen name="NewNormal2" component= {NewNormal2} options={navOptionHandler}/>
      <StackNewNormal.Screen name="NewNormal3" component= {NewNormal3} options={navOptionHandler}/>
    </StackNewNormal.Navigator>
  );
}

// INFO
const StackInfo = createStackNavigator();
function InfoStack(){
  return(
    <StackInfo.Navigator initialRouteName="Information">
      <StackInfo.Screen name="Info" component= {InfoScreen} options={navOptionHandler}/>
      <StackInfo.Screen name="InfoDetail" component= {InfoScreenDetail} options={navOptionHandler}/>
    </StackInfo.Navigator>
  );
}

// Function Tab 
function TabNavigator(){
  return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? IMAGE.ICON_HOME
                : IMAGE.ICON_HOME2;
            } else if (route.name === 'Maps') {
              iconName = focused 
                ? IMAGE.ICON_MAP
                : IMAGE.ICON_MAP2;
            }
            else if (route.name === 'New Normal') {
              iconName = focused 
                ? IMAGE.ICON_NEW_NORMAL
                : IMAGE.ICON_NEW_NORMAL2;
            }
            else if (route.name === 'Info') {
              iconName = focused 
                ? IMAGE.ICON_INFO
                : IMAGE.ICON_INFO2;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width:25,height:25}} resizeMode='contain' />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#473F97',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Maps" component={MapsStack} />
        <Tab.Screen name="New Normal" component={NewNormalStack} />
        <Tab.Screen name="Info" component={InfoStack} />
      </Tab.Navigator>
  );
}

// Drawer
const Drawer = createDrawerNavigator();
function DrawerNavigator({navigation}){
  return(
    <Drawer.Navigator initialRouteName="MenuTab" 
    drawerContent={() => <CustonDrawerContent navigation={navigation}/>}>
      <Drawer.Screen name="Menu" component={TabNavigator} />
      <Drawer.Screen name="COVID-19" component={CoviddetailScreen} />
      <Drawer.Screen name="Origin" component={OriginCoviddetailScreen} />
      <Drawer.Screen name="Event" component={EventCoviddetailScreen} />
      <Drawer.Screen name="Trans" component={TransCoviddetailScreen} />
      <Drawer.Screen name="Looks" component={LookCoviddetailScreen} />
      <Drawer.Screen name="Groups" component={GroupCoviddetailScreen} />
      <Drawer.Screen name="Correct" component={CorrectCoviddetailScreen} />
      <Drawer.Screen name="Heal" component={HealCoviddetailScreen} />
      <Drawer.Screen name="Measure" component={MeasureCoviddetailScreen} />     
      <Drawer.Screen name="Measurepublic" component={MeasurePublicCoviddetailScreen} />
      <Drawer.Screen name="Effect" component={EffectCoviddetailScreen} /> 
    </Drawer.Navigator>
  );
}



// RETURM
const StackApp = createStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Basic">
        
        <StackApp.Screen name="HomeApp" component= {DrawerNavigator} options={navOptionHandler}/>
      </StackApp.Navigator>
      
      
    </NavigationContainer>
  );
}