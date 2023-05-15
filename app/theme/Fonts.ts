import {isTablet} from 'react-native-device-info';
import {totalSize} from './Dimensions';

export const mobileFontSize = {
  heading: totalSize(2.68), //10px in figma
  subHeading: totalSize(1.8),
  minSubHeading: totalSize(1.5),
  text: totalSize(2.1),
};

export const tabletFontSize = {
  heading: totalSize(2.68), //10px in figma
  subHeading: totalSize(1.8),
  minSubHeading: totalSize(1.6),
  text: totalSize(2.1),
};

// export const tabletFontSize: number[] = [
//   totalSize(0.89), //10px in figma
//   totalSize(1.05), //12px in figma
//   totalSize(1.25), // 14px in figma
//   totalSize(1.4), // 16px in figma
//   totalSize(1.6), // 18px in figma
//   totalSize(1.76), //20px in figma
//   totalSize(2.1), //24px in figma
//   totalSize(2.6), //30px in figma
//   totalSize(2.8), //32px in figma
// ];

export const fontSize = isTablet() ? tabletFontSize : mobileFontSize;
