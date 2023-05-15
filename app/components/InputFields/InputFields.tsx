import React, {useState} from 'react';
import {View, Text, TextInput, ViewStyle, TextStyle} from 'react-native';
import {width, totalSize, height, fontSize} from '../../theme';
import {useTheme} from '../../hooks';

interface inputFieldProps {
  placeHolder?: string;
  errorMessage?: string;
  lableText: string;
  onTextChange(message: String): void;
  fieldIsrequired?: boolean;
  inputRef: any;
  keyboardType: 'default' | 'numeric' | 'email-address';
}

export const InputField = (prop: inputFieldProps) => {
  const {
    lableText,
    errorMessage,
    placeHolder,
    onTextChange,
    fieldIsrequired,
    inputRef,
    keyboardType,
  } = prop;
  const {colors} = useTheme();
  const [text, onChangeTextValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  // const [warning, setWarning] = useState(false);
  // console.log(text.trim());
  // console.log(isFocus);

  const onValidationMessage = (text: String) => {
    onTextChange(text);
  };

  return (
    <View style={{}}>
      <View>
        <Text
          style={{
            fontSize: fontSize.subHeading,
            color: colors.headingText,
            fontWeight: '500',
          }}>
          {lableText}
        </Text>
        <TextInput
          style={[inputStyle, {borderColor: colors.borderColor}]}
          ref={inputRef}
          value={text}
          placeholder={placeHolder ? placeHolder : `Enter ${lableText}`}
          onChangeText={onChangeTextValue}
          keyboardType={keyboardType}
          onBlur={() => {
            setIsFocus(false);
            onValidationMessage(text);
          }}
          onFocus={() => {
            setIsFocus(true);
            // onValidationMessage(text);
          }}
          // onPressOut={() => {
          //   // onValidationMessage(text);
          // }}
        />
      </View>

      {fieldIsrequired && !isFocus && !text.trim() ? (
        errorMessage ? (
          <Text>{errorMessage}</Text>
        ) : (
          <Text>*Please Enter {lableText}</Text>
        )
      ) : null}

      {/* {text.trim() ? onValidationMessage() :null} */}
    </View>
  );
};
// !text.trim() &&
//   errorMessage ? (
//   <Text>{errorMessage}</Text>
// ) : (
//   <Text>*Please Enter {lableText}</Text>
// )}
const inputStyle: TextStyle = {
  borderStyle: 'solid',
  paddingHorizontal: width(5),
  fontSize: totalSize(2),
  borderWidth: totalSize(0.2),
  borderRadius: 10,
  height: height(6),
};
