
import React from 'react';
import {View, Text} from 'react-native';

const s = require('./stylesheet.js');

const ComponentHeadingTwo = (props) => (
    <View style={s.contentContainer}>
        <Text style={s.heading2}>{props.children}</Text>
    </View>
);

export {ComponentHeadingTwo};