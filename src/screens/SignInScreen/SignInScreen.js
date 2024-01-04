import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo-color-bg.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    //Login Button
    navigation.navigate ('Profile');
  }

  const onForgotPasswordPressed = () => {
    //Forgot Password
    navigation.navigate ('Forgot Password');
  }

  const onSignUpPressed = () => {
    //Dont have an account. SignUp
    navigation.navigate ("SignUp");
  }


  const {height} = useWindowDimensions();

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, {height: height * 0.3}]}resizeMode="contain" 
        />

        <Text 
          style={styles.textBelowLogo}>Welcome Onboard!
        </Text>
        <Text 
          style={styles.additionalText}>Sign In to your account</Text>

        <CustomInput 
          placeholder="Username" 
          value={username} 
          setValue={setUsername} 
        />
        <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword}  
          secureTextEntry 
        />

        <CustomButton 
          text="Login" 
          onPress={onSignInPressed}
        />

        <CustomButton 
          text="Forgot password?" 
          onPress={onForgotPasswordPressed}
          type= 'TERTIARY'
        />

        <View style={styles.horizontalLine} />

        <CustomButton 
          text="Don't have an account? Sign Up" 
          onPress={onSignUpPressed}
          type= 'TERTIARY'
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  textBelowLogo: {
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 26,
    color: '#333', // Change the color as needed
  },
  additionalText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAD0D0',
    width: '100%',
    marginVertical: 20,
  },
});

export default SignInScreen;
