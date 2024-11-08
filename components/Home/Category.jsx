import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';
import Colors from './../../constants/Colors'
import { TouchableOpacity } from 'react-native';

export default function Category({category}) {
    const [categoryList, setCategoryList]=useState([]);
    const [selectedCategory, setSelectedCategory]=useState('Advertisement');

    useEffect (()=>{
        GetCategories();
    }, [])

    // Used to get category list from DB
    const GetCategories=async()=>{
        setCategoryList([]);
        const snapshot = await getDocs(collection(db, 'Category'));
        snapshot.forEach((doc)=>{
            console.log(doc.data());
            setCategoryList(categoryList=>[...categoryList,doc.data()])
        })
    }

  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
        fontFamily:'sen-medium',
        fontSize:20,
        marginBottom:10
      }}>Category</Text>

      <FlatList 
        data={categoryList}
        numColumns={4}
        renderItem={({item, index})=>(
            <TouchableOpacity onPress={()=>{
                setSelectedCategory(item.name);
                category(item.name)
            }}
            style={{
                flex:1
            }}
            >
                <View style={[styles.container,
                    selectedCategory==item.name&&styles.selectedCategoryContainer]
                }>
                    <Image source={{uri:item?.imageUrl}} 
                        style={{
                            width:40,
                            height:40
                        }}
                    />
                </View>
                <Text style={[styles.text,
                    selectedCategory==item.name&&styles.selectedCategoryText]
                }>{item?.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.BLUE,
        padding:15,
        alignItems:'center',
        borderWidth:3,
        borderRadius:15,
        borderColor:Colors.INFO,
        margin:5
    },
    selectedCategoryContainer:{
        backgroundColor:Colors.WARNING,
        borderColor:Colors.WARNING
    },
    text:{
        textAlign:'center',
        fontFamily:'sen',
        fontSize:12
    },
    selectedCategoryText:{
        color:Colors.WARNING
    }
})