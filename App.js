
import { StyleSheet, Text, View } from 'react-native';

import Title from './SRC/Components/Title';
import Main from './SRC/Components/Title/Main';


export default function App() {
  return(
    <View style={styles.container}>
    
    <Title/>
    <Main/>
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
