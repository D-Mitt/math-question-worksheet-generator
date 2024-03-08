import { History } from "history"
import { Dispatch } from "redux"
import { clearSignUpInfo } from "../signup/SignUpActions"
import { SignUpAction } from "../signup/SignUpConstants"
import {
  LoginAction,
  LoginUserFailure,
  LoginUserRequest,
  LoginUserSuccess,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LogoutUserFailure,
  LogoutUserRequest,
  LogoutUserSuccess,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  SetLoginFormValidation,
  SET_LOGIN_FORM_VALIDATION,
  VerifyUserFailure,
  VerifyUserRequest,
  VerifyUserSuccess,
  VERIFY_USER_FAILURE,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
} from "./LoginConstants"

export const setLoginFormValidation = (isFormValidated: boolean): SetLoginFormValidation => {
  return {
    type: SET_LOGIN_FORM_VALIDATION,
    isFormValidated,
  }
}

export const verifyUserRequest = (): VerifyUserRequest => {
  return {
    type: VERIFY_USER_REQUEST,
  }
}

export const verifyUserSuccess = (): VerifyUserSuccess => {
  return {
    type: VERIFY_USER_SUCCESS,
  }
}

export const verifyUserFailure = (): VerifyUserFailure => {
  return {
    type: VERIFY_USER_FAILURE,
  }
}

export const loginUserRequest = (): LoginUserRequest => {
  return {
    type: LOGIN_USER_REQUEST,
  }
}

export const loginUserSuccess = (): LoginUserSuccess => {
  return {
    type: LOGIN_USER_SUCCESS,
  }
}

export const loginUserFailure = (): LoginUserFailure => {
  return {
    type: LOGIN_USER_FAILURE,
  }
}

export const logoutUserRequest = (): LogoutUserRequest => {
  return {
    type: LOGOUT_USER_REQUEST,
  }
}

export const logoutUserSuccess = (): LogoutUserSuccess => {
  return {
    type: LOGOUT_USER_SUCCESS,
  }
}

export const logoutUserFailure = (): LogoutUserFailure => {
  return {
    type: LOGOUT_USER_FAILURE,
  }
}

export const verifyUserIsLoggedIn = (history: History<any>, pathName: string) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    dispatch(verifyUserRequest())
    try {
      dispatch(verifyUserSuccess())
      if (pathName === "/login" || pathName === "/signup") {
        history.push("/dashboard")
      }
    } catch (error) {
      if (pathName !== "/login" && pathName !== "/signup") {
        history.push("/login")
      }
      dispatch(verifyUserFailure())
    }
  }
}

export const loginUser = (email: string, password: string, history: History<any>) => {
  return async (dispatch: Dispatch<LoginAction | SignUpAction>) => {
    dispatch(loginUserRequest())
    try {
      dispatch(loginUserSuccess())
      dispatch(clearSignUpInfo())
      history.push("/dashboard")
    } catch (error) {
      dispatch(loginUserFailure())
    }
  }
}

export const logoutUser = (history: History<any>) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    dispatch(logoutUserRequest())
    try {
      dispatch(logoutUserSuccess())
      history.push("/login")
    } catch (error) {
      dispatch(logoutUserFailure())
    }
  }
}
