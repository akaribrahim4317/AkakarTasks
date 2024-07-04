import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export function hp(val: string | number) {
  return heightPercentageToDP(val);
}

export function wp(val: string | number) {
  return widthPercentageToDP(val);
}
