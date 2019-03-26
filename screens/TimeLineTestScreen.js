import React from 'react';
import { View, StyleSheet, AsyncStorage, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { requestPreparations, loadPrepInfo } from "../actions";
import Timeline from 'react-native-timeline-listview';


class TimeLineTestScreen extends React.Component {
    constructor(props){
        super(props)
      } 
    
      static navigationOptions = {
        title: 'Timeline',
  
        headerStyle: {
            backgroundColor: '#005EB8',
            borderBottomWidth: 0,
            elevation: 0,

        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',

        },
        headerTintColor: '#ffffff',
    };

    componentDidMount(){
      this._handlePreparationRequest();
    }

    _handlePreparationRequest = async () => {
      const {requestPreparations} = this.props;
      const userToken = await AsyncStorage.getItem('userToken');
      requestPreparations(this.props.navigation.state.params, userToken);
    }

    _handleOnPress(data){
      const {loadPrepInfo, navigation} = this.props;
      loadPrepInfo(data);
      navigation.navigate('Preparation');
    }
    
      render() {
        const {preparations} = this.props;
        return (!preparations  ?  <ActivityIndicator/> :
        
          <View style={styles.container}>
            <Timeline 
              style={styles.list}
              data={this.props.preparations.preparatoryTasks}
              circleSize={20}
              circleColor='rgb(45,156,219)'
              lineColor='rgb(45,156,219)'
              timeContainerStyle={{minWidth:52, marginTop: -5}}
              timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
              descriptionStyle={{color:'gray'}}
              options={{
                style:{paddingTop:5},
                removeClippedSubviews: false
              }}
              onEventPress={(data) => this._handleOnPress(data)} //this is where navigation happens
            />
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 5,
        backgroundColor:'#E8EDEE',
      },
      list: {
        flex: 1,
      },
    });

    const mapStateToProps = ({ prepRed }) => {
      const { preparations, loading } = prepRed;
      return { preparations, loading };
    }
    
    export default connect(mapStateToProps, { requestPreparations, loadPrepInfo })(TimeLineTestScreen);
