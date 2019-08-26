import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1B1B2A',
        height: 85,
        marginVertical: 2,
        paddingHorizontal: 20
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderColor: '#FA6D1C',
        borderWidth: 2,
        marginHorizontal: 10
    },
    name: {
        color: '#fff',
        fontSize: 20
    },
    email: {
        color: '#9B9B9B'
    },
    blockCreated: {
        alignContent: 'flex-end'
    },
    textCreated: {
        color: '#AFAFAF',
        fontSize: 10
    }
});

export default styles;