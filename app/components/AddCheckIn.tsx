import React from "react";
import { View,ImageBackground, StyleSheet, TouchableOpacity,Text } from "react-native";
import container from '../assets/container.png'
import {Flex,Box} from "@react-native-material/core";
const AddCheckIn = ({handler}) => (

  <ImageBackground source={container} imageStyle={{width:'100%'}}   style={styles.Container}>
    <View>

      <Text style={{fontSize:20,color:'white',textAlign:'center'}}>Hi! 👋 James Doe</Text>
      <Box ph={20} mt={10}>
    <Text style={{color:'white',textAlign:'center'}}>
      Lorem ipsus dolor sit amen, something important to say here
    </Text>

      </Box>
    <Flex mt={25} justify={'center'} items={'center'} >
      <TouchableOpacity onPress={()=>handler()} style={{paddingHorizontal:20,height:40,width:150,borderRadius:20,backgroundColor:'#7B5AFF',alignItems:'center',justifyContent:'center'}}>
       <Text style={{color:'white'}}> Add Check In</Text>
      </TouchableOpacity>
    </Flex>
    </View>
  </ImageBackground>
);

const styles=StyleSheet.create({
  Container:{
    resizeMode:'cover',
    padding:0,
    alignSelf: 'stretch',
    height:200,
    marginTop:30,
    margin:10,
    borderWidth:1,
    borderRadius:20,
    margin:20,
    justifyContent:'center',
    alignItems:'center',
    overflow: 'hidden'
  }

})


export default AddCheckIn;
