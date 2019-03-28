import React from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native'
import {WhatToExpectNew} from "../components/WhatToExpectNew";
import { connect } from 'react-redux';
import { loadExpectInfo } from "../actions";



class WhatToExpectScreen extends React.Component{

    static navigationOptions = {
        title: 'What To Expect',

        headerStyle: {
            backgroundColor: '#005EB8',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
        },
        headerTintColor: '#ffffff'
    };

    componentDidMount() {
        this._handleExpectInfoLoad();
    }

    _handleExpectInfoLoad = async () => {
        const {loadExpectInfo} = this.props;
        const userToken = await AsyncStorage.getItem('userToken');
        console.log('loadingExpectInfo');
        loadExpectInfo(this.props.navigation.state.params, userToken);
      }

    render() {
        const {expectPrep} = this.props;
        return (!expectPrep  ?  <ActivityIndicator/> :
            <WhatToExpectNew info = {expectPrep} />
        );
    }
}

const mapStateToProps = ({ prepRed }) => {
    const { expectPrep } = prepRed;
    return { expectPrep };
  }
  
  export default connect(mapStateToProps, {loadExpectInfo})(WhatToExpectScreen);