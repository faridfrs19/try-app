import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import MarkFav from '../MarkFav';

export default function AppInfo({application}) {
  return (
    <View>
      <Image source={{uri:application.imageUrl}}
      style={{
        width:'100%',
        height:400,
        objectFit:'cover'
      }}
      />
      <View style={{
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <View>
            <Text style={{
                fontFamily:'sen-bold',
                fontSize:27
            }}>{application?.name}</Text>

            <Text style={{
                fontFamily:'sen',
                fontSize:16,
                color:Colors.GRAY
            }}>{application?.fullname}</Text>
        </View>
        <MarkFav application={application}/>
      </View>
    </View>
  )
}