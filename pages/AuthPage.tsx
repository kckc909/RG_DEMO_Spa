
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/account/profile');
  };

  const formContent = (
    <form onSubmit={handleAuth} className="space-y-6">
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        required
      />
      {!isLogin && (
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      )}
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors font-semibold"
      >
        {isLogin ? 'Login' : 'Create Account'}
      </button>
    </form>
  );

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="flex border-b mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 font-semibold ${isLogin ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 font-semibold ${!isLogin ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
          >
            Register
          </button>
        </div>
        {formContent}
      </div>
    </div>
  );
};

export default AuthPage;
