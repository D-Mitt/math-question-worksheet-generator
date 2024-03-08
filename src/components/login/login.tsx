import { Button, Classes, FormGroup, H3, InputGroup, Spinner } from "@blueprintjs/core"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import {
  loginUser,
  setLoginFormValidation,
  verifyUserIsLoggedIn,
} from "../../store/login/LoginActions"
import { State } from "../../store/store"
import TopNavigation from "../TopNavigation"

const Login = (props: any) => {
  const dispatch = useDispatch()
  const passwordInputRef = React.useRef<HTMLInputElement | null>(null)
  const emailInputRef = React.useRef<HTMLInputElement | null>(null)
  const isLoginFormValidated = useSelector((state: State) => state.login.isFormValidated)
  const isLoggingIn = useSelector((state: State) => state.login.isLoggingIn)
  const setFormValidation = (isFormValidated: boolean) => {
    dispatch(setLoginFormValidation(isFormValidated))
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
        emailInputRef.current.value.length > 0 && passwordInputRef.current.value.length > 0
    }
    setFormValidation(isValidated)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    if (passwordInputRef.current && emailInputRef.current) {
      dispatch(loginUser(emailInputRef.current.value, passwordInputRef.current.value, history))
    }
  }

  const renderLoginButton = () => {
    if (isLoggingIn) {
      return (
        <Button type="submit" large disabled={!isLoginFormValidated}>
          <div className="d-flex">
            <div className="mr-2">Login</div>
            <div>
              <Spinner className={`${Classes.SMALL}`} />
            </div>
          </div>
        </Button>
      )
    }

    return (
      <Button type="submit" large disabled={!isLoginFormValidated}>
        <div className="d-flex">
          <div>Login</div>
        </div>
      </Button>
    )
  }

  return (
    <>
      <TopNavigation isLoggedIn={false} />
      <div className={`${Classes.DARK} container login-container dark-mode-background`}>
        <form className="login-form w17 mx-auto" onSubmit={handleSubmit}>
          <div className="d-flex">
            <H3 className="mx-auto mb-4">Math Worksheet Generation</H3>
          </div>

          <FormGroup label="Email" labelFor="email-login">
            <InputGroup
              type="email"
              id="email-login"
              inputRef={(input: any) => (emailInputRef.current = input)}
              onChange={(e: any) => validateForm()}
            />
          </FormGroup>

          <FormGroup label="Password" labelFor="password-login">
            <InputGroup
              id="password-login"
              type="password"
              inputRef={(input: any) => (passwordInputRef.current = input)}
              onChange={(e: any) => validateForm()}
            />
          </FormGroup>
          {renderLoginButton()}
        </form>
      </div>
    </>
  )
}

export default Login
