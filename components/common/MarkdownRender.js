import React, { Component } from 'react';
import {View, PureComponent, Text, Platform} from 'react-native';
import Markdown from 'react-native-markdown-renderer';
import { StyleSheet } from 'react-native';

const markdownstyles = StyleSheet.create({
    heading: {
        color:'rgb(15, 44, 67)',
    },
    heading1: {
        fontSize: 20,
    },
    heading2: {
        fontSize: 18,
    }
});

export default class MarkdownRender extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.contentContainer}>
                <Markdown style={markdownstyles}>{this.props.data}</Markdown>
            </View>
        );

    }

}

const styles = {
    contentContainer: {
        flexDirection:'column',
        alignSelf: 'stretch'
    }
};

export {MarkdownRender};