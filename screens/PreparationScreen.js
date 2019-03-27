import React from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import ReactRender from '../components/common/ReactRender/ReactRender';
import { GuidanceTopInfo } from '../components/guidance_elements';

class PreparationScreen extends React.Component {

  static navigationOptions = {
    title: 'Guide',
  };

  componentDidMount(){
		console.log('mounting guidance' + this.props.guidancePrep);
	}

  render() {
    return (
      <View style={{ margin: 5 }}>
      <StatusBar barStyle="light-content" />
        <View>
          <ScrollView>
            <GuidanceTopInfo/>
            {/* THIS IS WHERE WE BULLET POINT INGREDIENTS IN A FLATLIST */}
            <ReactRender 
            style={{height: undefined, width: undefined}}
            data={this.props.guidancePrep}/>
          </ScrollView>
        </View>
      </View>      
    );
  }
}

const mapStateToProps = ({ prepRed }) => {
  const { guidancePrep } = prepRed;
  return { guidancePrep };
}

export default connect(mapStateToProps)(PreparationScreen);