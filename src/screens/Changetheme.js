import { View, Text, Switch, useColorScheme } from 'react-native';
import React, { useState } from 'react';
const Changetheme = () => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const toggleColorScheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#121212' : '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: isDarkMode ? '#FFFFFF' : '#000000' }}>Toggle Theme</Text>
        <Switch value={isDarkMode} onValueChange={toggleColorScheme} />
      </View>
      <Text style={{ marginHorizontal: 20, textAlign: 'justify', color: isDarkMode ? '#FFFFFF' : '#000000' }}>Hein Min latt</Text>
    </View>
  );
};

export default Changetheme;