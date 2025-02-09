// Mock data store
let mockUsers = [];
let mockListings = [];

export const auth = {
  login: async (email: string, password: string) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ user: { id: '1', email } });
      }, 500);
    });
  },
  register: async (email: string, password: string) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ user: { id: '1', email } });
      }, 500);
    });
  }
};

export const users = {
  getProfile: async () => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          email: 'user@example.com',
          fullName: 'Test User',
          specialty: 'Full Stack Development',
          location: 'Remote',
          phone: '+1 (555) 123-4567'
        });
      }, 500);
    });
  },
  updateProfile: async (data: any) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  }
};