import * as React from 'react';
import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  checkAuthStatus: () => Promise<void>;
  updateProfilePicture: (profilePicture: File) => Promise<void>;
  updateUserName: (name: string) => Promise<void>;
  updatePassword: (currentPassword: string, newPassword: string) => Promise<void>;
}

interface User {
  name: string;
  profilePicture: string;
  email: string;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User | null>(null);

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await axios.post<{ token: string }>(`${apiBaseUrl}/api/auth/login`, credentials);
      if (response.status === 200) {
        setIsAuthenticated(true);
        localStorage.setItem('token', response.data.token);
        await fetchUserData();
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const checkAuthStatus = React.useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`${apiBaseUrl}/api/auth/status`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
          await fetchUserData();
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem('token');
        }
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Auth status check failed:', error);
      setIsAuthenticated(false);
    }
  }, []);

  const fetchUserData = React.useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(`${apiBaseUrl}/api/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setUser(response.data as User);
        }
      }
    } catch (error) {
      console.error('Fetching user data failed:', error);
    }
  }, []);

  const updateProfilePicture = async (profilePicture: File) => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const formData = new FormData();
        formData.append('profilePicture', profilePicture);

        const response = await axios.patch(`${apiBaseUrl}/api/user/me/profile-picture`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.status === 200) {
          const data = response.data as User;
          const updatedUser = { ...user, profilePicture: `${data.profilePicture}` } as User;
          setUser(updatedUser);
        }
      }
    } catch (error) {
      console.error('Updating profile picture failed:', error);
    }
  };

  const updateUserName = async (name: string) => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.post(`${apiBaseUrl}/api/user/me/name`, { name }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setUser((prevUser) => prevUser ? { ...prevUser, name } : null);
        }
      }
    } catch (error) {
      console.error('Updating user name failed:', error);
    }
  };

  const updatePassword = async (currentPassword: string, newPassword: string) => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await axios.post(`${apiBaseUrl}/api/user/me/password`, { currentPassword, newPassword }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error('Updating password failed:', error);
    }
  };

  React.useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, checkAuthStatus, updateProfilePicture, updateUserName, updatePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};