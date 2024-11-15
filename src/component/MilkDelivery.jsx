import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const MilkDelivery = () => {
    const [price,setPrice] =useState(0);
    const [qty,setQty] =useState(0)
    const [total,setTotal] = useState(0)

    function sendData(){
        setTotal(price*qty)

    }
  return (
    <View>
      <Text>MilkDelivery</Text>
      <TextInput placeholder='customer phone number'/>
      <TextInput placeholder='price per litter' keyboardType='number-pad' value={price} onChangeText={(text)=>setPrice(text)}/>
      <TextInput placeholder='Quantity' keyboardType='number-pad' value={qty} onChangeText={(text)=>setQty(text)}/>
      <Text>{total}</Text>
      <Button title='make a sale' onPress={sendData}/>
    </View>
  )
}

export default MilkDelivery