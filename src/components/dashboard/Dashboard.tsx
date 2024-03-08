import { Classes, H3 } from "@blueprintjs/core"
import * as React from "react"
import { useDispatch } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import { verifyUserIsLoggedIn } from "../../store/login/LoginActions"
import TopNavigation from "../TopNavigation"
import WorksheetDialog from "../worksheetDialog/WorksheetDialog"
import DashboardLessonList from "./DashboardLessonList"
import DashboardWorksheetList from "./DashboardWorksheetList"
import DeleteWorksheetDialog from "./DeleteWorksheetDialog"

const Dashboard = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const verifyUserAuth = () => {
    dispatch(verifyUserIsLoggedIn(history, location.pathname))
  }

  React.useEffect(() => {
    verifyUserAuth()
  }, [])

  return (
    <>
      <WorksheetDialog />
      <DeleteWorksheetDialog />
      <TopNavigation isLoggedIn />
      <div className={`${Classes.DARK} container dashboard-container dark-mode-background`}>
        <H3 className="pl-3 title-underline pb-2 mt-3 mb-5 bp3-heading">Dashboard</H3>
        <DashboardWorksheetList />
        <DashboardLessonList />
      </div>
    </>
  )
}

export default Dashboard
