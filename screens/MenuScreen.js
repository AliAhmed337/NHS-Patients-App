import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import { connect } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';
import ImageOverlay from "react-native-image-overlay";

class MenuScreen extends Component {

  static navigationOptions = {
    title: 'Menu',
  };

  onPressFunction(item) {
    const {navigation} = this.props;
    navigation.navigate('IndividualMenuItem', item);
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
      <FlatGrid
        itemDimension={130}
        items={this.props.menuPrep}
        style={styles.gridView}
        renderItem={({ item , index }) => (
            <View style={{flex: 1}}>
            <TouchableOpacity 
                style={[styles.itemContainer, { backgroundColor: item.code }]}
                onPress={() => this.onPressFunction(item)}
            >
                <ImageOverlay 
                  source={{ uri:item.image}} 
                  title={item.name}
                  titleStyle={{fontWeight: 'bold' }}
                  containerStyle={{ flex: 1, width: undefined, height: undefined, borderRadius: 5}} 
                >
                </ImageOverlay>
            </TouchableOpacity>
            </View>
        )}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 0,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

const mapStateToProps = ({ prepRed }) => {
  const { menuPrep } = prepRed;
  return { menuPrep };
}

export default connect(mapStateToProps)(MenuScreen);