import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Layout, Text, Icon, Input } from '@ui-kitten/components';
import { claret } from './colors';

const Login = (props) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [secureTextEntry, setSecureTextEntry] = useState(true);

   const toggleSecureEntry = () => setSecureTextEntry(prevState => !prevState);

   const renderIcon = (props) => (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
         <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
      </TouchableWithoutFeedback>
   );

   return (
      <Layout style={styles.container}>
         <Text style={styles.label}>Correo electrónico</Text>
         <Input
            style={styles.input}
            value={email}
            type='email'
            onChangeText={setEmail}
            placeholder='Correo electrónico'
         />
         <Text style={styles.label}>Contraseña</Text>
         <Input
            style={styles.input}
            value={password}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={setPassword}
            placeholder='Contraseña'
         />
         <Text style={{ alignSelf: 'flex-end', marginBottom: 20 }}>Recuperar contraseña</Text>
         <TouchableOpacity style={styles.btn}>
            <Text style={{ color: 'white' }}>Hello</Text>
         </TouchableOpacity>
         <Text>¿No tienes cuenta? Crear una cuenta</Text>
      </Layout>
   );
};

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: 20
   },
   input: {
      width: '100%',
      marginBottom: 10
   },
   label: {
      alignSelf: 'flex-start',
      marginBottom: 5
   },
   btn: {
      backgroundColor: claret,
      padding: 10,
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      marginBottom: 20
   }
});

export default Login;