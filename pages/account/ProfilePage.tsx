
import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading profile...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-text-primary mb-6">Manage Profile</h1>
      <form className="space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            defaultValue={user.name}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            defaultValue={user.email}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            placeholder="Add your phone number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
