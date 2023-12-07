import androidLogo from '../assets/android.svg';
import iosLogo from '../assets/ios.svg';
import linuxLogo from '../assets/linux.svg';
import macOsLogo from '../assets/mac.svg';
import nintendoLogo from '../assets/nintendo.svg';
import pcLogo from '../assets/pc.svg';
import playstationLogo from '../assets/playstation.svg';
import xboxLogo from '../assets/xbox.svg';
import webLogo from '../assets/web.svg';

const setPlatformLogo = (slug: string): string => {
  let logo;
  slug = slug.toLocaleLowerCase();

  if (slug.includes('android')) {
    logo = androidLogo;
  } else if (slug.includes('ios')) {
    logo = iosLogo;
  } else if (slug.includes('linux')) {
    logo = linuxLogo;
  } else if (slug.includes('macos') || slug.includes('mac')) {
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
  } else if (slug.includes('web')) {
    logo = webLogo;
  } else {
    logo = '';
  }

  return logo;
};

const setGameDetailsUrl = (sectionName: string, gameSlug: string): string =>
  `/${sectionName}/${gameSlug}`;

const formattedDate = (date: string): string => {
  const currentDate = new Date(date);

  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(currentDate);
};

export { setPlatformLogo, setGameDetailsUrl, formattedDate };
