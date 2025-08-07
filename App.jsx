import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useRef} from 'react';

import LoginScreen from './src/screen/LoginScreen';
import SplashScreen from 'react-native-splash-screen';
import OTPScreen from './src/screen/OTPScreen';

import TabNavigator from './src/components/Layout/TabNavigator';
import ProfileScreen from './src/screen/ProfileScreen';
import OrderScreen from './src/screen/AccountScreen';
import ProductDetailScreen from './src/screen/ProductDetailScreen';
import useStore from './src/store/store';
import CheckoutScreen from './src/screen/CheckoutScreen';
import OrderListScreen from './src/screen/OrderListScreen';
import OrderDetailScreen from './src/screen/OrderDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  const isAuth = useStore(state => state.isLoggedIn);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="OTP"
              component={OTPScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Tabs"
              component={TabNavigator}
            />
            <Stack.Screen
              name="Profile"
              options={{headerShown: true}}
              component={ProfileScreen}
            />

            <Stack.Screen
              name="product-detail"
              options={{headerShown: true}}
              component={ProductDetailScreen}
            />

            <Stack.Screen
              name="Orders"
              options={{headerShown: true}}
              component={OrderListScreen}
            />

            <Stack.Screen
              name="OrderDetail"
              options={{headerShown: true}}
              component={OrderDetailScreen}
            />

            <Stack.Screen
              name="Checkout"
              options={{headerShown: true}}
              component={CheckoutScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
