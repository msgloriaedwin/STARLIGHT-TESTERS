import axios from 'axios';

let token: string | null = null;


if (typeof window !== 'undefined') {
  const storedUser = sessionStorage.getItem('user');
  if (storedUser) {
    try {
      const parsedUser = JSON.parse(storedUser);
      token = parsedUser?.access_token || null;  
    } catch (error) {
      console.error('Failed to parse user from sessionStorage:', error);
    }
  }
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : '', 
  },
});

export default axiosInstance;