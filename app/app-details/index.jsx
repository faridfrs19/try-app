import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import AppInfo from '../../components/AppDetails/AppInfo';
import AppSubInfo from '../../components/AppDetails/AppSubInfo';
import AboutApp from '../../components/AppDetails/AboutApp';
import OwnerInfo from '../../components/AppDetails/OwnerInfo';
import { TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AppDetails() {
  const application=useLocalSearchParams();
  const navigation=useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerTransparent:true,
      headerTitle:''
    })
  }, [])

  return (
    <View>
      <ScrollView>
        {/* <Text>{JSON.stringify(application)}</Text> */}

        {/* App Info */}
          <AppInfo application={application} />

        {/* App Sub Info */}
          <AppSubInfo application={application} />

        {/* about */}
          <AboutApp application={application} />

        {/* owner details */}
          <OwnerInfo application={application} />
          <View style={{height:70}}>

          </View>

      </ScrollView>
        {/* buy button  */}
        <View style={styles?.bottomContainer}>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={{
              fontFamily:'sen-medium',
              color:Colors.WHITE,
              fontSize:20
            }}>Buy App</Text>
            <Ionicons name="cart-outline" size={25} color={Colors.WHITE} />
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buyBtn:{
    padding:15,
    backgroundColor:Colors.SECONDARY,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:12
  },
  bottomContainer:{
    position:'absolute',
    width:'100%',
    bottom:0
  }
})