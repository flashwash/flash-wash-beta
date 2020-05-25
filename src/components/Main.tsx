import React, {memo} from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import {I18nManager} from 'react-native';
import {useColorScheme} from 'react-native-appearance';

import {RootNavigator} from '../navigation/rootNavigator';
import {PreferencesContext} from './context/preferencesContext';

const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light',
  );
  const [rtl] = React.useState<boolean>(I18nManager.isRTL);

  function toggleTheme() {
    // eslint-disable-next-line no-shadow
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  const toggleRTL = React.useCallback(() => {
    I18nManager.forceRTL(!rtl);
  }, [rtl]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: (rtl ? 'right' : 'left') as 'right' | 'left',
    }),
    [rtl, theme, toggleRTL],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        theme={
          theme === 'light'
            ? {
                ...DefaultTheme,
                colors: {...DefaultTheme.colors, primary: '#1ba1f2'},
              }
            : {
                ...DarkTheme,
                colors: {...DarkTheme.colors, primary: '#1ba1f2'},
              }
        }>
        <RootNavigator />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default memo(Main);
