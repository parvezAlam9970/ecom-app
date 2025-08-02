/**
 * @format
 */
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Suppress specific warnings (optional)
LogBox.ignoreLogs(['Warning: ...']); 
// LogBox.ignoreAllLogs(true); // uncomment if you want to hide all warnings

// Global error handler to prevent blank/white screen on crash
ErrorUtils.setGlobalHandler((error, isFatal) => {
  console.log('Global Error:', error, isFatal);
  // Show some fallback or restart logic
  // Example: Alert.alert('Unexpected error occurred', error.message);
});

AppRegistry.registerComponent(appName, () => App);
