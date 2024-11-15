import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const UserCreate = () => {
    // day 1 base model created    
    //states added her for to get input value
    const [nameInput,setNameInput] = useState('')
    const [numberInput,setNumberInput] = useState('')
    const [confirmNumber,setConfrimNumber] = useState('')

    // need to trim the values for empty spaces
    

    function addCustomer(){
        if(nameInput.trim() !== '' && numberInput.trim() !== ''){
            alert(`user ${nameInput} succesfuly created`)
        }

        alert("its working")
    }
  return (
    <View>
      <Text>Add Customer</Text>
      <TextInput  keyboardType='text' placeholder='User Name' value={nameInput} onChangeText={(text)=>setNameInput(text)} required/>
      <TextInput keyboardType='phone-pad' placeholder='Phone Number' value={numberInput} onChangeText={(text)=>setNumberInput(text)} />
      <TextInput keyboardType='phone-pad' placeholder='Confirm Number' value={confirmNumber} onChangeText={(text)=>setConfrimNumber(text)} />
      <Button title='Add Customer' onPress={addCustomer}/>
      <Text>{nameInput},{numberInput},{confirmNumber}</Text>
    </View>
  )
}

export default UserCreate