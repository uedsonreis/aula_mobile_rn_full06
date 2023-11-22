import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from './src/pages/Home'
import LoginPage from './src/pages/Login'
import UserPage from './src/pages/User'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={LoginPage} options={{ title: 'Acesso' }} />
                <Stack.Screen name="home" component={HomePage} options={{ title: 'Usuários' }} />
                <Stack.Screen name="user" component={UserPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
