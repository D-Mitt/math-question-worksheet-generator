import {
  Alignment,
  Button,
  Classes,
  Icon,
  Intent,
  Menu,
  MenuItem,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Position,
} from "@blueprintjs/core"
import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { setIsWorksheetDialogDisplayed } from "../store/dashboard/DashboardActions"
import { logoutUser } from "../store/login/LoginActions"

interface TopNavigationProps {
  isLoggedIn: boolean
}

const TopNavigation = (props: TopNavigationProps) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const goHome = () => {
    dispatch(setIsWorksheetDialogDisplayed(false))
    history.push("/")
  }

  const handleSignUpClick = () => {
    history.push("/signup")
  }

  async function handleLogout() {
    dispatch(logoutUser(history))
  }

  const renderAvailableButtons = () => {
    if (props.isLoggedIn) {
      return (
        <NavbarGroup align={Alignment.RIGHT}>
          <Button className={Classes.MINIMAL} icon="home" text="Home" onClick={goHome} />
          <NavbarDivider />
          <div className="mr-1">Anonymous</div>
          <Popover
            content={
              <Menu>
                <MenuItem icon="log-out" text="Logout" onClick={handleLogout} />
              </Menu>
            }
            position={Position.BOTTOM_LEFT}
          >
            <Button className={Classes.MINIMAL}>
              <Icon icon="user" iconSize={Icon.SIZE_LARGE} intent={Intent.PRIMARY} />
              <Icon icon="caret-down" intent={Intent.PRIMARY} />
            </Button>
          </Popover>
        </NavbarGroup>
      )
    }
    return (
      <NavbarGroup align={Alignment.RIGHT}>
        <Button className={Classes.INTENT_WARNING} text="Sign up" onClick={handleSignUpClick} />
      </NavbarGroup>
    )
  }

  return (
    <Navbar className={`${Classes.DARK}`} fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading className="mouse-pointer" onClick={goHome}>
          Math Worksheet Generation
        </NavbarHeading>
      </NavbarGroup>
      {renderAvailableButtons()}
    </Navbar>
  )
}

export default TopNavigation
