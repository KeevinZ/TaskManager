import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import  todayImage from '../../assets/imgs/today.jpg'
import moment from "moment"
import 'moment/locale/pt-br'

export default function TaskList() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <View style={styles.container}>

            <ImageBackground source={todayImage} style={styles.background}>
                <View style={styles.titlleBar}>
                <Text style={styles.titlle}>Hoje</Text>        
                <Text style={styles.subtitlle}>{today}</Text>
                </View>
            </ImageBackground>

            <View style={styles.taskList}>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7
    },
    titlleBar: {
     flex: 1,
     justifyContent: 'flex-end',   
  
    },
    titlle: {
        color: 'white',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
  
    },
    subtitlle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 20
    },
})