import {
  DashboardAction,
  SET_DELETE_DIALOG_DISPLAYED,
  SET_IS_WORKSHEET_DIALOG_DISPLAYED,
} from "./DashboardConstants"

const dashboardReducer = (
  state = {
    isWorksheetDialogDisplayed: false,
    isDeleteDialogDisplayed: false,
    worksheetToDelete: {
      title: "",
      id: "",
    },
  },
  action: DashboardAction
) => {
  let newState = state

  switch (action.type) {
    case SET_IS_WORKSHEET_DIALOG_DISPLAYED:
      newState = {
        ...newState,
        isWorksheetDialogDisplayed: action.isDisplayed,
      }
      break
    case SET_DELETE_DIALOG_DISPLAYED:
      newState = {
        ...newState,
        isDeleteDialogDisplayed: action.isDisplayed,
        worksheetToDelete: {
          title: action.title,
          id: action.id,
        },
      }
      break
  }
  return newState
}

export default dashboardReducer
