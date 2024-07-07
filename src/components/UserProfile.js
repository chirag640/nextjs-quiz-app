// src/components/UserProfile.js
import { useUser } from '@auth0/nextjs-auth0/client';

const UserProfile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className="flex justify-center items-center">
        <img src={user.picture} alt="User Profile" className="rounded-full w-10 h-10" />
        <h2 className="text-lg font-bold">{user.name}</h2>
      </div>
    )
  );
};

export default UserProfile;
