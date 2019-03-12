import React from "react";
import {Text, View, Image, ScrollView} from 'react-native';
import {WhatToExpect} from "../components/WhatToExpect";
import {AppointmentCard} from "../components/AppointmentCard";
import {Button, ThemeProvider} from "react-native-elements";


export default class WhatToExpectScreen extends React.Component{

    static navigationOptions = {
        title: 'What To Expect',

        headerStyle: {
            backgroundColor: '#007dff',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
        },
    };


    render() {
        return (
           <WhatToExpect info = {info.HeartScan} />
        );
    }
}


const info = {
    HeartScan: {
        Title: 'Heart CT Scan',
        ImageUrl: 'https://www.macmillan.org.uk/_images/MACP031_CT-scan-B_tcm9-320585.jpg',
        InformationText: 'During the scan, you\'ll usually lie on your back on a flat bed that passes into the CT scanner.\n' +
            '\n' +
            'The scanner consists of a ring that rotates around a small section of your body as you pass through it.\n' +
            '\n' +
            'Unlike an MRI scan, the scanner doesn\'t surround your whole body at once, so you shouldn\'t feel claustrophobic.\n' +
            '\n' +
            'The radiographer will operate the scanner from the next room. While the scan is taking place, you\'ll be able to hear and speak to them through an intercom.\n' +
            '\n' +
            'While each scan is taken, you\'ll need to lie very still and breathe normally. This ensures that the scan images aren\'t blurred.\n' +
            '\n' +
            'You may be asked to breathe in, breathe out, or hold your breath at certain points.\n' +
            '\n' +
            'The scan will usually take around 10 to 20 minutes.',
    },

};