import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserCreate from './src/component/UserCreate';
import MilkDelivery from './src/component/MilkDelivery';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <UserCreate/> */}
      <MilkDelivery/>
      <StatusBar style="auto" />
    </View>
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
