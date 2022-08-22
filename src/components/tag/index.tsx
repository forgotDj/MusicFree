import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import rpx from '@/utils/rpx';
import { fontSizeConst } from '@/constants/uiConst';
import ThemeText from '../themeText';
import { useTheme } from 'react-native-paper';
import Color from 'color';

interface ITagProps {
    tagName: string;
}
export default function Tag(props: ITagProps) {
const {colors} = useTheme();
return (<View style={[style.tag, {backgroundColor: Color(colors.text).negate().toString()}]}>
    <ThemeText style={style.tagText}>
      {props.tagName}
    </ThemeText>
  </View>
);
}

const style = StyleSheet.create({
  tag: {
    height: rpx(26),
    marginLeft: rpx(12),
    paddingHorizontal: rpx(12),
    paddingVertical: rpx(4),
    borderRadius: rpx(24),
    alignItems: 'center'
  },
  tagText: {
    fontSize: fontSizeConst.smallest,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
