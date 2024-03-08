import { Button, Classes, Dialog, Intent } from "@blueprintjs/core"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDeleteDialogDisplayed } from "../../store/dashboard/DashboardActions"
import { deleteWorksheetById } from "../../store/savedWorksheet/SavedWorksheetActions"
import { State } from "../../store/store"

const DeleteWorksheetDialog = () => {
  const dispatch = useDispatch()
  const isDeleteDialogDisplayed = useSelector(
    (state: State) => state.dashboard.isDeleteDialogDisplayed
  )
  const worksheetToDelete = useSelector((state: State) => state.dashboard.worksheetToDelete)

  const displayDeleteDialog = (isDisplayed: boolean, id: string, title: string) => {
    dispatch(setDeleteDialogDisplayed(isDisplayed, id, title))
  }

  const deleteWorksheet = (id: string) => {
    dispatch(deleteWorksheetById(id))
    dispatch(setDeleteDialogDisplayed(false, "", ""))
  }

  if (isDeleteDialogDisplayed) {
    return (
      <Dialog
        className={`delete-dialog ${Classes.DARK} w33`}
        icon="delete"
        isOpen
        title="Delete this worksheet?"
        onClose={e => displayDeleteDialog(false, "", "")}
      >
        <div className={`${Classes.DIALOG_BODY} bottom-divider-dark-mode pb-2`}>
          <p>{`Are you sure you want to delete '${worksheetToDelete.title}'?`}</p>
          <p>This action cannot be undone!</p>
        </div>

        <div className={`${Classes.DIALOG_FOOTER}`}>
          <div className={`${Classes.DIALOG_FOOTER_ACTIONS}`}>
            <Button
              className="px-3 mr-2"
              intent={Intent.NONE}
              text="Cancel"
              onClick={() => displayDeleteDialog(false, "", "")}
            />
            <Button
              className="px-3"
              intent={Intent.DANGER}
              text="Delete worksheet"
              onClick={() => deleteWorksheet(worksheetToDelete.id)}
            />
          </div>
        </div>
      </Dialog>
    )
  }
  return null
}

export default DeleteWorksheetDialog
