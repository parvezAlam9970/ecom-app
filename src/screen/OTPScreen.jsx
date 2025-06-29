import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  ToastAndroid,
} from 'react-native';
import {BorderRadius, Button_Radius, Colors, Padding} from '../constants/theam';
import CustomTouchableOpacity from '../components/custom/CustomTouchableOpacity ';
import useStore from '../store/store';

export default function OTPScreen({navigation}) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const updateAuth = useStore((state) => state.updateAuth);

  const handleChange = (text, index) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const hanldeVerifyOtp = () => {
       updateAuth()
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ios: 'padding', android: undefined})}>
      {/* Logo */}
      <Image
        source={require('../assets/Build_logo_transparent.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>
        Enter the 4-digit code sent to your phone
      </Text>
      <Text style={styles.phoneText}>+91-9090909090</Text>

      {/* OTP Card */}
      <View style={styles.otpCard}>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={ref => (inputs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={value}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              autoFocus={index === 0}
              placeholder="•"
              placeholderTextColor="#bbb"
            />
          ))}
        </View>
      </View>

      <CustomTouchableOpacity onPress={hanldeVerifyOtp} style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </CustomTouchableOpacity>

      <Text style={styles.resendInfo}>
        Didn't receive the code? <Text style={styles.resendText}>Resend</Text>
      </Text>

      <CustomTouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.changeNumber}>Change Your Number?</Text>
      </CustomTouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Padding.p20,
    width: '100%',
  },
  logo: {
   width: 300,
    height: 100,
    marginBottom: 18,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 6,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6e6e6e',
    marginBottom: 6,
    textAlign: 'center',
  },
  phoneText: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  otpCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    shadowColor: '#000',
    // shadowOpacity: 0.07,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 8,
    // elevation: 4,
    marginBottom: 24,
    width: '90%',
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
  },
  otpInput: {
    width: 48,
    height: 58,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#f7f7f7',
    color: Colors.primary,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: Colors.primary,
    marginBottom: 18,
    borderRadius: Button_Radius,
    alignItems: 'center',
    padding: Padding.p15,
    width: '90%',
    alignSelf: 'center',
    shadowColor: Colors.primary,
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },
  resendInfo: {
    color: '#888',
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  resendText: {
    color: Colors.primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  changeNumber: {
    color: '#4285F4',
    marginTop: 8,
    fontSize: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
