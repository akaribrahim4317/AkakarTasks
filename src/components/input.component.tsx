import React from 'react';
import { Text, TextInput, StyleSheet, TextInputProps, View } from 'react-native';
import { wp, hp } from '../utils';
import { Colors } from '../constants';
interface CustomComponentProps {
  text: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  placeholderTextColor?: string;
  inputStyle?: TextInputProps['style'];
  type?: TextInputProps['keyboardType'];
  editable?: TextInputProps['editable'];
  maxLength?: number;
  secureTextEntry?: boolean;
}

const Input: React.FC<CustomComponentProps> = ({
  text,
  value,
  setValue,
  placeholder,
  placeholderTextColor = Colors.BLACK, // Default placeholder text color
  inputStyle,
  type,
  editable,
  maxLength,
  secureTextEntry,
}) => {
  return (
    <View>
      <Text
        style={{
          marginHorizontal: wp('5%'),
          color: Colors.PRIMARY,
        }}>
        {text}
      </Text>
      <TextInput
        keyboardType={type}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.inputSettings, inputStyle]}
        editable={editable}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputSettings: {
    color: Colors.BLACK,
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 10,
    marginHorizontal: wp('5%'),
    borderRadius: hp('0.7%'),
    marginTop: hp('1%'),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.PRIMARY,
    marginBottom: hp('2%'),
  },
});

export default Input;
