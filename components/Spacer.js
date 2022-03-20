import {View, Text, StyleSheet } from 'react-native';


const Spacer = () => {

    return (
        <View style={styles.container} />
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15
    }
});

export default Spacer;