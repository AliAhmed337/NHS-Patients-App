import React, { Component } from 'react';
import {View, Text, Platform} from 'react-native';
import Markdown, {getUniqueID} from 'react-native-markdown-renderer';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    heading: {},
    heading1: {
        color: '#345434',
        fontSize: 32,
    },
    heading2: {
        fontSize: 24,
    },
    heading3: {
        fontSize: 18,
    },
});

const rules = {
    heading1: (node, children, parent, styles) =>
        <Text key={getUniqueID()} style={[styles.heading, styles.heading1]}>
            {children}
        </Text>,
    heading2: (node, children, parent, styles) =>
        <Text key={getUniqueID()} style={[styles.heading, styles.heading2]}>
            {children}
        </Text>,
    heading3: (node, children, parent, styles) =>
        <Text key={getUniqueID()} style={[styles.heading, styles.heading3]}>
            {children}
        </Text>,
    paragraph: (node, children, parent, styles) =>
        <Text key={getUniqueID()} style={[styles.paragraph]}>
            {children}
        </Text>,
    bullet: (node, children, parent, styles) =>
        <Text key={getUniqueID()} style={[styles.bullet]}>
            {children}
        </Text>,
};

export default class MarkdownRender extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                {this.props.children && <Markdown rules={rules} style={styles}>{this.props.children}</Markdown>}
            </View>
        );
    }

}

export {MarkdownRender};