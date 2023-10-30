import React from 'react';
import { View, StyleSheet, Image, Text, FlatList,TouchableOpacity } from "react-native";
import AddCheckIn from "../components/AddCheckIn";
import { Button, Dialog, Portal,Modal,TextInput } from 'react-native-paper';
import inbox from '../assets/Inbox.png'
import {
  Box,Flex,
} from '@react-native-material/core';
import SingleCard from "../components/SingleCard";
const HomeScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const [text, setText] = React.useState("");

  return (
  <>
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
        <View style={{borderTopStartRadius:20,borderTopEndRadius:20,backgroundColor:'#F8F8F8',paddingVertical:20,flexDirection:'row',justifyContent:"space-between"}}>
            <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10,}}>Added CheckIns</Text>
          <TouchableOpacity onPress={hideModal}>
            <Text style={{fontSize:20,fontWeight:'bold',marginRight:20,}}>X</Text>

          </TouchableOpacity>

        </View>
        <View>
          <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10,}}>Title</Text>
          <Box ph={20} mb={10}>

          <TextInput
            mode={'outlined'}
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
            style={{backgroundColor:'white'}}
          />
            <TouchableOpacity onPress={()=>handler()} style={styles.pickerHolder}>
              <Image source={inbox} resizeMode={'contain'} style={styles.clipIcon} />
              <Text style={{fontWeight:'bold',marginTop:10,}}>Click or drag file to this area to upload</Text>
              <Flex content={'centent'} mb={10}>

              <Text style={{textAlign:'center',marginTop:10}}>Support for a single or bulk upload. Strictly prohibit from uploading company data
                or other band files</Text>
              </Flex>
            </TouchableOpacity>

          </Box>
            <Flex direction={'row'} mt={0} justify={'end'} items={'center'} mr={20} mb={20}>
              <TouchableOpacity style={{borderWidth:1,margin:5,marginTop:5,paddingHorizontal:20,height:35,borderRadius:20,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'black',fontSize:10}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop:5,margin:5,paddingHorizontal:20,height:35,borderRadius:20,backgroundColor:'#7B5AFF',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:10}}>Add</Text>
              </TouchableOpacity>
            </Flex>
        </View>
      </Modal>
    </Portal>

    <View style={{marginTop:10}}>
      <AddCheckIn handler={showDialog}/>
      <Box mt={10} ph={20}>
        <Text style={{fontSize:15,fontWeight:'bold'}}>Added CheckIns</Text>
      </Box>


      <FlatList
        nestedScrollEnabled={true}
        data={Array.from({ length: 10  }, (_, i) => i + 1)}
        renderItem={({ item, index })=> <Box ph={10}><SingleCard/></Box>}

      />



    </View>
  </>
  );
};
const styles=StyleSheet.create({
  containerStyle:{
    margin:10,
    backgroundColor: 'white',
    borderTopStartRadius:20,
    borderTopEndRadius:20,

  },
  pickerHolder:{
    justifyContent:'center',
    display: 'flex',
    height: 170,
    paddingHorizontal: 15,
    alignItems:'center',
    margin: 10,
    borderRadius: 8,
    borderWidth:1.5,
    borderColor:'#40302A',
    borderStyle:'dashed',

    opacity: 0.8,
  },
  clipIcon:{
    height:36,
    width:36
  },
})
export default HomeScreen;
