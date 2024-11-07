import { View, Text, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import AppListByCategory from '../../components/Home/AppListByCategory'
import bgHome from './../../assets/images/bg-home.jpg'

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

      </View>
    // </ImageBackground>
  )
}