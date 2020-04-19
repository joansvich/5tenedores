import React from 'react';
import Navigation from './app/navigations/Navigation';
import { firebaseApp } from './app/utils/firebase';
import * as firebase from 'firebase';

export default function App() {
  if (!firebase.apps.length) {
    firebaseApp;
    console.log('Iniciando firebase');
  }
  return <Navigation />;
}
