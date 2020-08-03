export type StackNavigatorParamlist = {
  FlashWash: undefined;
  // Details: {
  //   id: number;
  //   name: string;
  //   handle: string;
  //   date: string;
  //   content: string;
  //   image: string;
  //   avatar: string;
  //   comments: number;
  //   retweets: number;
  //   hearts: number;
  // };
  Servicios: undefined;
  Mensajes: undefined;
  Profile: undefined;
  userAddresses: undefined;
  userAddressesAdd: undefined;
};

export type Navigation = {
  navigate: (scene: string) => void;
};
