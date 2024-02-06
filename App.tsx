import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Download from './aset/ferret.jpg';
import Photo from './aset/hamster.jpg';

const App = () => {
  return (
    <ScrollView style={style.body}>
      <Text style={style.hello}>Hello!</Text>

      <TextInput
        style={style.inputcollumn}
        placeholder="Please enter your Username"
        placeholderTextColor="#675e60"
      />
      <TextInput
        style={style.inputcollumn}
        placeholder="Please enter your Password"
        placeholderTextColor="#675e60"
        secureTextEntry
      />
      <View style={style.container}>
        <View style={[style.box, {backgroundColor: '#fc819c'}]} />
        <View style={[style.box, {backgroundColor: '#f53a63'}]} />
        <View style={[style.box, {backgroundColor: '#e90f3f'}]} />
      </View>
      <View style={style.buttonlog}>
        <Button title="Login" color="#f45074" />
      </View>
      <Image style={style.ferret} source={Download}/>
      <Image style={style.hamster} source={Photo}/>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: '#fdb0c1',
  },
  ferret: {
    paddingTop: 150,
    marginTop: 50,
    width: 170,
    height: 130,
    alignSelf: 'center',
    borderRadius: 30,
  },
  hamster: {
    paddingTop: 150,
    marginTop: 50,
    width: 170,
    height: 130,
    alignSelf: 'center',
    borderRadius: 30,
  },
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    marginBottom: 80,
    borderRadius: 15,
  },
  box: {
    marginTop: 5,
    width: 130,
    height: 100,
    borderRadius: 60,
  },
  inputcollumn: {
    backgroundColor: '#f8d1d9',
    borderColor: 'white',
    borderWidth: 3,
    margin: 40,
    marginTop: 20,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonlog: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  hello: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    lineHeight: 200,
    fontFamily: 'serif',
  },
});
export default App;
