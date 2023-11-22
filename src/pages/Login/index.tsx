import React from 'react'
import { View, Alert, Text } from 'react-native'

import MyInput from '../../components/MyInput'
import FullButton from '../../components/FullButton'
import styles from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function signIn() {
        if (!username || username.trim() === '') {
            Alert.alert('Login é obrigatório')
            return
        }
        
        if (username === 'uedsonreis' && password === '123456') {
            navigation.navigate('home')
        } else {
            Alert.alert('Login ou senha inválido(a)')
        }
    }

    return (
        <View style={styles.container}>
            <MyInput label='Login' onChangeText={setUsername} />
            <MyInput label='Senha' onChangeText={setPassword} secureTextEntry />

            <FullButton title='Entrar' onPress={signIn} />
        </View>
    )
}