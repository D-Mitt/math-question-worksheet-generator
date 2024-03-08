import { Button, Intent } from "@blueprintjs/core"
import * as React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { setDeleteDialogDisplayed } from "../../store/dashboard/DashboardActions"

const DashboardWorksheetLink = (props: any) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const displayDeleteDialog = (event: any) => {
    event.stopPropagation()
    dispatch(setDeleteDialogDisplayed(true, props.id, props.title))
  }

  const goToWorksheet = () => {
    history.push(`/worksheets/${props.id}`)
  }

  return (
    <li className="d-inline-flex w100">
      <div
        className="d-inline-flex w100 pl-3 bp3-text-overflow-ellipsis d-block recent-worksheet"
        onClick={goToWorksheet}
      >
        <div className="align-self-center">{props.title}</div>
        <Button
          minimal
          icon="small-cross"
          intent={Intent.DANGER}
          className="delete-worksheet-button ml-auto"
          onClick={displayDeleteDialog}
        />
      </div>
    </li>
  )
}

export default DashboardWorksheetLink
