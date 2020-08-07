import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    maxWidth: 180,
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
  },

  description: {
    maxWidth: 240,
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 16,
    lineHeight: 26,
    marginTop: 24,
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  okButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff'
  },
});

export default styles;