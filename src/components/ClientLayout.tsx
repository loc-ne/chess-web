'use client';

import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-700 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={logout} />
      <main className="pt-0">
        {children}
      </main>
    </div>
  );
};

export default ClientLayout;