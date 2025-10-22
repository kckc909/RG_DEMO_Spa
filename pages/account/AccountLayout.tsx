
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AccountLayout: React.FC = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-md text-left ${
      isActive ? 'bg-primary text-white' : 'text-text-primary hover:bg-green-100'
    }`;

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="md:w-1/4 lg:w-1/5">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-text-primary mb-4">My Account</h2>
          <nav className="space-y-2">
            <NavLink to="/account/profile" className={linkClasses}>Profile</NavLink>
            <NavLink to="/account/history" className={linkClasses}>Booking History</NavLink>
            <NavLink to="/account/loyalty" className={linkClasses}>Loyalty & Rewards</NavLink>
          </nav>
        </div>
      </aside>
      <main className="flex-1">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AccountLayout;
