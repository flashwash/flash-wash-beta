import {HomeScreen} from '../components/homeScreen';
import {NotificationDetail} from '../components/notificationDetail';
// import {deluxe} from '../assets/index';
// import delux from '../assets/deluxe.png';

type TwittProps = React.ComponentProps<typeof HomeScreen>;

export const twitts: Omit<TwittProps, 'onPress'>[] = [
  //Aqui va la descripcion de los servicios
  {
    id: 1,
    name: 'Servicio Express',
    handle: '',
    date: '',
    content: 'Servicio Express',
    image: 'https://pbs.twimg.com/media/EONH4KWX4AEV-JP?format=jpg&name=medium',
    avatar:
      'https://pbs.twimg.com/profile_images/461190672117035010/0kJ4pynr_400x400.jpeg',
    comments: 12,
    retweets: 36,
    hearts: 175,
  },
  {
    id: 2,
    name: 'Servicio Premium',
    handle: '',
    date: '',
    content: 'Servicio Premium',
    image: 'https://pbs.twimg.com/media/EONH4KWX4AEV-JP?format=jpg&name=medium',
    avatar:
      'https://pbs.twimg.com/profile_images/1203032057875771393/x0nVAZPL_400x400.jpg',
    comments: 64,
    retweets: 87,
    hearts: 400,
  },
  {
    id: 3,
    name: 'Elvin',
    handle: '@elvin_not_11',
    date: '14h',
    content:
      'Hid the home indicator from the app so the device resembles an actual iPod even more. Thanks @flipeesposito for the suggestion!',
    image:
      'https://static.antyweb.pl/uploads/2014/09/IPod_classic_6G_80GB_packaging-2007-09-22-1420x670.jpg',
    avatar:
      'https://pbs.twimg.com/profile_images/1203624639538302976/h-rvrjWy_400x400.jpg',
    comments: 23,
    retweets: 21,
    hearts: 300,
  },
  {
    id: 4,
    name: '🌈 Josh',
    handle: '@JoshWComeau',
    date: '10h',
    content:
      '🔥 Automatically use "smart" directional curly quotes with the `quotes` CSS property! Even handles nested quotes with the <q> tag :o',
    image: 'https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small',
    avatar:
      'https://pbs.twimg.com/profile_images/461190672117035010/0kJ4pynr_400x400.jpeg',
    comments: 12,
    retweets: 36,
    hearts: 175,
  },
  {
    id: 5,
    name: 'Satyajit Sahoo',
    handle: '@satya164',
    date: '20h',
    content:
      'Not sure if I should be proud or ashamed of this piece of art 😅\n\n#Typescript',
    image: 'https://pbs.twimg.com/media/EONH4KWX4AEV-JP?format=jpg&name=medium',
    avatar:
      'https://pbs.twimg.com/profile_images/1203032057875771393/x0nVAZPL_400x400.jpg',
    comments: 64,
    retweets: 87,
    hearts: 400,
  },
  {
    id: 6,
    name: 'Elvin',
    handle: '@elvin_not_11',
    date: '14h',
    content:
      'Hid the home indicator from the app so the device resembles an actual iPod even more. Thanks @flipeesposito for the suggestion!',
    image:
      'https://static.antyweb.pl/uploads/2014/09/IPod_classic_6G_80GB_packaging-2007-09-22-1420x670.jpg',
    avatar:
      'https://pbs.twimg.com/profile_images/1203624639538302976/h-rvrjWy_400x400.jpg',
    comments: 23,
    retweets: 21,
    hearts: 300,
  },
];

type NotificationTwittProps = React.ComponentProps<typeof NotificationDetail>;

export const notifications: Array<NotificationTwittProps> = [
  {
    id: 1,
    content: '⏱️ Nuestro asociado llegara a brindar tu servico en 15 mins.',
    name: 'Roberto Lopez',
  },
  {
    id: 2,
    content:
      'Recibiste un servicio de lavado Express por nuestro asociado Mario Herrera, si te gusto nuestro servicio, nos peudes dar un like en nuestra pagina de facebook 👍',
    name: 'Tomasz Łakomy',
  },
  {
    id: 3,
    content:
      '⏱️ Nuestro asociado Mario esta por llegar a tu ubicación, favor de estar atento para darle acceso a lavar el vehiculo',
    name: 'Tomasz Łakomy',
  },
  {
    id: 4,
    content:
      'Recibiste un servicio de lavado Premium por nuestro asociado Mario Herrera, si te gusto nuestro servicio, nos peudes dar un like en nuestra pagina de facebook 👍',
    name: 'Leandro Fevre',
  },
  {
    id: 5,
    content:
      'Nuestro asociado Roberto esta por terminar un servicio, estara en tu ubicación en 16 minutos',
    name: 'Tomasz Łakomy',
  },
  {
    id: 6,
    content:
      '⭐ Recibiste un servicio de encerado premium por nuestro asociado Roberto, y estas a 1 servicio e mas de obtener un servicio Deluxe por nuestra cuenta',
    name: 'Tomasz Łakomy',
  },
];
