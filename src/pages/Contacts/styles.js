import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main
  },
  modalBody: {
    marginHorizontal: 20,
    marginVertical: 200,
    backgroundColor: colors.blueDark,
    elevation: 4,
    borderRadius: 5,
    height: 200
  },
  blockButton: {
    backgroundColor: colors.orange,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 20,
    color: colors.white
  },
  blockHeader: {
    alignItems: 'flex-end',
    padding: 10
  },
  input: {
    color: colors.white,
  }
});

export default styles;
