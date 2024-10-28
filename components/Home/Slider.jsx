import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfigs'

const Slider = () => {
    const [sliderList, setSliderList] = useState([]);
    const {specialText,sliderFlatList,sliderImg}=styles

    useEffect(()=>{
        GetSliderList()
    },[])
    const GetSliderList=async()=>{
        setSliderList([])
        const q=query(collection(db,'Slider'));
        const querySnapshot=await getDocs(q)
        querySnapshot.forEach((doc)=>{
            console.log(doc.data())
            
            setSliderList(prev=>[...prev,doc.data()])
        })
    }
  return (
    <View>
      <Text style={specialText}>
        #Special for you 
      </Text>
      <FlatList style={sliderFlatList}
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            style={sliderImg}
            source={{ uri: item.image }} // Assuming each doc has an 'image' field
          />
        )}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({

    specialText:{
        fontFamily:'outfit',
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:20,
        paddingRight:20,
        margin:8
    },
    sliderFlatList:{
        
    },
    sliderImg:{
    width: 300,
    height: 150,
    borderRadius:15,
    // marginRight:5,
    marginLeft:15,


    }
})