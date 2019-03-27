
import React from 'react';
import {View, Text} from 'react-native';

const s = require('./stylesheet.js');

const ComponentIndent = (props) => (
    <View style={s.contentContainer}>
        <View style={s.indent}>
            <Text>{props.children}</Text>
        </View>
    </View>
);

export {ComponentIndent};