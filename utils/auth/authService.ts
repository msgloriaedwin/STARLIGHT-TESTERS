import { UserContext } from '../../context/AuthContext';
import axios from 'axios';
import { UserContext } from '@/context/AuthContext';
import { signIn } from 'next-auth/react';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;


const signInUrl = `${baseUrl}auth/login`;
const signUpUrl = `${baseUrl}auth/register`;
const googleSignUpUrl = `${baseUrl}auth/google/callback`;



if (!signInUrl || !signUpUrl || !googleSignUpUrl) {
  throw new Error('One or more API URLs are not defined in environment variables');
}

const saveUserDataToSessionStorage = (data: UserContext) => {
  sessionStorage.setItem('userContext', JSON.stringify(data));
};

export const loginUser = async (credentials: { username: string; password: string }) => {
  try {
    const response = await axios.post(signInUrl, credentials);


    const userData = {access_token:response.data.access_token, ...response.data.data.user};

    console.log(userData)
    if (userData && userData.email) {
      return userData; 
    } else {
      throw new Error("Invalid login response structure");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const signInWithCredentials = async (username: string, password: string) => {
  try {
    const response = await axios.post(signInUrl, {
      username,
      password,
    });

    const { access_token, user } = response.data;

    const userContext: UserContext = {
      access_token,
      email: user.email,
      id: user.id,
    };

    saveUserDataToSessionStorage(userContext);

    return userContext;
  } catch (error) {
    console.error("Failed to sign in with credentials:", error);
    throw new Error("Failed to sign in with credentials.");
  }
};

export const signUpWithEmail = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(signUpUrl, {
      username,
      email,
      password,
    });

    const userData = response.data.data?.user; 
    if (userData && userData.email) {
      const userContext: UserContext = {
        access_token: response.data.access_token, 
        email: userData.email,
        id: userData.id,
      };

      saveUserDataToSessionStorage(userContext);

      return userContext;
    } else {
      throw new Error("Invalid sign-up response structure");
    }
  } catch (error) {
    console.error('Failed to sign up with email:', error);
    throw new Error('Failed to sign up with email.');
  }
};


// export const signUpWithGoogle = () => {
//   try {
//     signIn('google', { callbackUrl: '/' }); 
//   } catch (error) {
//     console.error('Google Sign-in failed:', error);
//   }
// };


export const signUpWithGoogle = async () => {
  try {
    const response = await axios.get(googleSignUpUrl);

    const { access_token, user } = response.data;

    const userContext: UserContext = {
      access_token,
      email: user.email,
      id: user.id,
    }

    saveUserDataToSessionStorage(userContext);

    return userContext;
  } catch (error) {
    throw new Error('Failed to sign up with Google.');
  }
};