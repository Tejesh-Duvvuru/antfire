import {useState, useRef, useEffect, ReactElement} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from 'react-native';
import {width, height, totalSize, fontSize} from '../../theme';
import Icon from 'react-native-vector-icons/Feather';
import MeterialIcon from 'react-native-vector-icons/MaterialIcons';
import Cross from 'react-native-vector-icons/Entypo';
import {useTheme} from '../../hooks';

interface DropDownBoxStyles {
  borderColor?: string;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
  borderWidth?: number;
  borderRadius?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

interface DropDownTextStyle {
  fontSizeStyle?: number;
  fontWeight?:
    | '500'
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  fontColor?: string;
}

interface DropDownArrowIconSizeStyle {
  IconSize?: number;
  IconColor?: string;
}

interface Data {
  id: string;
  value: string;
  icon?: ReactElement | string | undefined;
}

interface DropDownProps {
  DropDownBoxStyles?: DropDownBoxStyles;
  Data: Data[];
  PlaceHolder?: string;
  DropDownTextStyle?: DropDownTextStyle;
  DropDownArrowIconSizeStyle?: DropDownArrowIconSizeStyle;
  onChangeValue(item: any): void;
  value: string;
}

const InputDropDown = (props: DropDownProps) => {
  const {
    DropDownBoxStyles,
    PlaceHolder,
    Data,
    DropDownTextStyle,
    DropDownArrowIconSizeStyle,
    value,
    onChangeValue,
  } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({top: 0, left: 0});
  const [modalWidth, setModalWidth] = useState(200);
  const [icon, setTextIcon] = useState<ReactElement | '' | undefined>();
  const optionRef = useRef<TouchableOpacity>(null);
  const {colors} = useTheme();

  const {
    borderColor = '#92ba3c',
    borderStyle = 'solid',
    borderWidth = totalSize(0.2),
    borderRadius = 10,
    paddingVertical = 10,
    paddingHorizontal = 15,
  } = DropDownBoxStyles
    ? DropDownBoxStyles
    : {borderWidth: totalSize(0.2), borderColor: '#92ba3c'};
  const {
    fontColor = colors.headingText,
    fontWeight = '500',
    fontSizeStyle = fontSize.subHeading,
  } = DropDownTextStyle
    ? DropDownTextStyle
    : {fontColor: colors.headingText, fontSizeStyle: fontSize.subHeading};

  const {IconSize = colors.hightLightedColor, IconColor = 30} =
    DropDownArrowIconSizeStyle
      ? DropDownArrowIconSizeStyle
      : {IconColor: colors.hightLightedColor, IconSize: 30};

  const handleOptionPress = (option: any) => {
    // setOptionSelected(option);
    onChangeValue(option);
    setModalVisible(false);
  };

  const setValues = () => {
    if (optionRef.current) {
      // console.log(optionRef.current.measure, 'current');
      optionRef.current.measure((x, y, width, height, pageX, pageY) => {
        // console.log('width1', width);
        // console.log('height1', height);
        // console.log('pagex1', pageX);
        // console.log('pagey1', pageY);
        // console.log('x1', x);
        // console.log('y1', y);
        // const modalHeight = 100; // Adjust this value based on the Modal height
        // const modalWidth = 200; // Adjust this value based on the Modal width
        const top = pageY + height;
        // const left = pageX + width / 2 - modalWidth / 2;
        const left = pageX;
        setModalPosition({top, left});
        setModalWidth(width);
        setModalVisible(true);
      });
    }
  };
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.0}
        ref={optionRef}
        style={{
          borderColor: borderColor,
          borderStyle: borderStyle,
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          paddingVertical: paddingVertical,
          paddingHorizontal: paddingHorizontal,
          height: height(6.3),
        }}
        onPress={() => {
          setValues();
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {icon && <Text style={{paddingRight: 10}}>{icon}</Text>}
            <Text
              style={{
                fontWeight: fontWeight,
                color: fontColor,
                fontSize: fontSizeStyle,
              }}>
              {value || PlaceHolder || 'Select an option'}
            </Text>
          </View>
          <MeterialIcon
            name="keyboard-arrow-down"
            size={IconSize}
            color={IconColor}
          />
        </View>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        supportedOrientations={['landscape', 'portrait']}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            borderStyle: 'solid',
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 8,
            top: modalPosition?.top,
            left: modalPosition?.left,
            width: modalWidth,
            paddingHorizontal: width(5),
            paddingVertical: height(3),
          }}>
          <TouchableOpacity
            activeOpacity={0.0}
            onPress={() => setModalVisible(false)}
            style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Cross name="cross" size={30} color={colors.borderColor} />
          </TouchableOpacity>
          <FlatList
            data={Data}
            style={{height: height(30)}}
            renderItem={({item, index, separators}) => (
              <TouchableOpacity
                activeOpacity={0.0}
                key={item.id}
                style={{
                  paddingVertical: height(1.5),
                }}
                onPress={() => {
                  handleOptionPress(item.value);
                  item?.icon === '' ? setTextIcon('') : setTextIcon(item.icon);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  {item.icon}
                  <Text
                    style={{
                      paddingLeft: width(4),
                    }}>
                    {item.value}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
    </View>
  );
};

export default InputDropDown;
