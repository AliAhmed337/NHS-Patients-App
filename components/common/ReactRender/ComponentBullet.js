import React from 'react';
import {View, Text} from 'react-native';

const s = require('./stylesheet.js');

const ComponentBullet = (props) => (
    <View style={s.contentContainer}>
        <View style={s.dateImageBox}>
            <Text style={{fontSize:20}}>{"•"}</Text>
        </View>
        <View style={s.titleBox}>
            <Text>{props.children}</Text>
        </View>
    </View>
);

export {ComponentBullet};