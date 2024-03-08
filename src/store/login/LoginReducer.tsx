import {
  LoginAction,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  SET_LOGIN_FORM_VALIDATION,
} from "./LoginConstants"

const loginReducer = (
  state = {
    isFormValidated: false,
    isLoggingIn: false,
  },
  action: LoginAction
) => {
  let newState = state

  switch (action.type) {
    case SET_LOGIN_FORM_VALIDATION:
      newState = {
        ...newState,
        isFormValidated: action.isFormValidated,
      }
      break
    case LOGIN_USER_REQUEST:
      newState = {
        ...newState,
        isLoggingIn: true,
      }
      break
    case LOGIN_USER_SUCCESS:
      newState = {
        ...newState,
        isLoggingIn: false,
        isFormValidated: false,
      }
      break
    case LOGIN_USER_FAILURE:
      newState = {
        ...newState,
        isLoggingIn: false,
        isFormValidated: false,
      }
      break
  }
  return newState
}

export default loginReducer
