import { Button, Classes, FormGroup, H3, InputGroup, Spinner } from "@blueprintjs/core"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import { verifyUserIsLoggedIn } from "../../store/login/LoginActions"
import {
  confirmSignUpUser,
  setSignUpFormValidation,
  signUpUser,
} from "../../store/signup/SignUpActions"
import { State } from "../../store/store"
import TopNavigation from "../TopNavigation"

const SignUp = (props: any) => {
  const dispatch = useDispatch()
  const passwordInputRef = React.useRef<HTMLInputElement | null>(null)
  const confirmPasswordInputRef = React.useRef<HTMLInputElement | null>(null)
  const emailInputRef = React.useRef<HTMLInputElement | null>(null)
  const confirmationCodeInputRef = React.useRef<HTMLInputElement | null>(null)
  const isFormValidated = useSelector((state: State) => state.signup.isFormValidated)
  const isSigningUp = useSelector((state: State) => state.signup.isSigningUp)
  const isConfirmingCode = useSelector((state: State) => state.signup.isConfirmingCode)
  const signedUpUser = useSelector((state: State) => state.signup.signedUpUser)
  const setFormValidation = (isFormValidated: boolean) => {
    dispatch(setSignUpFormValidation(isFormValidated))
  }

  const history = useHistory()
  const location = useLocation()
  const verifyUserAuth = () => {
    dispatch(verifyUserIsLoggedIn(history, location.pathname))
  }

  React.useEffect(() => {
    verifyUserAuth()
  }, [])

  const validateForm = () => {
    let isValidated = false
    if (passwordInputRef.current && emailInputRef.current) {
      isValidated =
        emailInputRef.current.value.length > 0 &&
        passwordInputRef.current.value.length > 0 &&
        isPasswordConfirmed()
    }
    setFormValidation(isValidated)
  }

  const validateConfirmationForm = () => {
    if (confirmationCodeInputRef.current) {
      return confirmationCodeInputRef.current.value.length > 0
    }
    return false
  }

  const isPasswordConfirmed = () => {
    if (passwordInputRef.current && confirmPasswordInputRef.current) {
      return passwordInputRef.current.value === confirmPasswordInputRef.current.value
    }
    return false
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    if (passwordInputRef.current && emailInputRef.current && isPasswordConfirmed()) {
      dispatch(signUpUser(emailInputRef.current.value, passwordInputRef.current.value))
    }
  }

  const handleConfirmationSubmit = async (event: any) => {
    event.preventDefault()

    if (
      passwordInputRef.current &&
      emailInputRef.current &&
      confirmationCodeInputRef.current &&
      isPasswordConfirmed()
    ) {
      dispatch(
        confirmSignUpUser(
          emailInputRef.current.value,
          passwordInputRef.current.value,
          confirmationCodeInputRef.current.value,
          history
        )
      )
    }
  }

  const renderVerificationButton = () => {
    if (isConfirmingCode) {
      return (
        <Button type="submit" large disabled={!validateConfirmationForm()}>
          <div className="d-flex">
            <div className="mr-2">Verify</div>
            <div>
              <Spinner className={`${Classes.SMALL}`} />
            </div>
          </div>
        </Button>
      )
    }

    return (
      <Button type="submit" large disabled={!validateConfirmationForm}>
        <div className="d-flex">
          <div>Verify</div>
        </div>
      </Button>
    )
  }

  const renderSignUpButton = () => {
    if (isSigningUp) {
      return (
        <Button type="submit" large disabled={!isFormValidated}>
          <div className="d-flex">
            <div className="mr-2">Sign Up</div>
            <div>
              <Spinner className={`${Classes.SMALL}`} />
            </div>
          </div>
        </Button>
      )
    }

    return (
      <Button type="submit" large disabled={!isFormValidated}>
        <div className="d-flex">
          <div>Sign Up</div>
        </div>
      </Button>
    )
  }

  const renderForm = () => {
    let hidden = ""
    if (signedUpUser) {
      hidden = "d-none"
    }

    return (
      <div className={`${Classes.DARK} ${hidden} container signup-container dark-mode-background`}>
        <form className="signup-form w17 mx-auto" onSubmit={handleSubmit}>
          <div className="d-flex">
            <H3 className="mx-auto mb-4">Math Worksheet Generation Sign Up</H3>
          </div>

          <FormGroup label="Email" labelFor="email-sign-up">
            <InputGroup
              type="email"
              id="email-sign-up"
              inputRef={(input: any) => (emailInputRef.current = input)}
              onChange={(e: any) => validateForm()}
            />
          </FormGroup>
          <FormGroup label="Password" labelFor="password-sign-up">
            <InputGroup
              id="password-sign-up"
              type="password"
              inputRef={(input: any) => (passwordInputRef.current = input)}
              onChange={(e: any) => validateForm()}
            />
          </FormGroup>
          <FormGroup label="Confirm Password" labelFor="confirm-password-sign-up">
            <InputGroup
              id="confirm-password-sign-up"
              type="password"
              inputRef={(input: any) => (confirmPasswordInputRef.current = input)}
              onChange={(e: any) => validateForm()}
            />
          </FormGroup>
          {renderSignUpButton()}
        </form>
      </div>
    )
  }

  const renderConfirmationForm = () => {
    let hidden = ""
    if (!signedUpUser) {
      hidden = "d-none"
    }

    return (
      <div className={`${Classes.DARK} ${hidden} container signup-container dark-mode-background`}>
        <form className="signup-form w17 mx-auto" onSubmit={handleConfirmationSubmit}>
          <FormGroup label="Confirmation Code" labelFor="confirmation-code">
            <InputGroup
              type="tel"
              id="confirmation-code"
              inputRef={(input: any) => (confirmationCodeInputRef.current = input)}
            />
            <div>Please check your email for the code.</div>
          </FormGroup>
          {renderVerificationButton()}
        </form>
      </div>
    )
  }

  return (
    <div>
      <TopNavigation isLoggedIn={false} />
      {renderForm()}
      {renderConfirmationForm()}
    </div>
  )
}

export default SignUp
