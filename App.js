import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Text, Surface } from 'react-native-paper';
import { ThemeProvider, useTheme } from "./components/ThemeContext";

import RootNavigator from './navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
      </SafeAreaProvider>
  );
}

function Main() {
  const { theme } = useTheme(); // Accessing the theme from context

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
