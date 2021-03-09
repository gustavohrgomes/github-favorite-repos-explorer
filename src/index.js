/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F03C02" />
      <Routes />
    </>
  );
}
