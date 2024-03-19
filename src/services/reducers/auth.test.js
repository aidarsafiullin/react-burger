import { authReducer, initialState } from './auth';
import * as types from '../constants/auth';
import { email, name } from '../../utils/auth-test-data';

describe('auth reducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REGISTER_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: types.REGISTER_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      authRequest: true,
    });
  });

  it('should handle REGISTER_SUCCESS', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.REGISTER_SUCCESS,
          user: { email, name },
        },
      ),
    ).toEqual({
      ...initialState,
      user: { email, name },
    });
  });

  it('should handle REGISTER_FAILED', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.REGISTER_FAILED,
        },
      ),
    ).toEqual({
      ...initialState,
      authFailed: true,
    });
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: types.LOGIN_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      authRequest: true,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.LOGIN_SUCCESS,
          user: { email, name },
        },
      ),
    ).toEqual({
      ...initialState,
      user: { email, name },
    });
  });

  it('should handle LOGIN_FAILED', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.LOGIN_FAILED,
        },
      ),
    ).toEqual({
      ...initialState,
      authFailed: true,
    });
  });

  it('should handle LOGOUT_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: types.LOGOUT_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      authRequest: true,
    });
  });

  it('should handle LOGOUT_SUCCESS', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.LOGOUT_SUCCESS,
        },
      ),
    ).toEqual({
      ...initialState,
      user: null,
    });
  });

  it('should handle LOGOUT_FAILED', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.LOGOUT_FAILED,
        },
      ),
    ).toEqual({
      ...initialState,
      authFailed: true,
    });
  });

  it('should handle GET_USER_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: types.GET_USER_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      authRequest: true,
    });
  });

  it('should handle GET_USER_SUCCESS', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.GET_USER_SUCCESS,
          user: { email, name },
        },
      ),
    ).toEqual({
      ...initialState,
      user: { email, name },
    });
  });

  it('should handle GET_USER_FAILED', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.GET_USER_FAILED,
        },
      ),
    ).toEqual({
      ...initialState,
      authFailed: true,
    });
  });

  it('should handle UPDATE_USER_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: types.UPDATE_USER_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      authRequest: true,
    });
  });

  it('should handle UPDATE_USER_SUCCESS', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.UPDATE_USER_SUCCESS,
          user: { email, name },
        },
      ),
    ).toEqual({
      ...initialState,
      user: { email, name },
    });
  });

  it('should handle UPDATE_USER_FAILED', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.UPDATE_USER_FAILED,
        },
      ),
    ).toEqual({
      ...initialState,
      authFailed: true,
    });
  });

  it('should handle UPDATE_PWD_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: types.UPDATE_PWD_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      authRequest: true,
      pwdResetRequested: true,
    });
  });

  it('should handle UPDATE_PWD_SUCCESS', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: false,
        },
        {
          type: types.UPDATE_PWD_SUCCESS,
        },
      ),
    ).toEqual({
      ...initialState,
      authFailed: false,
    });
  });

  it('should handle UPDATE_PWD_FAILED', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.UPDATE_PWD_FAILED,
        },
      ),
    ).toEqual({
      ...initialState,
      authFailed: true,
    });
  });

  it('should handle SUBMIT_PWD_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: types.SUBMIT_PWD_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      authRequest: true,
      pwdSubmitSuccess: false,
    });
  });

  it('should handle SUBMIT_PWD_SUCCESS', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
          pwdSubmitSuccess: false,
        },
        {
          type: types.SUBMIT_PWD_SUCCESS,
        },
      ),
    ).toEqual({
      ...initialState,
      pwdSubmitSuccess: true,
    });
  });

  it('should handle SUBMIT_PWD_FAILED', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
          pwdSubmitSuccess: false,
        },
        {
          type: types.SUBMIT_PWD_FAILED,
        },
      ),
    ).toEqual({
      ...initialState,
      authFailed: true,
      pwdSubmitSuccess: false,
    });
  });

  it('should handle UPDATE_TOKEN_REQUEST', () => {
    expect(
      authReducer(initialState, {
        type: types.UPDATE_TOKEN_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      authRequest: true,
    });
  });

  it('should handle UPDATE_TOKEN_SUCCESS', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.UPDATE_TOKEN_SUCCESS,
        },
      ),
    ).toEqual(initialState);
  });

  it('should handle UPDATE_TOKEN_FAILED', () => {
    expect(
      authReducer(
        {
          ...initialState,
          authRequest: true,
        },
        {
          type: types.UPDATE_TOKEN_FAILED,
        },
      ),
    ).toEqual({
      ...initialState,
      authFailed: true,
    });
  });

  it('should handle SET_PASSWORD', () => {
    const newPassword = 'newpassword123';
    expect(
      authReducer(initialState, {
        type: types.SET_PASSWORD,
        password: newPassword,
      }),
    ).toEqual({
      ...initialState,
      password: newPassword,
    });
  });
});
