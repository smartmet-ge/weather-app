import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Icon from '@assets/Icon';

const HeaderIcon: React.FC = () => {
  const { colors, dark } = useTheme();

  return (
    <View style={styles.container}>
      <Icon
        name={dark ? 'provider-logo-dark' : 'provider-logo-light'}
        style={{ color: colors.text }}
        height={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderIcon;
