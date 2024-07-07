import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { Images } from '../constants';
import { wp, hp } from '../utils';

const ProfileScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={Images.USER} />
                <Text style={styles.title}>Kullanıcı Bilgileri</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.info}>Ad Soyad: <Text>İbrahim Akar</Text></Text>
                </View>
                <View style={styles.infoBox}>
                    <TouchableOpacity onPress={() => console.log('called')}>
                        <Text style={styles.info}>Telefon: <Text >+905555555555</Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.info}>Mail: <Text>zV9y0@example.com</Text></Text>
                </View>
            </View>
        </View>
    );
};

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
    title: {
        fontSize: wp(6),
        fontWeight: 'bold',
        color: '#0C1844',
        alignSelf: 'center',
    },
    infoContainer: {
        padding: wp(5),
        borderRadius: wp(2),
    },
    infoBox: {
        backgroundColor: '#ff3333',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: hp(3),
        margin: wp(2),
        borderRadius: wp(2),
        shadowColor: '0C1844',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    info: {
        fontSize: wp(5),
        fontWeight: 'bold',
        color: 'white',
    },
    phoneNumber: {
        textDecorationLine: 'underline',
    },
});
