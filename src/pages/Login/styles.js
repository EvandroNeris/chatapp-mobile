import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#1B1B2A',
        paddingHorizontal: 30
    },
    input: {
        borderBottomColor: '#3D3E60',
        borderBottomWidth: 1,
        color: '#fff'
    },
    inputBlock: {

    },
    titleBlock: {
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 50,
        backgroundColor: '#FA6D1C',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default styles;
