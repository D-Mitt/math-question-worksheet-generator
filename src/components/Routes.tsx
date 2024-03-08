import { Classes } from "@blueprintjs/core"
import React from "react"
import { Route, Switch } from "react-router"
import Dashboard from "./dashboard/Dashboard"
// import Login from "./login/login"
import Sidebar from "./Sidebar"
import SignUp from "./singup/Signup"
import WorksheetDisplay from "./worksheet/WorksheetDisplay"

const NotFound = () => {
  return (
    <div className={`${Classes.DARK} ml-3 not-found dark-mode-background`}>
      <h1>Sorry, page not found</h1>
    </div>
  )
}

export default function Routes() {
  return (
    <Switch>
      <Route exact path={["/", "/dashboard", "/login"]}>
        <Sidebar />
        <Dashboard />
      </Route>
      {/* <Route path={"/login"}>
        <Login />
      </Route> */}
      <Route path={"/signup"}>
        <SignUp />
      </Route>
      <Route path={"/worksheets"}>
        <Sidebar />
        <WorksheetDisplay />
      </Route>
      <Route component={NotFound} />
    </Switch>
  )
}
