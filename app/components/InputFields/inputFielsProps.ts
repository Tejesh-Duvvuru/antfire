import type {
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextStyle,
} from 'react-native';

export interface InputFieldProps extends TextInputProps {
  placeholderName: string;
  labelName?: string;
  disableFocus?: boolean;
  onChangeText?(text: string): void;
  /*
   * This is container style
   */
  container?: StyleProp<ViewStyle>;
  /*
   * this props help to style placeholder
   */
  placeholderStyle?: StyleProp<TextStyle>;
  /*
   * with the help to style labelName
   */
  labelStyle?: StyleProp<TextStyle>;
  underlineColor?: string;
  placeholderTextColor?: string;
  /*
   * inputType will handle all the customized scenarios of email and password it will handle all required things
   */
  inputType: 'password' | 'email' | 'custom';
}
