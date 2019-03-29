import React, { Component } from 'react';
import {View, PureComponent, Text, Platform} from 'react-native';
import MarkdownRenderer from 'react-native-markdown-renderer';
import { StyleSheet } from 'react-native';

const markdownstyles = StyleSheet.create({
    paragraph: {
        color:'rgb(15, 44, 67)',
    },
    heading: {
        color:'rgb(15, 44, 67)',
    },
    heading1: {
        color: '#345434'
    },
    h3: {
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
                {this.props.data && <MarkdownRenderer>{this.props.data}</MarkdownRenderer>}
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