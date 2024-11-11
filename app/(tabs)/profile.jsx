import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuth, useUser } from '@clerk/clerk-expo';
import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {
  const Menu=[
    {
      id:1,
      name:'Add New App',
      icon:'add-circle-outline',
      path:'/add-new-app',
      color:'brown'
    },
    {
      id:2,
      name:'Favorites',
      icon:'heart-outline',
      path:'/(tabs)/favorite',
      color:'red'
    },
    {
      id:3,
      name:'Inbox',
      icon:'chatbubble-outline',
      path:'/(tabs)/inbox',
      color:'green'
    },
    {
      id:4,
      name:'Logout',
      icon:'exit-outline',
      path:'/login',
      color:'red'
    }
  ]

  const {user}=useUser();
  const router=useRouter();
  const {signOut}=useAuth();

  const onPressMenu=(menu)=>{
    if(menu=='logout')
    {
      signOut();
      return ;
    }

    router.push(menu.path)

  }
  return (
    <View style={{
      padding:20,
      marginTop:20
    }}>
      <Text style={{
        fontFamily:'sen-medium',
        fontSize:30
      }}>Profile</Text>

      <View style={{
        display:'flex',
        alignItems:'center',
        marginVertical:25
      }}>
        <Image source={{uri:user?.imageUrl}} style={{
          width:80,
          height:80,
          borderRadius:99
        }}
        />
        <Text style={{
          fontFamily:'sen-bold',
          fontSize:20,
          marginTop:12
        }}>{user?.fullName}</Text>
        <Text style={{
          fontFamily:'sen',
          fontSize:16,
          color:Colors.GRAY,
          marginTop:3
        }}>{user?.primaryEmailAddress?.emailAddress}</Text>

      </View>

        <FlatList 
        data={Menu}
        renderItem={({item, index})=>(
          <TouchableOpacity
            onPress={()=>onPressMenu(item)}
            key={item.id} 
            style={{
            marginVertical:10,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:10,
            backgroundColor:Colors.PRIMARY,
            padding:10,
            borderRadius:10
          }}>
            <Ionicons name={item?.icon} size={30} color={item?.color} style={{
              padding:10,
              backgroundColor:Colors.WHITE,
              borderRadius:8
            }}/>
            <Text style={{
              fontFamily:'sen',
              fontSize:20,
              color:Colors.WHITE
            }}>{item.name}</Text>
          </TouchableOpacity>
        )}
        />
    </View>
  )
}