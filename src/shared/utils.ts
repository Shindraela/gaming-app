import androidLogo from '../assets/android.svg';
import iosLogo from '../assets/ios.svg';
import linuxLogo from '../assets/linux.svg';
import macOsLogo from '../assets/mac.svg';
import nintendoLogo from '../assets/nintendo.svg';
import pcLogo from '../assets/pc.svg';
import playstationLogo from '../assets/playstation.svg';
import xboxLogo from '../assets/xbox.svg';
import { BASE_URL } from './constants';

const setPlatformLogo = (slug: string) => {
  let logo;
  slug = slug.toLocaleLowerCase();

  if (slug.includes('android')) {
    logo = androidLogo;
  } else if (slug.includes('ios')) {
    logo = iosLogo;
  } else if (slug.includes('linux')) {
    logo = linuxLogo;
  } else if (slug.includes('macos')) {
    logo = macOsLogo;
  } else if (
    slug.includes('nintendo') ||
    slug.includes('gamecube') ||
    slug.includes('wii')
  ) {
    logo = nintendoLogo;
  } else if (slug.includes('pc')) {
    logo = pcLogo;
  } else if (slug.includes('playstation') || slug.includes('vita')) {
    logo = playstationLogo;
  } else if (slug.includes('xbox')) {
    logo = xboxLogo;
  } else {
    logo = 'null';
  }

  return logo;
};

const setGameDetailsUrl = (gameName: string) => `${BASE_URL}/games/${gameName}`;

export { setPlatformLogo, setGameDetailsUrl };
