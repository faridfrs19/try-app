import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'

export default function AboutApp({application}) {
    const [readMore, setReadMore]=useState(true)
  return (
    <View style={{
        padding:20
    }}>
      <Text style={{
        fontFamily:'sen-medium',
        fontSize:20
      }}>About {application?.name}</Text>
      <Text numberOfLines={readMore?3:20} style={{
        fontFamily:'sen',
        marginTop:6,
        fontSize:14
      }}>{application?.about}</Text>
      {readMore&&
      <Pressable onPress={()=>setReadMore(false)}>
        <Text style={{
            fontFamily:'sen-medium',
            fontSize:14,
            color:Colors.INFO
        }}>Read More</Text>
      </Pressable>}
    </View>
  )
}