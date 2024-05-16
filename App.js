import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  Switch,
} from 'react-native';
import {useTranslation, initReactI18next} from 'react-i18next';
import i18next from 'i18next';
import en from './locals/en.json';
import mr from './locals/mr.json';
i18next.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    mr: {translation: mr},
  },
  lng: 'en',
  fallbackLng: 'en',
});
const App = () => {
  const {colorScheme} = useColorScheme();
  const {t, i18n} = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme == 'dark');
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };
  const toggleColorScheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <SafeAreaView
    
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#121212' : 'skyblue'},
      ]}>
      <Text style={[styles.text, {color: isDarkMode ? 'white' : 'gray'}]}>
        {t('welcome')}
      </Text>
      <TouchableOpacity
        onPress={() => changeLanguage(currentLanguage === 'en' ? 'mr' : 'en')}
        style={styles.button}>
        <Text style={styles.buttonText}>{t('change-language')}</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
        <Switch value={isDarkMode} onValueChange={toggleColorScheme} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
  },

  button: {
    marginTop: 50,
  },
  buttonText: {
    padding: 10,
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 10,
  },
});
