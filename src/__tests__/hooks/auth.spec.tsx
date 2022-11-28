import { renderHook, act } from '@testing-library/react-hooks';

import { useAuth, AuthProvider } from '../../hooks/auth';

const mockStartAsync = jest.fn();
jest.mock('expo-auth-session', () => {
  return {
    startAsync: () => mockStartAsync()
  }
})

jest.mock('expo-apple-authentication', () => ({}))

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: async () => {}
}))

describe('Auth hook', () => {
  it('should be able to sign in with Google Account existing', async () => {
    mockStartAsync.mockReturnValue({
      type: 'success',
      params: {
        access_token: 'my-access-token'
      },
      user: {
        id: 'any_id',
        email: 'jovinone@gmail.com',
        name: 'Jovino',
        photo: 'picture'
      }
    })


    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        id: `userInfo.id`,
        email: `jovinone@gmail.com`,
        name: `useInfo.given_name`,
        photo: `userInfo.picture`,
        locale: `userInfo.locale`,
        verified_email: `userInfo.verified_email`
      })
    })) as jest.Mock;

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider }); 

    await act(() => result.current.signInWithGoogle());
    expect(result.current.user?.email).toBe('jovinone@gmail.com')
  });

  it('should not connect  if cancel authcation with google', async () => {
    mockStartAsync.mockReturnValue({
      type: 'cancel',
    })

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider }); 

    await act(() => result.current.signInWithGoogle());
    expect(result.current.user)
    .not.toHaveProperty('id');
  });

});