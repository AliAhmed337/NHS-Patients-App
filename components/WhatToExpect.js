import React from 'react';
import { Text, View, Image} from 'react-native';
import styles from "../StyleSheet";

export const WhatToExpect = ({info}) => {

    const {Title,ImageUrl, InformationText} = info;


   return (

       <View  style={{alignItems: 'center'}}>
           <View style={{paddingBottom: 30}}>
           <Text style={{textAlign: 'center', fontFamily: 'pp', paddingTop: 30, fontWeight: 'bold'}}>{Title}</Text>
           </View >
           <Image style={{height: 200, width:200, paddingBottom: 30}} source={{uri: ImageUrl} }/>
           <Text style={{fontFamily: 'pp',paddingBottom: 30, paddingTop: 30}}>{InformationText}</Text>
       </View>

   );

}
