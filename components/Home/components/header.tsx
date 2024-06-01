import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../../ThemedText'
import { Avatar, Button } from 'react-native-paper'

export default function Header() {
  return (
      <View style={{flexDirection:"row",marginTop:20}}>
        <ThemedText style={{marginLeft:20, flex:50, marginTop:10}} type="title">
        Journal
      </ThemedText>
      <Button onPress={()=>{console.log("profile")}} style={{marginRight:15}}>
      <Avatar.Image  size={40} source={require('../../../assets/images/avatar.webp')} />
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})