import { Button, H4, H6, Intent } from "@blueprintjs/core"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setIsWorksheetDialogDisplayed } from "../../store/dashboard/DashboardActions"
import { State } from "../../store/store"
import DashboardWorksheetLink from "./DashboardWorksheetLink"

const DashboardWorksheetList = () => {
  const dispatch = useDispatch()
  const showCreateWorksheetDialog = (shouldDisplayWorksheetDialog: boolean) => {
    dispatch(setIsWorksheetDialogDisplayed(shouldDisplayWorksheetDialog))
  }
  const savedWorksheets = useSelector((state: State) => state.savedWorksheets.worksheets)

  const RECENT_NUMBER = 5

  const listRecentWorksheets = () => {
    const savedWorksheetsArray = Object.values(savedWorksheets)

    if (savedWorksheets && savedWorksheetsArray.length > 0) {
      const worksheets: any[] = []
      let index = 0
      while (worksheets.length < RECENT_NUMBER) {
        worksheets.push(
          <DashboardWorksheetLink
            key={Object.keys(savedWorksheets)[index]}
            title={savedWorksheetsArray[index].title}
            id={Object.keys(savedWorksheets)[index]}
          />
        )

        index++
        if (index === savedWorksheetsArray.length) {
          break
        }
      }

      return worksheets
    }

    return null
  }

  return (
    <div className="w33 mb-5 pl-3">
      <div className="w100 d-inline-flex">
        <H4 className="w83 pb-2 pl-3 mb-0 subtitle-underline bp3-heading mr-3">Worksheets</H4>
        <Button className="px-3 mr-2" intent={Intent.PRIMARY} text="Library..." />
        <Button
          className="px-3"
          icon="add"
          intent={Intent.SUCCESS}
          text="Create"
          onClick={() => showCreateWorksheetDialog(true)}
        />
      </div>

      <div className="pl-4 mt-3 w100">
        <H6 className="">Recent</H6>
        <ul className="bp3-list bp3-list-unstyled w100">{listRecentWorksheets()}</ul>
      </div>
    </div>
  )
}

export default DashboardWorksheetList
