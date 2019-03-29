import React from 'react';
import {View, Image, Text} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const EventBar = ({icon_name, primary_text, secondary_text, icons_library}) => {
    const s = require('../EventStyleSheet');
    return (
        <View style={[s.minimalContentContainer]}>

            <View style={[s.iconBox, s.dateImageBox]}>
                {
                    icons_library === 'MaterialCommunityIcons' && <MaterialCommunityIcons name={icon_name} size={22} color="#424242"/>
                }
                {
                    icons_library === 'MaterialIcons' && <MaterialIcons name={icon_name} size={22} color="#424242"/>
                }
            </View>
            <View style={s.titleBox}>
                <Text>{primary_text}</Text>


                {secondary_text &&
                <View style={{flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                    <Text style={s.contentContainerSmallText} numberOfLines={1}>{secondary_text}</Text>
                </View>
                }

            </View>
        </View>
    );
};

export default EventBar;