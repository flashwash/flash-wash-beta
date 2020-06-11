import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from './authProvider';
import {Routes} from './routes';
// import {theme} from '../assets/theme';

/**
 * Wrap all providers here
 */

export default function Providers() {
  return (
    <PaperProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
}
