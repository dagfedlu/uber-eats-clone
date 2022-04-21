import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';

export default function Home() {
  return (
    <View style={{backgroundColor:"#eee", flex:1}}>
      <View style={{backgroundColor:"white", padding:15}}>
      <Text></Text>
      <HeaderTabs />
      <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Categories />
      <RestaurantItem />
      </ScrollView>
    </View>
  );
}

