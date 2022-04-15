import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'


export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton 
      text="Delivery" 
      btncolor="black" 
      textcolor="white"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      />
      <HeaderButton 
      text="Pickup" 
      btncolor="white" 
      textcolor="black"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      />  
    </View>
  )
}

const HeaderButton = (props) => (
<View>
    <TouchableOpacity
        style = {{
            backgroundColor: props.btncolor,
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}
    >
    <Text style={{color:props.textcolor, fontSize:11, fontWeight: "bold"}}>
        {props.text}
    </Text>
    </TouchableOpacity>
</View>
);

