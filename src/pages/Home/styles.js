import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main,
    },
    button: {
        backgroundColor: colors.orange,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: colors.white,
        fontSize: 40
    }
});

export default styles;
