import axios from 'axios';

export interface User {
    id: string;
    name: string;
    email: string;
  }
  
 export const fetchUser = async (userId: string): Promise<User> => {
    try {
      const response = await axios.get<User>(`/api/user/${userId}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.error || 'Failed to fetch user details';
        throw new Error(errorMessage);
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  };