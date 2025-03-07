import {View, Text, StyleSheet} from 'react-native';

const AboutScreen = () => {
    return (
        <>
            <View>
                <Text style={styles.text}>About Screen</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#f00',
    },
});

export default AboutScreen;
