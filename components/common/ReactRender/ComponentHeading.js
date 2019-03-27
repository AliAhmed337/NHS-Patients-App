import React from 'react';
import {View, Text} from 'react-native';

const s = require('./stylesheet.js');

const ComponentHeading = (props) => (
    <View style={s.contentContainer}>
        <Text style={s.heading}>{props.children}</Text>
    </View>
);

export {ComponentHeading};