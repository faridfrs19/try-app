import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import AppListByCategory from '../../components/Home/AppListByCategory'
import bgHome from './../../assets/images/bg-home.jpg'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constants/Colors'

export default function Home() {
  return (
    // <ImageBackground source={bgHome} style={{
    //   width:Dimensions.get('screen').width*0.99,
    //   height:'auto'
    // }}>
      <View style={{
          padding:20,
          marginTop:20
      }}>
          {/* Header */}
          <Header />

          {/* Slider */}
          <Slider />

          {/* Category + list app */}
          <AppListByCategory />

          {/* Add new app */}
          <TouchableOpacity style={styles.addNewAppContainer}>
            <Ionicons name="add-circle-sharp" size={24} color={Colors.WHITE} />
            <Text style={{
              fontFamily:'sen-medium',
              color:Colors.WHITE,
              fontSize:18
            }}>Add New App</Text>
          </TouchableOpacity>

      </View>
    // </ImageBackground>
  )
}

const styles = StyleSheet.create({
  addNewAppContainer:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    padding:20,
    marginTop:20,
    backgroundColor:Colors.PRIMARY,
    borderWidth:2,
    borderColor:Colors.INFO,
    borderRadius:15,
    borderStyle:'dashed',
    justifyContent:'center'
  }
})