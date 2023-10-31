import React, {useState} from "react";
import { Image,ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import container from "../assets/container.png";
import { Box, Flex } from "@react-native-material/core";
import storage from '@react-native-firebase/storage';
const SingleCard = ({item}) => {
  const [imageUrl,setImageUrl] = useState('data:image/jpeg;base64,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')
  React.useEffect(() => {
    //fetching the data
    (async ()=>{
      if(item.hasOwnProperty('id')){
      const url = await storage().ref(item.id+'.png').getDownloadURL();
      setImageUrl(url)

      }
      console.log('see me',item)
    })()

  }, [item,imageUrl]);
  return (
      <View style={styles.card}>

        <Box mh={20}>

          <ImageBackground source={{uri:imageUrl}} imageStyle={{width:'100%'}}   style={styles.Container}>
            <View>

              <Flex mt={0} justify={'center'} items={'center'} >
                <TouchableOpacity style={{marginRight:10,marginTop:5,paddingHorizontal:20,height:25,width:95,borderRadius:20,backgroundColor:'#7B5AFF',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{color:'white',fontSize:8}}>Checked In</Text>
                </TouchableOpacity>
              </Flex>
            </View>
          </ImageBackground>
          <Box ph={10}>
            <Text style={{color:'black',fontSize:13,fontWeight:'bold',marginTop:10}}>{item.title}</Text>
            <Text style={{color:'grey',fontSize:10,fontWeight:'bold',marginTop:2}}>12th Nov, 2022</Text>

          </Box>
          <Flex  direction={'row'}  ph={10} mt={10}>
            <Image  source={container} style={{height:25,width:25,borderRadius:50}}/>
            <Text style={{marginLeft:10,alignSelf:'center',color:'black',fontSize:10,fontWeight:'bold',marginTop:2}}>Owner: John Doe</Text>
          </Flex>

        </Box>
      </View>
  );
}

const styles=StyleSheet.create({
  Container:{
    resizeMode:'cover',
    padding:0,
    alignSelf: 'stretch',
    height:150,
    marginTop:20,
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
