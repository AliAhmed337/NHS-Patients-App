
import React from 'react';
import {View, Text} from 'react-native';

const s = require('./stylesheet.js');

const ComponentText = (props) => (
    <View style={s.contentContainer}>
        <Text>{props.children}</Text>
    </View>
);

export {ComponentText};