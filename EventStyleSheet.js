'use strict';

const React = require('react-native');
const styles = {
    card: {
        backgroundColor:"#fff",
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 5
    },

    coverImageContainer: {flexDirection:'column'},
    coverImage: {flex: 0},

    contentContainer: {flexDirection:'row',position: "relative",padding:10,alignItems:'center',justifyContent: 'flex-start',flex:1},

    minimalContentContainer: {flexDirection:'row',position: "relative",
        paddingTop:5,paddingBottom:5,paddingRight:10,paddingLeft:10,
        alignItems:'center',justifyContent: 'flex-start'},

    upperBorder: {borderTopWidth: 0.5,borderColor: '#d6d7da',paddingTop: 5,paddingBottom:5},

    contentContainerEventTitle:{fontSize:18},

    dateBoxDay:{
        textAlign:"center",
        fontSize:18,
    },

    dateBoxMonth:{
        textAlign:"center",
        color:"#F44336"
    },

    contentContainerSmallText: {
        color:"#757575",
        flex:0
    },

    dateImageBox:{
        flex: 0,
        width:32,
        marginRight:15,
    },

    dateBox: {
        flexDirection:'column',
        justifyContent:'flex-start',
    },

    iconBox: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:20,
    },

    titleBox: {
        flexDirection:'column',
        justifyContent:'flex-start',
        flex:1,
    },

    sponsorLogo: {
        position: "absolute",
        height: 50,
        width:50,
        right:10,
        top:-20,
        flex: 1,
        borderRadius:25,
        backgroundColor:"#F44336",
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },


    aboveTheFold: {
        justifyContent:'flex-start',
        flex:1,
        padding:15,
        paddingBottom:0,
        flexDirection:'row',
    },

    postProfileImage: {
        height:40,
        width:40,
        borderRadius:15,
    }

};

module.exports = styles;