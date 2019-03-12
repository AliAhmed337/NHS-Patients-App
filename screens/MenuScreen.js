import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ListView,
  FlatList
} from 'react-native';
import { FoodMenuTopInfo } from '../components/foodmenu_elements';
import FoodMenuList from '../components/FoodMenuList';


export default class MenuScreen extends React.Component {

    static navigationOptions = {
        title: 'Menu',
      };

  render(){
    return(
      <View style={{ flex: 1 }}>
        <View>
          <FoodMenuTopInfo />
        </View>
          <View>
            <FoodMenuList />
          </View>
      </View>
    );
  }
}