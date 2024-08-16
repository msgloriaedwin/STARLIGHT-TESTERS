import { useState, useEffect } from 'react';
import axios from 'axios';
interface ApiResponse<T> {
  data: T;
}
interface Avatar {
  id?: string;
  url?: string;
  name?: string;
}

const useAvatars = () => {
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getAllAvatars = async () => {
    try {
      const response = await axios.get<ApiResponse<Avatar[]>>(`${process.env.NEXT_PUBLIC_API_URL}avatars`);
      setAvatars(response?.data?.data);
    } catch (error) {
      console.error('Error fetching avatars:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllAvatars();
  }, []);

  return { avatars, loading };
};

export default useAvatars;
