import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../constants'
import { wp, hp } from '../utils'

const ProfileScreen: React.FC = () => {
    return (
        <View style={styles.container} >
            <View>
                <Image style={styles.image} source={Images.USER} />
                <Text style={styles.name} >İbrahim Akar</Text>
            </View>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: wp('30%'),
        height: wp('30%'),
        alignSelf: 'center',
        resizeMode: 'contain',
        paddingTop: hp(20),
        tintColor: 'gray',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})