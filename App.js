/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Picker',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take photo',
  chooseFromLibraryButtonTitle: 'Library',
  mediaType: 'photo',
  storageOptions: { cameraRoll: true }
};

class App extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={ () => this.onPress() }>
          <Text>Press me</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPress() {
    ImagePicker.showImagePicker(
      options, response => {}
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
