import React, {useEffect, useRef} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon, {Icons} from '../../../src/components/custom/Icons';
import HomeScreen from '../../../src/screen/HomeScreen';
import OrderScreen from '../../screen/AccountScreen';
import ProfileScreen from '../../../src/screen/ProfileScreen';
import {Colors} from '../../../src/constants/theam';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SearchScreen from '../../screen/SearchScreen';
import CartScreen from '../../screen/CartScreen';

const Tab = createBottomTabNavigator();

const TabArr = [
   {
    route: 'Home',
    label: 'Home',
    type: Icons.Feather,
    icon: 'home',
    component: HomeScreen,
    color: Colors.primary,
    headerShown: false,
  },
  {
    route: 'Search',
    label: 'Search',
    type: Icons.SimpleLineIcons,
    icon: 'magnifier',
    component: SearchScreen,
    color: Colors.primary,
  },
  {
    route: 'Cart',
    label: 'Cart',
    type: Icons.FontAwesome,
    icon: 'shopping-cart',
    component: CartScreen,
    color: Colors.primary,
  },
 
  {
    route: 'Account',
    label: 'Account',
    type: Icons.FontAwesome,
    icon: 'user-circle-o',
    component: OrderScreen,
    color: Colors.primary,
  },
];

const TabButton = props => {

  const {
    item,
    onPress,
    accessibilityState,
    ['aria-selected']: ariaSelected,
  } = props;
  const focused = accessibilityState?.selected ?? ariaSelected ?? false;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (viewRef.current && textViewRef.current) {
      if (focused) {
        viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
        textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      } else {
        viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
        textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      }
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <View style={styles.tabContent}>
        <Animatable.View
          ref={viewRef}
          style={[
            styles.iconBg,
            focused && {
              backgroundColor: item.color,
              transform: [{scale: 1.08}],
            },
            !focused && {backgroundColor: 'transparent'},
          ]}>
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.textColor : 'grey'}
            style={focused ? styles.iconActive : styles.iconInactive}
          />
        </Animatable.View>
        {focused ? (
          <Animatable.View ref={textViewRef}>
            <Text style={[styles.label, styles.labelActive]}>{item.label}</Text>
          </Animatable.View>
        ) : (
          <Text style={[styles.label, styles.labelInactive]}>{item.label}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          elevation: 10,
          height: 55 + insets.bottom, 
          paddingBottom: insets.bottom + 15,
          bottom: 0,
        },
      }}>
      {TabArr.map((item, index) => (
       <Tab.Screen
  key={index}
  name={item.route}
  component={item.component}
  options={{
    tabBarShowLabel: false,
    tabBarButton: props => <TabButton {...props} item={item} />,
    headerShown: item.route !== 'Home', 
    headerTitle: item.label , 
    headerTitleAlign: 'center', 
  }}
/>

      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 2,
  },
  labelActive: {
    color: Colors.primary,
    marginTop: 0,
    textAlign: "center"
  },
  labelInactive: {
    color: 'grey',
    textAlign :"center",
    marginTop: -5,
  },
  iconActive: {},
  iconInactive: {},
});
