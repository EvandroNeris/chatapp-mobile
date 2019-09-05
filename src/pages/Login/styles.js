import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.blueDark,
        paddingHorizontal: 30
    },
    input: {
        borderBottomColor: '#3D3E60',
        borderBottomWidth: 1,
        color: colors.white
    },
    inputBlock: {

    },
    titleBlock: {
        alignItems: 'center'
    },
    title: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 50,
        backgroundColor: colors.orange,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default styles;
