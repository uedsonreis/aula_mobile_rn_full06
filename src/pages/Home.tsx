import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Home() {

    const navigation = useNavigation<NavigationProp<any>>()

    navigation.setOptions({
        headerLeft: () => <Button title='Sair' onPress={logOff} />,
        headerRight: () => <Button title='Add' onPress={goToUser} />
    })

    function logOff() {
        navigation.goBack()
    }

    function goToUser() {
        navigation.navigate('user')
    }

    return (
        <View style={styles.container}>
            <Text>Listagem de Usuários</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
})