import { Image } from './image';
import { Icon } from '@core/models/Link';
import {
  faFacebookF,
  faInstagram,
  faSkype,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export const BRAND_LOGO: Image = {
  path: 'https://puertasch.com/wp-content/uploads/2021/11/Logo-Puertas-Carlos-Haro-Aparicio-mini-1.jpg',
  height: 100,
  width: 87,
  alt: 'algo',
};

export const SOCIAL_ICONS: Icon[] = [
  {
    path: 'https://www.facebook.com/carlos.h.aparicio.3',
    content: faFacebookF,
    color: '#4267B2',
  },
  {
    path: 'https://www.facebook.com/carlos.h.aparicio.3',
    content: faInstagram,
    color: '#E1306C',
  },
  {
    path: 'https://www.facebook.com/carlos.h.aparicio.3',
    content: faWhatsapp,
    color: '#25D366',
  },
  {
    content: faTelegram,
    color: '#229ED9',
    path: '',
  },
  {
    content: faSkype,
    color: '#00aff0',
    path: '',
  },
];
