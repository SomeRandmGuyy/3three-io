import auth from './auth.service';
import { useFetch, useRuntimeConfig, clearNuxtData } from '#imports';

jest.mock('#imports', () => ({
  useFetch: jest.fn(),
  useRuntimeConfig: jest.fn(),
  clearNuxtData: jest.fn(),
}));

describe('auth.service', () => {
  const runtimeConfig = {
    public: {
      apiBaseUrl: 'http://localhost:8000'
    }
  };

  beforeEach(() => {
    useRuntimeConfig.mockReturnValue(runtimeConfig);
    jest.clearAllMocks();
  });

  test('login should store token on successful login', async () => {
    const response = {
      data: { value: { access_token: 'token123' } },
      error: { value: null }
    };
    useFetch.mockResolvedValue(response);

    await auth.login('test@example.com', 'password123');

    expect(localStorage.setItem).toHaveBeenCalledWith('authToken', 'token123');
  });

  test('login should throw error on invalid credentials', async () => {
    const response = {
      data: { value: null },
      error: { value: { data: { message: 'Invalid credentials' } } }
    };
    useFetch.mockResolvedValue(response);

    await expect(auth.login('test@example.com', 'wrongpassword')).rejects.toThrow('Invalid credentials');
  });

  test('register should store token on successful registration', async () => {
    const response = {
      data: { value: { access_token: 'token123' } },
      error: { value: null }
    };
    useFetch.mockResolvedValue(response);

    const token = await auth.register('John Doe', 'test@example.com', 'password123', 'password123');

    expect(localStorage.setItem).toHaveBeenCalledWith('authToken', 'token123');
    expect(token).toBe('token123');
  });

  test('register should throw error on failure', async () => {
    const response = {
      data: null,
      error: { value: { data: { message: 'Registration failed' } } }
    };
    useFetch.mockResolvedValue(response);

    await expect(auth.register('John Doe', 'test@example.com', 'password123', 'password123')).rejects.toThrow('Registration failed');
  });

  test('logout should remove token from localStorage', async () => {
    localStorage.setItem('authToken', 'token123');
    useFetch.mockResolvedValue({});

    await auth.logout();

    expect(localStorage.getItem('authToken')).toBeNull();
  });

  test('getProfile should return deserialized profile data', async () => {
    const response = {
      data: { value: { data: { id: '1', type: 'user', attributes: { name: 'John Doe' } } } }
    };
    useFetch.mockResolvedValue(response);

    const profile = await auth.getProfile();

    expect(profile).toEqual({ id: '1', name: 'John Doe' });
  });
});
