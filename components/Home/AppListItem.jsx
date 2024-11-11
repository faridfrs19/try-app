import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import MarkFav from '../MarkFav';

export default function AppListItem({application}) {
    const router=useRouter();
  return (
    <TouchableOpacity 
    onPress={()=>router.push({
        pathname:'/app-details',
        params:application
    })}
    style={{
        padding:10,
        marginRight:15,
        backgroundColor:Colors.WHITE,
        borderRadius:10
    }}>
      <View style={{
        position:'absolute',
        zIndex:10,
        right:10,
        top:10
      }}>
        <MarkFav application={application} color={'black'}/>
      </View>
      <Image source={{uri:application?.imageUrl}}
        style={{
            width:150,
            height:135,
            objectFit:'cover',
            borderRadius:10
        }}
      />

      <Text style={{
        fontFamily:'sen-medium',
        fontSize:18,
        marginTop:8
      }}>{application?.name}</Text>

      <View style={{
        display:'flex',
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Text style={{
            color:Colors.GRAY,
            fontFamily:'sen'
        }}>{application?.type}</Text>
        <Text style={{
            fontFamily:'sen',
            color:Colors.WHITE,
            paddingHorizontal:7,
            borderRadius:10,
            fontSize:12,
            backgroundColor:Colors.PRIMARY
        }}>Rp {application.price}</Text>
      </View>

    </TouchableOpacity>
  )
}