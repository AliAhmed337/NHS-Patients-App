import React, { Component } from 'react';
import { FlatList, View, Text, Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { GuidanceTopInfo, GuidanceContainer } from './guidance_elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class GuidanceList extends Component {

	componentDidMount(){
		console.log('mounting guidance' + this.props.guidancePrep);
	}

	renderRows(item) {
		if (item.subarray !== null) {
			return item.subarray.map(row =>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="bullseye-arrow" size={16} color="green" />
					<Text style={{ fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif', flex: 1, paddingLeft: 5, fontSize: 15, margin: 3, color: '#00315F' }}>{row}</Text>
				</View>
			);
		}
	}

	renderHeader() {
		return (
			<View>
				<GuidanceTopInfo />
			</View>
		);
	}

	render() {
		return (
			<View>
				<FlatList

				 style={styles.listStyle}
				 data={this.props.guidancePrep}
				 ListHeaderComponent={this.renderHeader()}
				 renderItem={({item}) =>
				 <View style={{ margin: 5 }}>
				  	<GuidanceContainer title={item.title} content={item.content} />
				  	<View>{this.renderRows(item)}</View>
				  </View>
				}
				/>
			</View>
		);
	}
}

const styles = {
	listStyle: {
		marginBottom: 10
	}
};

const mapStateToProps = ({ prepRed }) => {
    const { guidancePrep } = prepRed;
    return { guidancePrep };
}

export default connect(mapStateToProps)(GuidanceList);