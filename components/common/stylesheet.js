import {Text} from "react-native";

const React = require('react-native');
const styles = {

    contentContainer: {
        flexDirection:'row',
        position: "relative",
        paddingBottom:10,
        alignItems:'center',
        justifyContent: 'flex-start',
        flex:1
    },

    indent: {
        borderLeftWidth: 5,
        borderColor: "#1E88E5",
        backgroundColor: "#BBDEFB",
        padding: 10,
        paddingLeft: 10,
        marginTop: 3,
        marginBottom: 3,
        flex:1
    },

    dateImageBox:{
        flex: 0,
        width:10,
        marginRight:15,
    },

    titleBox: {
        flexDirection:'column',
        justifyContent:'flex-start',
        flex:1,
    },

    heading: {
        color:'rgb(15, 44, 67)',
        fontSize:20,
        marginTop:10
    },

    heading2: {
        color:'rgb(15, 44, 67)',
        fontSize:18,
        marginTop:5
    }

};

module.exports = styles;