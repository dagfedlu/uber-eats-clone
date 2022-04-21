import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

export default function RestaurantItem() {
  return (
    <View style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  )
}

const RestaurantImage = () => (
  <>
  <Image 
  source={{uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'}}
  style={{ width: "100%", height: 180 }}  
  />
  <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20}}>
    <MaterialCommunityIcons name='heart-outline'
    size={25} color='#fff'
    />
  </TouchableOpacity>
  </>
)

const RestaurantInfo = () => (
  <View style={{ 
    flexDirection:"row", 
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  }}>
    <View>
    <Text style={{
      fontSize: 15,
      fontWeight: "bold" 
    }}>thai cuisine</Text>

    <Text style={{
      fontSize: 13,
      color: "gray"
    }}>30-35 min</Text>
    </View>

    <View style={{
      backgroundColor: "#eee",
      height: 30,
      width: 30,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15
    }}
    >

    <Text>4.5</Text>
    </View>
  </View>
)