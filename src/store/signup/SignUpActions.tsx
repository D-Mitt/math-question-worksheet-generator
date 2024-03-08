import { History } from "history"
import { Dispatch } from "redux"
import { loginUser } from "../login/LoginActions"
import {
  ClearSignUpInfo,
  CLEAR_SIGN_UP_INFO,
  ConfirmSignUpUserFailure,
  ConfirmSignUpUserRequest,
  ConfirmSignUpUserSuccess,
  CONFIRM_SIGN_UP_USER_FAILURE,
  CONFIRM_SIGN_UP_USER_REQUEST,
  CONFIRM_SIGN_UP_USER_SUCCESS,
  SetSignUpFormValidation,
  SET_SIGN_UP_FORM_VALIDATION,
  SignUpAction,
  SignUpUserFailure,
  SignUpUserRequest,
  SignUpUserSuccess,
  SIGN_UP_USER_FAILURE,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
} from "./SignUpConstants"

export const setSignUpFormValidation = (isFormValidated: boolean): SetSignUpFormValidation => {
  return {
    type: SET_SIGN_UP_FORM_VALIDATION,
    isFormValidated,
  }
}

export const signUpUserRequest = (): SignUpUserRequest => {
  return {
    type: SIGN_UP_USER_REQUEST,
  }
}

export const signUpUserSuccess = (signedUpUser: any): SignUpUserSuccess => {
  return {
    type: SIGN_UP_USER_SUCCESS,
    signedUpUser,
  }
}

export const signUpUserFailure = (): SignUpUserFailure => {
  return {
    type: SIGN_UP_USER_FAILURE,
  }
}

export const confirmSignUpUserRequest = (): ConfirmSignUpUserRequest => {
  return {
    type: CONFIRM_SIGN_UP_USER_REQUEST,
  }
}

export const confirmSignUpUserSuccess = (): ConfirmSignUpUserSuccess => {
  return {
    type: CONFIRM_SIGN_UP_USER_SUCCESS,
  }
}

export const confirmSignUpUserFailure = (): ConfirmSignUpUserFailure => {
  return {
    type: CONFIRM_SIGN_UP_USER_FAILURE,
  }
}

export const clearSignUpInfo = (): ClearSignUpInfo => {
  return {
    type: CLEAR_SIGN_UP_INFO,
  }
}

export const signUpUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<SignUpAction>) => {
    dispatch(signUpUserRequest())
    try {
      // const response = await Auth.signUp({
      //   username: email,
      //   password,
      // })
      // dispatch(signUpUserSuccess(response.user))
    } catch (error) {
      dispatch(signUpUserFailure())
    }
  }
}

export const confirmSignUpUser = (
  email: string,
  password: string,
  confirmationCode: string,
  history: History<any>
) => {
  console.log("email: ", email)
  console.log("password: ", password)
  console.log("confirmationCode: ", confirmationCode)
  return async (dispatch: Dispatch<any>) => {
    dispatch(confirmSignUpUserRequest())
    try {
      // await Auth.confirmSignUp(email, confirmationCode)
      dispatch(confirmSignUpUserSuccess())
    } catch (error) {
      dispatch(confirmSignUpUserFailure())
    }
    dispatch(loginUser(email, password, history))
  }
}
