import NetInfo from '@react-native-community/netinfo';
import { Platform } from 'react-native';

export function checkNetworkConnection() {
  return NetInfo.getConnectionInfo().then(connectionInfo => {
    // none for android, and unknown for ios
    if (connectionInfo.type === 'none' || connectionInfo.type === 'unknown') {
      return false;
    }
    return true;
  });
}

export function getFontFamily() {
  return Platform.select({
    ios: 'arial',
    android: 'roboto'
  });
}
