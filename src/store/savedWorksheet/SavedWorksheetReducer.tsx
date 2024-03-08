import { v4 as uuidv4 } from "uuid"
import {
  SAVE_WORKSHEET_FAILURE,
  SAVE_WORKSHEET_REQUEST,
  SAVE_WORKSHEET_SUCCESS,
  WorksheetAction,
  WORKSHEET_DELETED,
} from "./SavedWorksheetConstants"

const savedWorksheetReducer = (
  state = {
    worksheets: {},
    isSavingWorksheet: false,
    isSaveError: false,
  },
  action: WorksheetAction
) => {
  let newState = state

  switch (action.type) {
    case SAVE_WORKSHEET_REQUEST:
      newState = {
        ...newState,
        isSavingWorksheet: true,
        isSaveError: false,
      }
      break
    case SAVE_WORKSHEET_SUCCESS:
      newState = {
        ...newState,
        isSavingWorksheet: false,
        worksheets: {
          ...newState.worksheets,
          [uuidv4()]: action.worksheetData,
        },
      }
      break
    case SAVE_WORKSHEET_FAILURE:
      newState = {
        ...newState,
        isSavingWorksheet: false,
        isSaveError: true,
      }
      break
    case WORKSHEET_DELETED:
      newState = {
        ...newState,
        worksheets: {
          ...newState.worksheets,
        },
      }

      delete newState.worksheets[action.id]
      break
    default:
      newState = {
        ...newState,
      }
      break
  }
  return newState
}

export default savedWorksheetReducer
