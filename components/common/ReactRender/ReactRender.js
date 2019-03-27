
import React from 'react';
import { FlatList, ScrollView, View  } from 'react-native';
import { ReactRenderComponent } from './ReactRenderComponent.js';

export default class ReactRender extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
      

        // Instead of URL , here we pass in data for food dish individual methods
        //Also used for guidance
        //And what to expect at one point
        return(
            <View style={styles.contentContainer}>
                <FlatList 
                    data={this.props.data}
                    keyExtractor={item => item.series_ordinal}
                    renderItem={({item}) => <ReactRenderComponent type={item.type}>{item.content}</ReactRenderComponent>}
                />
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

export {ReactRender};