import React from "react";
import { Image,ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import container from "../assets/container.png";
import { Box, Flex } from "@react-native-material/core";

const SingleCard = (props) => (
  <View style={styles.card}>

    <Box mh={20}>

        <ImageBackground source={container} imageStyle={{width:'100%'}}   style={styles.Container}>
          <View>

            <Flex mt={0} justify={'center'} items={'center'} >
              <TouchableOpacity style={{marginTop:5,paddingHorizontal:20,height:35,width:120,borderRadius:20,backgroundColor:'#7B5AFF',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:10}}> Add Check In</Text>
              </TouchableOpacity>
            </Flex>
          </View>
        </ImageBackground>
      <Box ph={10}>
          <Text style={{color:'black',fontSize:13,fontWeight:'bold',marginTop:10}}>Add Check In</Text>
          <Text style={{color:'grey',fontSize:10,fontWeight:'bold',marginTop:2}}>12th Nov, 2022</Text>

      </Box>
      <Flex  direction={'row'}  ph={10} mt={10}>
        <Image  source={container} style={{height:25,width:25,borderRadius:50}}/>
        <Text style={{marginLeft:10,alignSelf:'center',color:'black',fontSize:10,fontWeight:'bold',marginTop:2}}>Owner: John Doe</Text>
      </Flex>

    </Box>
  </View>
);

const styles=StyleSheet.create({
  Container:{
    resizeMode:'cover',
    padding:0,
    alignSelf: 'stretch',
    height:150,
    marginTop:20,
    borderWidth:1,
    borderRadius:20,
    alignItems:'flex-end',
    overflow: 'hidden'
  },
  card:{
    backgroundColor:'white',
    margin:10,
    marginTop:10,
    // backgroundColor:'red',
    backgroundColor:'white',
    shadowColor: 'white',
    borderRadius:10,
    shadowOpacity: 0.5,
    elevation:20,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    padding: 5,
    paddingBottom:20,
  },

})


export default SingleCard;
