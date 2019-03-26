
import React from 'react';
import { FlatList, ActivityIndicator, Text, View, ScrollView  } from 'react-native';
import { ReactRenderComponent } from './ReactRenderComponent.js';

export default class ReactRender extends React.Component {

    constructor(props){
        super(props);
        this.state ={isLoading: true}
    }

    componentDidMount(){
        if(this.props.url){
            return fetch(this.props.url, {headers: {'Cache-Control': 'no-cache'}})
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson,
                    }, function(){});
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <ScrollView style={styles.contentContainer}>
                <FlatList
                    data={this.state.dataSource.description}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ReactRenderComponent type={item.type}>{item.content}</ReactRenderComponent>}
                />
            </ScrollView>
        );

    }

}

const styles = {
    contentContainer: {
        flexDirection:'column',
        flex:1,
        alignSelf: 'stretch'
    }
};

export {ReactRender};