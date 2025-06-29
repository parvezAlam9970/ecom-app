import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ToastAndroid,
} from 'react-native';
import {Colors, gap, Padding} from '../constants/theam';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomTouchableOpacity from '../components/custom/CustomTouchableOpacity ';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const [input, setInput] = useState('');

  const hanldeOtp = () => {
    if (input.length !== 10) {
      ToastAndroid.show(
        'Please enter a valid 10-digit number',
        ToastAndroid.SHORT,
      );
      return;
    }
    navigation.navigate('OTP');
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Build_logo.png')}
        style={styles.logoImage}
      />
      <Text style={styles.title}>Enter Your Mobile Number!</Text>
      <Text style={styles.subHeading}>
        We Will Send You a Confirmation Code
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Your Number"
        placeholderTextColor={'#000'}
        value={input}
        onChangeText={setInput}
        keyboardType="default"
        autoCapitalize="none"
      />
      <CustomTouchableOpacity style={styles.button} onPress={hanldeOtp}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </CustomTouchableOpacity>
      <Text style={styles.orText}>OR</Text>
      <CustomTouchableOpacity
        style={styles.googleButton}
        onPress={() => {
          /* Handle Google Sign-In */
        }}>
        <Image
          style={styles.googleImg}
          source={require('../assets/google.png')}
        />
        <Text style={{fontSize: 16}}>Connect with Google</Text>
      </CustomTouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Padding.p20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  title: {fontSize: 20, width: '100%', fontWeight: 'bold', textAlign: 'center'},
  subHeading: {
    fontSize: 15,
    marginBottom: 30,
    textAlign: 'center',
    width: '100%',
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  googleButton: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row', // <-- Correct way
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  googleImg: {
    width: 28,
    height: 28,
    marginRight: 10, // Space between image and text
  },
  logoImage: {
    width: 300,
    height: 100,
    marginBottom: 50,
  },
  buttonText: {color: '#fff', fontSize: 16, fontWeight: '600'},
  orText: {marginVertical: 10, fontSize: 16, color: '#888'},
});

export default LoginScreen;
