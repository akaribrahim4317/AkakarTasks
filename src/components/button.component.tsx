import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
import {wp} from '../utils';
interface CustomComponentProps {
  title: string;
  loading?: boolean;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  textStyle?: any;
}
const ButtonComponent: React.FC<CustomComponentProps> = ({
  title,
  loading,
  onPress,
  disabled,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[disabled ? styles.disabledBtn : styles.btn, style]}
      disabled={disabled}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.WHITE} />
      ) : (
        <Text style={[styles.btnTxt, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('2.4%'),
    marginHorizontal: wp('5%'),
    borderRadius: wp('1%'),
  },
  btnTxt: {
    color: Colors.WHITE,
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  disabledBtn: {
    backgroundColor: Colors.GREY,
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('2.4%'),
    marginHorizontal: wp('5%'),
    borderRadius: wp('1%'),
  },
});
