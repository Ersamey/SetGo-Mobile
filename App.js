import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Login from './Pages/login';
import Register from './Pages/register';
import Welcome from './Pages/welcome';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <Login />
        <Register /> */}
        <Welcome />
      </ScrollView>
    </View>
  );
};

export default App;
