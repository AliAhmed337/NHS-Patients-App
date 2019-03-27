import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
    gridView: {
        marginTop: 0,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    dialogTitleStyle: {
        width: 340
    }
});

export const WhatToExpectNew = ({info}) => {

    const {Title,ImageUrl, InformationText} = info;



    return (

        <ScrollView style={{flex: 1, flexDirection: 'column'}}>
            <View
                style={{width: '100%', height: '25%', position:'relative'}}
            >
                <Animatable.Image source={{uri: ImageUrl}} style={{'flex':1}} animation="fadeInDown"/>
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
                        <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>{Title}</Text>
                    </View>

                </Animatable.View>

            </View>
            <Animatable.View animation="fadeInUp" style={{paddingTop: 60, paddingLeft: 20, paddingRight: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 17, fontWeight: 'bold', paddingBottom: 20,
                    paddingTop: 30, color: 'black'}}>What to expect during the appointment ?</Text>
                <Text style={{fontSize: 15,paddingBottom: 20, color: 'black'}}>{InformationText}</Text>
            </Animatable.View>
        </ScrollView>

    );

}