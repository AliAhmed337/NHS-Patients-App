import React from 'react';
import { View } from 'react-native';
import { ComponentText } from './ComponentText.js';
import { ComponentBullet } from './ComponentBullet.js';
import { ComponentHeading } from './ComponentHeading.js';
import { ComponentHeadingTwo } from './ComponentHeading2.js';
import { ComponentIndent } from './ComponentIndent.js';

export default class ReactRenderComponent extends React.Component {

    constructor(props){
        super(props);
    }

    displayJsxMessage() {
        if (this.props.type && this.props.type == "bullet")
            return <ComponentBullet>{this.props.children}</ComponentBullet>;

        if (this.props.type && this.props.type == "heading")
            return <ComponentHeading>{this.props.children}</ComponentHeading>;

        if (this.props.type && this.props.type == "heading2")
            return <ComponentHeadingTwo>{this.props.children}</ComponentHeadingTwo>;

        if (this.props.type && this.props.type == "indent")
            return <ComponentIndent>{this.props.children}</ComponentIndent>;

        return <ComponentText>{this.props.children}</ComponentText>;
    }

    render() {
        return <View>{this.displayJsxMessage()}</View>;
    };

}

export {ReactRenderComponent};