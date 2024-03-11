import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator>
     <Stack.Screen name='Navbar' component={}/>
    </Stack.Navigator>
  );
}