import axios from 'axios';

export const loginUser = async (credentials: { username: string; password: string }) => {
    try {
      const response = await axios.post(
        "https://66f46ns2-5000.euw.devtunnels.ms/api/v1/auth/login",
        credentials
      );
      return response.data; // Return the response data
    } catch (error) {
      console.error("Login error:", error);
      throw error; // Rethrow the error to be handled in the component
    }
  };

  export const signInWithCredentials = async (username: string, password: string) => {
    try {
      const response = await axios.post("https://api.staging.remote.bingo/api/v1/auth/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Failed to sign in with credentials:", error);
      throw new Error("Failed to sign in with credentials.");
    }
  };

export const signUpWithEmail = async (username:string, email: string, password: string) => {
  try {
    const response = await axios.post('https://api.staging.remote.bingo/api/v1/auth/register', {
        username,
        email,
        password
      });
    return response.data;
  } catch (error) {
    console.error('Failed to sign up with email:', error);
    throw new Error('Failed to sign up with email.');
  }
};

export const signUpWithGoogle = async () => {
  try {
    const response = await axios.get('https://66f46ns2-5000.euw.devtunnels.ms/api/v1/auth/google');
    return response.data;
  } catch (error) {
    throw new Error('Failed to sign up with Google.');
  }
};
