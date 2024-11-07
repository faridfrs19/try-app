import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import AppListByCategory from '../../components/Home/AppListByCategory'

export default function Home() {
  return (
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
  )
}