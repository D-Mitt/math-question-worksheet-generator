import React from "react"
import { withRouter } from "react-router"
import Routes from "./Routes"

const App = () => {
  return (
    <div>
      <main role="main">
        <div className="main-view">
          <Routes />
        </div>
      </main>
    </div>
  )
}

export default withRouter(App)
