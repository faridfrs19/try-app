import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import AppSubInfoCard from './AppSubInfoCard'

export default function AppSubInfo({application}) {
  return (
    <View style={{
        paddingHorizontal:20,
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row'
      }}>
        <AppSubInfoCard 
        icon={require('./../../assets/images/price.png')}
        title={'Harga'}
        value={"Rp"+application?.price}
        />
        <AppSubInfoCard 
        icon={require('./../../assets/images/expired.png')}
        title={'Waktu'}
        value={application?.expired}
        />
      </View>
      <View style={{
        display:'flex',
        flexDirection:'row'
      }}>
        <AppSubInfoCard 
        icon={require('./../../assets/images/tech.png')}
        title={'Teknologi'}
        value={application?.tech}
        />
        <AppSubInfoCard 
        icon={require('./../../assets/images/mobile.png')}
        title={'Jenis'}
        value={application?.type}
        />
      </View>
    </View>
  )
}