import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ImageBackground } from 'react-native';

class SignupLoginScreen extends React.Component {
  handlePress() {
    this.props.navigation.navigate('SignUp');
  }
  handleClick() {
    this.props.navigation.navigate('LogIn');
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/SignupLogin.png')}
        style={styles.photo}>
        <View style={styles.container}>
          <Text style={styles.backText1}>さあ、</Text>
          <Text style={styles.backText2}>「ツナガル」を創ろう。</Text>
          <Text style={styles.backText3}>今日は何をする？</Text>
          <TouchableHighlight
           style={styles.loginbutton}
           onPress={this.handleClick.bind(this)}
           underlayColor='#e25a00'
          >
            <Text style={styles.loginText}>ログインする</Text>
          </TouchableHighlight>
          <TouchableHighlight
           style={styles.signupbutton}
           onPress={this.handlePress.bind(this)}
           underlayColor='#e25a00'
          >
           <Text style={styles.signupText}>アカウントを作成する</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  backText1: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  backText2: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  backText3: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  photo: {
    flex: 1,
    alignItems: 'stretch',
    opacity: 0.66,
    zIndex: -1,
  },
  loginbutton: {
    top: 120,
    backgroundColor: '#F5A623',
    height: 48,
    borderRadius: 31.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '72%',
    alignSelf: 'center',
    opacity: 0.66,
  },
  signupbutton: {
    top: 160,
    backgroundColor: '#F5A623',
    height: 48,
    borderRadius: 31.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '72%',
    alignSelf: 'center',
    opacity: 0.66,
  },
  loginText: {
    color: '#fff',
    fontSize:18,
    opacity: 1,
  },
  signupText: {
    color: '#fff',
    fontSize:18,
    opacity: 1,
  },
});

export default SignupLoginScreen;
