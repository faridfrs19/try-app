import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Shared from './../../Shared/Shared'
import { useUser } from '@clerk/clerk-expo'
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import AppListItem from './../../components/Home/AppListItem'

export default function Favorite() {
  const {user}=useUser();
  const [favIds, setFavIds]=useState([]);
  const [favAppList,setFavAppList]=useState([]);
  const [loader, setLoader]=useState(false);

  useEffect(()=>{
    user&&GetFavAppIds();
  }, [user])

  // Fav ids
  const GetFavAppIds=async()=>{
    setLoader(true)
    const result= await Shared.GetFavList(user);
     setFavIds(result?.favorites);
     setLoader(false)

     GetFavAppList(result?.favorites);
  }

  // Fetch related app list
  const GetFavAppList=async(favIds_)=>{
    setLoader(true)
    setFavAppList([])
    const q=query(collection(db, 'Application'),where('id','in',favIds_))
    const querySnapshot=await getDocs(q);

    querySnapshot.forEach((doc)=>{
      console.log(doc.data());
      setFavAppList(prev=>[...prev,doc.data()])
    })
    setLoader(false)
  }


  return (
    <View style={{
      padding:20,
      marginTop:20
    }}>
      <Text style={{
        fontFamily:'sen-medium',
        fontSize:30
      }}>Favorite</Text>

      <FlatList 
        data={favAppList}
        numColumns={2}
        onRefresh={GetFavAppIds}
        refreshing={loader}
        renderItem={({item, index})=>(
          <View style={{
            marginTop:13
          }}>
            <AppListItem application={item}/>
          </View>
        )}
      />
    </View>
  )
}