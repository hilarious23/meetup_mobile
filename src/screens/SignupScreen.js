import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity  } from 'react-native';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'TopPage' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlePress() {
    this.props.navigation.navigate('TopPage');
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.loginContent}>
          <Text style={styles.title}>Join!</Text>
          <TextInput
          style={styles.input}
            onChangeText={(text) => { this.setState({ email:text }); }}
            value = {this.state.email}
            placeholder='Email Address'
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid='transparent'
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => { this.setState({ password:text }); }}
            value = {this.state.password}
            placeholder='Password'
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            underlineColorAndroid='transparent'
          />
          <TouchableHighlight
           style={styles.button}
           onPress={this.handleSubmit.bind(this)}
           underlayColor='#e25a00'
          >
           <Text style={styles.buttonText}> Signup! </Text>
          </TouchableHighlight>
        </View>
        <TouchableOpacity
          style={styles.createAccount}
          onPress={this.handlePress.bind(this)}>
          <Text style={styles.createAccountText}>Login</Text>
        </TouchableOpacity>
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

export default SignupScreen;
