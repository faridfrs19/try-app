import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../config/FirebaseConfig'
import AppListItem from './AppListItem'

export default function AppListByCategory() {
  const [appList, setAppList]=useState([]);
  const [loader, setLoader]=useState(false);

  useEffect (()=>{
    GetAppList('Advertisement')
  }, [])

  const GetAppList=async(category)=> {
    setLoader(true)
    setAppList([]);
    const q=query(collection(db, 'Application'), where('category','==',category));
    const querySnapshot=await getDocs(q);

    /**
     * used to get app list on category selection
     * @param {*} category
     */
    querySnapshot.forEach(doc=>{
      setAppList(appList=>[...appList,doc.data()])
    })
    setLoader(false);

  }

  return (
    <View>
      <Category category={(value)=>GetAppList(value)} />
        <FlatList
        data={appList}
        style={{
          marginTop:10
        }}
        horizontal={true}
        refreshing={loader}
        onRefresh={()=>GetAppList('Advertisement')}
        renderItem={({item, index})=>(
          <AppListItem application={item} />
        )}
      />
    </View>
  )
}