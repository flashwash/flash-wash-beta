import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from './authProvider';
import {Routes} from './routes';
import {theme} from '../assets/theme';

/**
 * Maybe here to add theme toggle properly to all app
 */

export default function Providers() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
}
