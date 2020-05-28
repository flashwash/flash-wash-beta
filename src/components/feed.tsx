import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
// import {StackNavigationProp} from '@react-navigation/stack';
import {useTheme} from 'react-native-paper';

import {HomeScreen} from './homeScreen';
// import {twitts} from '../Data';
// import {StackNavigatorParamlist} from '../types';

type TwittProps = React.ComponentProps<typeof HomeScreen>;

function renderItem({item}: {item: TwittProps}) {
  return <HomeScreen {...item} />;
}

// function keyExtractor(item: TwittProps) {
//   return item.id.toString();
// }

// type Props = {
//   navigation?: StackNavigationProp<StackNavigatorParamlist>;
// };

export const Feed = () => {
  const theme = useTheme();

  // const data = twitts.map(twittProps => ({
  //   ...twittProps,
  //   onPress: () =>
  //     props.navigation &&
  //     props.navigation.push('Details', {
  //       ...twittProps,
  //     }),
  // }));

  const data = [
    {
      id: 'djsdgh',
      title: 'First Item',
    },
  ];
  return (
    <FlatList
      contentContainerStyle={{backgroundColor: theme.colors.background}}
      style={{backgroundColor: theme.colors.background}}
      data={data}
      renderItem={renderItem}
      // keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{height: StyleSheet.hairlineWidth}} />
      )}
    />
  );
};
