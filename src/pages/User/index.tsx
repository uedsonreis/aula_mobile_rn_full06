import React from 'react'
import { Alert, Button, View } from 'react-native'

import MyInput from '../../components/MyInput'
import FullButton from '../../components/FullButton'
import styles from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'

export default function User() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [passConfirm, setPassConfirm] = React.useState('')

    function save() {
        if (!name || name.trim() === '') {
            Alert.alert('Nome é obrigatório')
            return
        }
        if (!username || username.trim() === '') {
            Alert.alert('Login é obrigatório')
            return
        }
        if (!password || password.trim() === '') {
            Alert.alert('Senha é obrigatória')
            return
        }
        if (password !== passConfirm) {
            Alert.alert('Senha não confere')
            return
        }

        Alert.alert('Title', 'Usuário salvo com sucesso')
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <MyInput label='Nome' value={name} onChangeText={setName} />
            <MyInput label='Login' value={username} onChangeText={setUsername} />
            <MyInput label='Senha' value={password} onChangeText={setPassword} secureTextEntry />
            <MyInput label='Confirmar Senha' value={passConfirm} onChangeText={setPassConfirm} secureTextEntry />

            <FullButton title='Salvar' onPress={save} />
        </View>
    )
}