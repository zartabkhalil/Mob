import React from 'react';
import Popover from 'react-native-popover-view';
import {Image, Keyboard, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {
    Box,
    Flex,
    ListItem,
    Text as PaperText,
} from '@react-native-material/core';
import {useNavigation} from "@react-navigation/native";
//@ts-ignore
 import chervie from '../../assets/ch.png';
import Avatar from '../../assets/Av.png';
const UserInfo = () => {
    return  <Box ph={10} mt={10} mr={10}>
        <TouchableOpacity  activeOpacity={1} style={[styles.backArrow]}>
            <Image source={Avatar} style={{height:50,width:50,borderRadius:50}} resizeMode={'contain'} />
            <Image source={chervie} style={{height:20,width:20 ,marginTop:15}} resizeMode={'contain'} />
        </TouchableOpacity>
    </Box>
};


const styles=StyleSheet.create({

    backArrow:{

        flexDirection:'row'
    },


})

export default UserInfo;

