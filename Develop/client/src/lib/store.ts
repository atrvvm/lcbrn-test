import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  fullName?: string;
  specialty?: string;
  location?: string;
  phone?: string;
  imageUrl?: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  login: async (email: string, password: string) => {
    // Simulate login - in a real app, this would make an API call
    set({
      user: {
        id: '1',
        email,
        fullName: 'Test User',
        specialty: 'Full Stack Development',
        location: 'Remote',
        phone: '+1 (555) 123-4567'
      }
    });
  },
  register: async (email: string, password: string) => {
    // Simulate registration - in a real app, this would make an API call
    set({
      user: {
        id: '1',
        email,
        fullName: 'Test User'
      }
    });
  },
  logout: () => {
    set({ user: null });
  },
  updateProfile: async (data: Partial<User>) => {
    // Simulate profile update - in a real app, this would make an API call
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null
    }));
  }
}));