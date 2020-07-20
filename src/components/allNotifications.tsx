import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

import {NotificationDetail} from './notificationDetail';
import {notifications} from '../Data';

type NotificationTwittProps = React.ComponentProps<typeof NotificationDetail>;

// function renderItem({item}: {item: NotificationTwittProps}) {
//   return <NotificationDetail {...item} />;
// }

const renderItem = ({item}: {item: NotificationTwittProps}) => {
  return <NotificationDetail {...item} />;
};

function keyExtractor(item: NotificationTwittProps) {
  return item.id.toString();
}

export const AllNotifications = () => {
  const theme = useTheme();

  return (
    <FlatList
      contentContainerStyle={{backgroundColor: theme.colors.background}}
      style={{backgroundColor: theme.colors.background}}
      data={notifications}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{height: StyleSheet.hairlineWidth}} />
      )}
    />
  );
};
