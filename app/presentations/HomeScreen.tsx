import React, {useEffect} from 'react';
import { View, StyleSheet, Image, Text, FlatList,TouchableOpacity,ActivityIndicator } from "react-native";
import AddCheckIn from "../components/AddCheckIn";
import { Button, Dialog, Portal,Modal,TextInput } from 'react-native-paper';
import inbox from '../assets/Inbox.png'
import {
  Box,Flex,
} from '@react-native-material/core';
import SingleCard from "../components/SingleCard";
import DocumentPicker from "../components/DocumentPicker";
import firestore from "@react-native-firebase/firestore";
import storage from '@react-native-firebase/storage';
import * as ImagePicker from "expo-image-picker";
const HomeScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [visiblePicker, setVisiblePicker] = React.useState(false);
  const [image,setImage] = React.useState('');
  const [loader,setLoader] = React.useState(false);

  const [dataLoader,setDataLoader] =React.useState(true)
  const [data,setData] = React.useState([])

  const showDialog = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const [text, setText] = React.useState("");
  const userDocument = firestore().collection('addons');

  const addNewAddOn = () =>{
    setLoader(true)
    const id = text + "_" + Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
    const imageName =  id  + '.png'
    const reference = storage().ref(imageName);

    reference.putFile(image)
        .then((snapshot) => {
          //writing the data to the firestore
          firestore()
              .collection('addons')
              .add({
                id:id,
                title: text,
              })
              .then(() => {
                setLoader(false)
                console.log('User added!');
                console.log(`${imageName} has been successfully uploaded.`);
              });

        })
        .catch((e) => console.log('uploading image error => ', e));

  }

  const handleFilePress = async () => {

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {

        if(Array.isArray(result.assets)){
          if(result.assets[0].uri){
            console.log("see her",result.assets)
            setImage(result.assets[0].uri)
            // setUploadPic(result.assets[0].uri);

          }
        }
      }
    }
  };

  // const handleCameraPress = async () => {
  //   let  { status } = await ImagePicker.requestCameraPermissionsAsync();
  //   //
  //   if (status === 'granted') {
  //     const result = await ImagePicker.launchCameraAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       aspect: [1, 1],
  //       quality: 1,
  //     });
  //
  //
  //     if (!result.canceled) {
  //       if(Array.isArray(result.assets)){
  //         if(result.assets[0].uri){
  //           setImage(result.assets[0].uri)
  //
  //           // setUploadPic(result.assets[0].uri);
  //
  //         }
  //       }
  //     }
  //   }
  // };





  useEffect(() => {
    //fetching the data
    (async ()=>{
      const temp_arry= []
      const addons = await firestore().collection('addons').get();

      addons.forEach(  (documentSnapshot) => {
        // Access the data of the document
        const data = documentSnapshot.data();
        temp_arry.push(data)


      });
        console.log('temp',temp_arry)
      setData(temp_arry)
        setDataLoader(false)
    //const url = await storage().ref('black-t-shirt-sm.png').getDownloadURL();

    })()
    console.log('data is ',data)

  }, [loader,dataLoader]);
  return (
  <>
    <Portal >
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={[{zIndex:100},styles.containerStyle]}>
        <View style={{borderTopStartRadius:20,borderTopEndRadius:20,backgroundColor:'#F8F8F8',paddingVertical:20,flexDirection:'row',justifyContent:"space-between"}}>
            <Text style={{fontSize:16,fontWeight:'bold',marginLeft:20,color:'black',letterSpacing:0.4,lineHeight:16}}>Added CheckIns</Text>
          <TouchableOpacity onPress={hideModal}>
            <Text style={{fontSize:20,fontWeight:'bold',marginRight:20,}}>X</Text>

          </TouchableOpacity>

        </View>
        <View>
          <Box ph={20} mb={10}>
          <Text style={{fontSize:15,fontWeight:'bold',marginLeft:10,}}>Title</Text>
            <Box ph={10} mb={10} mt={10}>
          <TextInput
            mode={'outlined'}
            placeholder="Enter Title"
            placeholderTextColor={'grey'}
            value={text}
            onChangeText={text => setText(text)}
            style={{backgroundColor:'white'}}
          />
              </Box>
            <TouchableOpacity onPress={()=>handleFilePress()} style={styles.pickerHolder}>
              {image ?
              <Image source={{uri:image}} resizeMode={'contain'}  style={{height:50,width:200}} />

              :
              <Image source={inbox} resizeMode={'contain'} style={styles.clipIcon} />
              }

              <Text style={{fontWeight:'bold',marginTop:10,}}>Click or drag file to this area to upload</Text>
              <Flex content={'center'} mb={10}>

              <Text style={{textAlign:'center',marginTop:10}}>Support for a single or bulk upload. Strictly prohibit from uploading company data
                or other band files</Text>
              </Flex>
            </TouchableOpacity>

          </Box>
            <Flex direction={'row'} mt={0} justify={'end'} items={'center'} mr={20} mb={20}>
              <TouchableOpacity onPress={()=>setVisible(false)} style={{borderWidth:1,margin:5,marginTop:5,paddingHorizontal:20,height:35,borderRadius:20,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'black',fontSize:10}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> !loader && addNewAddOn()} style={{marginTop:5,margin:5,paddingHorizontal:20,height:35,borderRadius:20,backgroundColor:'#7B5AFF',alignItems:'center',justifyContent:'center'}}>
                {loader ?
                    <ActivityIndicator size="small" color="white" />
                    :
                <Text style={{color:'white',fontSize:10}}>Add</Text>
                }
              </TouchableOpacity>
            </Flex>
        </View>
      </Modal>
    </Portal>

    <View style={{flex:1,marginTop:10}}>
      <AddCheckIn handler={showDialog}/>
      <Box mt={10} ph={20}>
        <Text style={{fontSize:15,fontWeight:'bold'}}>Added CheckIns</Text>
      </Box>

      {dataLoader ?
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" color="blue" />
          </View>
          :

      <FlatList
        nestedScrollEnabled={true}
        data={data}
        renderItem={({ item, index })=> <Box ph={10}><SingleCard item={item}/></Box>}

      />
      }



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
