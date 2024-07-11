// TodayDate.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

const TodayDate: React.FC = () => {
    const today = new Date();
    const formattedDate = format(today, ' dd.MM.yyyy'); // Format the date as "July 11, 2024"

    return (
        <View style={styles.container}>
            <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0C1844',
    },
});

export default TodayDate;
