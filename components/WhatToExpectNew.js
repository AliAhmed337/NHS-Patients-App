import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MarkdownRender from "./common/MarkdownRender";

export const WhatToExpectNew = ({info}) => {

    const {name,image, description, expect} = info;
    console.log(expect);
    return (

        <ScrollView style={{flex: 1, flexDirection: 'column'}}>
            <View
                style={{width: '100%', height: '25%', position:'relative'}}
            >
                {
                    image ? 
                    <Animatable.Image source={{uri: image}} style={{flex:1}} animation="fadeInDown"/>
                    :  <Animatable.View style = {{backgroundColor:'#005EB8', flex: 1}} animation ="fadeInDown"/>
                }
                
                <Animatable.View
                    animation="fadeInUp"
                    style={{
                        position:'absolute',
                        top: '85%',
                        left: 20,
                        right: 20,
                        borderRadius: 10,
                        backgroundColor: '#fff',
                        flexDirection: 'column'
                    }}
                >

                    <View style={{backgroundColor: '#005EB8', alignItems: 'center', paddingHorizontal: 50,paddingVertical: 10}}>
                        <Text style={{textAlign: 'center', fontSize: 16, color: 'white'}}>Your Appointment:</Text>
                    </View>
                    <View style={{borderColor: '#005EB8', borderWidth: 5, alignItems: 'center', paddingHorizontal: 50, paddingVertical: 10}}>
                        <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>{name}</Text>
                    </View>

                </Animatable.View>

            </View>
            <Animatable.View animation="fadeInUp" style={{paddingTop: 60, paddingLeft: 20, paddingRight: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 17, fontWeight: 'bold', paddingBottom: 5,
                    paddingTop: 30, color: 'black'}}>What to expect during the appointment ?</Text>
                {/* <Text style={{fontSize: 15,paddingBottom: 20, color: 'black'}}>{description}</Text> */}
                    <MarkdownRender style={{flex: 1}}> {expect}</MarkdownRender>
            </Animatable.View>
        </ScrollView>

    );

}