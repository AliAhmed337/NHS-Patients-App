import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation
} from 'react-native-popup-dialog';


export default class MenuPopUpBox extends Component {
  state = {
    slideAnimationDialog: this.props.visible,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Dialog
          onDismiss={() => {
            this.setState({ slideAnimationDialog: false });
          }}
          onTouchOutside={() => {
            this.setState({ slideAnimationDialog: false });
          }}
          visible={this.state.slideAnimationDialog}
          dialogTitle={<DialogTitle title="Popup Dialog - Slide Animation" />}
          dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
        >
          <DialogContent>
            <Text>Slide Animation</Text>
          </DialogContent>
        </Dialog>
      </View>
    );
  }
}
