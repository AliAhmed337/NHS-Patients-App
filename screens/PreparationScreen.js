import React from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import MarkdownRender from '../components/common/MarkdownRender';
import { GuidanceTopInfo } from '../components/guidance_elements';

/**
 * The screen that the user is first taken to upon clicking on a
 * preparatory task in the timeline. It serves to display generic
 * guidance to the user on how to go about these stages.
 */
class PreparationScreen extends React.Component {

  static navigationOptions = {
    title: 'Guide',
  };

  componentDidMount(){
		console.log('mounting guidance' + this.props.guidancePrep);
	}

  render() {
    return (
      <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
          {/* <ScrollView>
            <GuidanceTopInfo/>
            <MarkdownRender
            style={{height: undefined, width: undefined}}
            data={this.props.guidancePrep}/>
          </ScrollView> */}
          <ScrollView style={{flex: 1, flexDirection: 'column'}}>
          <GuidanceTopInfo/>
            <View style={{paddingTop: 60, paddingLeft: 20, paddingRight: 20, alignItems: 'center'}}>
                    <MarkdownRender style={{flex: 1}}>{this.props.guidancePrep}</MarkdownRender>
            </View>
        </ScrollView>
        </View>
    );
  }
}

const mapStateToProps = ({ prepRed }) => {
  const { guidancePrep } = prepRed;
  return { guidancePrep };
}

export default connect(mapStateToProps)(PreparationScreen);