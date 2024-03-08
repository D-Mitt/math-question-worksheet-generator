export const SET_LOGIN_FORM_VALIDATION = "SET_LOGIN_FORM_VALIDATION"
export type SET_LOGIN_FORM_VALIDATION = typeof SET_LOGIN_FORM_VALIDATION

export const VERIFY_USER_REQUEST = "VERIFY_USER_REQUEST"
export type VERIFY_USER_REQUEST = typeof VERIFY_USER_REQUEST

export const VERIFY_USER_SUCCESS = "VERIFY_USER_SUCCESS"
export type VERIFY_USER_SUCCESS = typeof VERIFY_USER_SUCCESS

export const VERIFY_USER_FAILURE = "VERIFY_USER_FAILURE"
export type VERIFY_USER_FAILURE = typeof VERIFY_USER_FAILURE

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST"
export type LOGIN_USER_REQUEST = typeof LOGIN_USER_REQUEST

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export type LOGIN_USER_SUCCESS = typeof LOGIN_USER_SUCCESS

export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE"
export type LOGIN_USER_FAILURE = typeof LOGIN_USER_FAILURE

export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST"
export type LOGOUT_USER_REQUEST = typeof LOGOUT_USER_REQUEST

export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS"
export type LOGOUT_USER_SUCCESS = typeof LOGOUT_USER_SUCCESS

export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE"
export type LOGOUT_USER_FAILURE = typeof LOGOUT_USER_FAILURE

export interface SetLoginFormValidation {
  type: SET_LOGIN_FORM_VALIDATION
  isFormValidated: boolean
}

export interface VerifyUserRequest {
  type: VERIFY_USER_REQUEST
}

export interface VerifyUserSuccess {
  type: VERIFY_USER_SUCCESS
}

export interface VerifyUserFailure {
  type: VERIFY_USER_FAILURE
}

export interface LoginUserRequest {
  type: LOGIN_USER_REQUEST
}

export interface LoginUserSuccess {
  type: LOGIN_USER_SUCCESS
}

export interface LoginUserFailure {
  type: LOGIN_USER_FAILURE
}

export interface LogoutUserRequest {
  type: LOGOUT_USER_REQUEST
}

export interface LogoutUserSuccess {
  type: LOGOUT_USER_SUCCESS
}

export interface LogoutUserFailure {
  type: LOGOUT_USER_FAILURE
}

export type LoginAction =
  | SetLoginFormValidation
  | VerifyUserRequest
  | VerifyUserSuccess
  | VerifyUserFailure
  | LogoutUserRequest
  | LoginUserSuccess
  | LoginUserFailure
  | LoginUserRequest
  | LogoutUserSuccess
  | LogoutUserFailure
