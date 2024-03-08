import {
  CLEAR_SIGN_UP_INFO,
  CONFIRM_SIGN_UP_USER_FAILURE,
  CONFIRM_SIGN_UP_USER_REQUEST,
  CONFIRM_SIGN_UP_USER_SUCCESS,
  SET_SIGN_UP_FORM_VALIDATION,
  SignUpAction,
  SIGN_UP_USER_FAILURE,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
} from "./SignUpConstants"

const signupReducer = (
  state = {
    isFormValidated: false,
    isVerifyFormValidated: false,
    isSigningUp: false,
    isConfirmingCode: false,
    signedUpUser: null,
  },
  action: SignUpAction
) => {
  let newState = state

  switch (action.type) {
    case SET_SIGN_UP_FORM_VALIDATION:
      newState = {
        ...newState,
        isFormValidated: action.isFormValidated,
      }
      break
    case SIGN_UP_USER_REQUEST:
      newState = {
        ...newState,
        isSigningUp: true,
        signedUpUser: null,
      }
      break
    case SIGN_UP_USER_SUCCESS:
      newState = {
        ...newState,
        isSigningUp: false,
        signedUpUser: action.signedUpUser,
      }
      break
    case SIGN_UP_USER_FAILURE:
      newState = {
        ...newState,
        isSigningUp: false,
        signedUpUser: null,
      }
      break
    case CONFIRM_SIGN_UP_USER_REQUEST:
      newState = {
        ...newState,
        isConfirmingCode: true,
      }
      break
    case CONFIRM_SIGN_UP_USER_SUCCESS:
      newState = {
        ...newState,
        isConfirmingCode: false,
      }
      break
    case CONFIRM_SIGN_UP_USER_FAILURE:
      newState = {
        ...newState,
        isConfirmingCode: false,
      }
      break
    case CLEAR_SIGN_UP_INFO:
      newState = {
        ...newState,
        isFormValidated: false,
        isVerifyFormValidated: false,
        isSigningUp: false,
        isConfirmingCode: false,
        signedUpUser: null,
      }
      break
  }
  return newState
}

export default signupReducer
