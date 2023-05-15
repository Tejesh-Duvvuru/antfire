import {Dimensions} from 'react-native';
const handleSize = (num: number) => {
  if (num <= 0) return 0;
  if (num > 100) return 1;

  return num / 100;
};

const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;

const width = (num: number) => myWidth * handleSize(num);
const height = (num: number) => myHeight * handleSize(num);
const totalSize = (num: number) =>
  Math.sqrt(myHeight * myHeight + myWidth * myWidth) * handleSize(num);

export {width, height, totalSize};
