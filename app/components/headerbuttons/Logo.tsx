import React from 'react';
import {Image, Keyboard, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
    Box,
    Flex,
    ListItem,
    Text as PaperText,
} from '@react-native-material/core';
import {useNavigation} from "@react-navigation/native";
//@ts-ignore
const Logo = () => {
    const navigation =useNavigation()
    return  <Box ph={10} mt={10}>
        <TouchableOpacity activeOpacity={1} style={[styles.backArrow]}>
           <Text style={{color:'white'}}>Login</Text>
        </TouchableOpacity>
    </Box>
};


const styles=StyleSheet.create({

    backArrow:{

        backgroundColor:'#7B5AFF',
        height:50,
        padding:10,
        paddingVertical:10,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:7,
    },


})

export default Logo;
