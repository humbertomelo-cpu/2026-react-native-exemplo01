import { View, Button, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

export default function Login() {

      const router = useRouter();

      function navegar() {
        router.push('/home');
      }

  return (
    <View style={styles.container}>
        <Button title='Clique Aqui' onPress={navegar} />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
