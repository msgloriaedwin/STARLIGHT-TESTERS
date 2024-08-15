import React, { useEffect, useState } from 'react';
import { fetchUser } from '@/utils/sound-effects/fetchUser';
import { User } from '@/utils/sound-effects/fetchUser';

interface UserProfileProps {
    userId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await fetchUser(userId);
                setUser(userData);
            } catch (err) {
                setError((err as Error).message);
            }
        };

        getUser();
    }, [userId]);

    console.log(user)

    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;
