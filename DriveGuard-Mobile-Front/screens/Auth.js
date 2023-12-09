import React, { useState } from 'react';
import { colors } from '../GlobalStyles'; // Import your colors here
import AuthLayout from '../layouts/AuthLayout';
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

const Auth = ({ navigation }) => {
  const [path, setPath] = useState('SIGN IN');

  return (
    <AuthLayout path={path} navigation={navigation} setPath={setPath}>
      {path === 'SIGN IN' ? (
        <SignInForm navigation={navigation} />
      ) : (
        <SignUpForm navigation={navigation} />
      )}
    </AuthLayout>
  );
};

export default Auth;
