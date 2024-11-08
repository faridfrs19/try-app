import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OwnerInfo({application}) {
  return (
    <View style={styles.container}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
            <Image source={{uri:application?.userImage}}
                style={{
                    width:50,
                    height:50,
                    borderRadius:99,
                }}
            />
            <View>
                <Text style={{
                    fontFamily:'sen-medium',
                    fontSize:17
                }}>{application?.username}</Text>
                <Text style={{
                    fontFamily:'sen',
                    color:Colors.GRAY
                }}>App Owner</Text>
            </View>
        </View>
        <Ionicons name="send-sharp" size={24} color={Colors.SECONDARY} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        paddingHorizontal:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:20,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.SECONDARY,
        padding:10,
        backgroundColor:Colors.WHITE,
        justifyContent:'space-between'
    }
})