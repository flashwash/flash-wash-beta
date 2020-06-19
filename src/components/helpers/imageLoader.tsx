import storage from '@react-native-firebase/storage';

export const economyUrl = async () => {
  await storage()
    .ref('images/profile-1.png')
    .getDownloadURL();
};
