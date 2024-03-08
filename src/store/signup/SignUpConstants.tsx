export const SET_SIGN_UP_FORM_VALIDATION = "SET_SIGN_UP_FORM_VALIDATION"
export type SET_SIGN_UP_FORM_VALIDATION = typeof SET_SIGN_UP_FORM_VALIDATION

export const SIGN_UP_USER_REQUEST = "SIGN_UP_USER_REQUEST"
export type SIGN_UP_USER_REQUEST = typeof SIGN_UP_USER_REQUEST

export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS"
export type SIGN_UP_USER_SUCCESS = typeof SIGN_UP_USER_SUCCESS

export const SIGN_UP_USER_FAILURE = "SIGN_UP_USER_FAILURE"
export type SIGN_UP_USER_FAILURE = typeof SIGN_UP_USER_FAILURE

export const CONFIRM_SIGN_UP_USER_REQUEST = "CONFIRM_SIGN_UP_USER_REQUEST"
export type CONFIRM_SIGN_UP_USER_REQUEST = typeof CONFIRM_SIGN_UP_USER_REQUEST

export const CONFIRM_SIGN_UP_USER_SUCCESS = "CONFIRM_SIGN_UP_USER_SUCCESS"
export type CONFIRM_SIGN_UP_USER_SUCCESS = typeof CONFIRM_SIGN_UP_USER_SUCCESS

export const CONFIRM_SIGN_UP_USER_FAILURE = "CONFIRM_SIGN_UP_USER_FAILURE"
export type CONFIRM_SIGN_UP_USER_FAILURE = typeof CONFIRM_SIGN_UP_USER_FAILURE

export const CLEAR_SIGN_UP_INFO = "CLEAR_SIGN_UP_INFO"
export type CLEAR_SIGN_UP_INFO = typeof CLEAR_SIGN_UP_INFO

export interface SetSignUpFormValidation {
  type: SET_SIGN_UP_FORM_VALIDATION
  isFormValidated: boolean
}

export interface SignUpUserRequest {
  type: SIGN_UP_USER_REQUEST
}

export interface SignUpUserSuccess {
  type: SIGN_UP_USER_SUCCESS
  signedUpUser: any
}

export interface SignUpUserFailure {
  type: SIGN_UP_USER_FAILURE
}

export interface ConfirmSignUpUserRequest {
  type: CONFIRM_SIGN_UP_USER_REQUEST
}

export interface ConfirmSignUpUserSuccess {
  type: CONFIRM_SIGN_UP_USER_SUCCESS
}

export interface ConfirmSignUpUserFailure {
  type: CONFIRM_SIGN_UP_USER_FAILURE
}

export interface ClearSignUpInfo {
  type: CLEAR_SIGN_UP_INFO
}

export type SignUpAction =
  | SetSignUpFormValidation
  | SignUpUserSuccess
  | SignUpUserFailure
  | SignUpUserRequest
  | ConfirmSignUpUserSuccess
  | ConfirmSignUpUserFailure
  | ConfirmSignUpUserRequest
  | ClearSignUpInfo
