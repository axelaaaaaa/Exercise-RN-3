import {
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <ScrollView style={style.body}>
      <Text style={style.welcome}>Welcome</Text>

      <Text style={style.uname}>Username</Text>
      <TextInput
        style={style.inputcollumn}
        placeholder=" Masukan username anda"
        placeholderTextColor="black"
        secureTextEntry
      />
      <Text style={style.pw}>Password</Text>
      <TextInput
        style={style.inputcollumn}
        placeholder=" Masukan password anda"
        placeholderTextColor="black"
        secureTextEntry
      />
      <TouchableOpacity style={style.touchableOpacity}>
        <Text style={style.touchableText}>Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  inputcollumn: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  welcome: {
    fontSize: 50,
    fontWeight: 'bold',
    borderColor: 'black',
    color: 'black',
    textAlign: 'left',
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
  },
  touchableOpacity: {
    backgroundColor: '#ff6600',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 35,
    height: 45,
    width: 380,
  },
  touchableText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pw: {
    color: '#0d0d0d',
    textAlign: 'left',
    borderColor: 'black',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 50,
  },
  uname: {
    color: '#0d0d0d',
    textAlign: 'left',
    borderColor: 'black',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 50,
  },
});
export default App;
