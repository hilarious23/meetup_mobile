import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity  } from 'react-native';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

class TopScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Join!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  loginContent: {
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  button: {
    backgroundColor: '#ff6600',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '67%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize:18,
  },
  createAccount: {
    alignSelf: 'center',
  },
  createAccountText: {
    fontSize: 16,
  },
});

export default TopScreen;
