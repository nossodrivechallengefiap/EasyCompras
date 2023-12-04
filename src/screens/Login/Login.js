import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 50,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logar:{
    color: '#5DB075',
    fontSize: 20,
  },
  logarText:{
    fontSize: 20,
  },
  input: {
    height: 50,
    width: 350,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#F6F6F6',
  },
  iconeSenha: {
    marginLeft: '70%',
    marginTop: '-11%',
    marginBottom: '5%'
  },
  iconeConfirmarSenha: {
    marginLeft: '70%',
    marginTop: '-11%',
    marginBottom: '5%'
  },
  botao: {
    backgroundColor: '#5DB075',
    padding: 10,
    borderRadius: 15,
    width: 350,
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerRegistrar: {
    top: 10,
    flexDirection: 'row'
  },
  label: {
    marginBottom: 2.5,
    fontWeight: 'bold'
  },
});
