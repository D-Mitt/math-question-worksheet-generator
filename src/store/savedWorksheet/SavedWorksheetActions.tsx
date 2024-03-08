import { Dispatch } from "redux"
import { SelectCategory, SelectSubCategory } from "../worksheet/WorksheetConstants"
import {
  SaveWorksheetFailure,
  SaveWorksheetRequest,
  SaveWorksheetSuccess,
  SAVE_WORKSHEET_FAILURE,
  SAVE_WORKSHEET_REQUEST,
  SAVE_WORKSHEET_SUCCESS,
  WorksheetDeleted,
  WORKSHEET_DELETED,
} from "./SavedWorksheetConstants"

export const saveWorksheetRequest = (): SaveWorksheetRequest => {
  return {
    type: SAVE_WORKSHEET_REQUEST,
  }
}

export const saveWorksheetSuccess = (worksheetData: {
  title: string
  questions: string[]
  answers: string[]
  category: SelectCategory
  subCategory: SelectSubCategory
}): SaveWorksheetSuccess => {
  return {
    type: SAVE_WORKSHEET_SUCCESS,
    worksheetData,
  }
}

export const saveWorksheetFailure = (): SaveWorksheetFailure => {
  return {
    type: SAVE_WORKSHEET_FAILURE,
  }
}

export const saveWorksheet = (
  title: string,
  questions: string[],
  answers: string[],
  category: SelectCategory,
  subCategory: SelectSubCategory
) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(saveWorksheetRequest())
    try {
      dispatch(
        saveWorksheetSuccess({
          title,
          questions,
          answers,
          category,
          subCategory,
        })
      )
    } catch (error) {
      console.error(error)
      dispatch(saveWorksheetFailure())
    }
  }
}

export const deleteWorksheetById = (id: string): WorksheetDeleted => {
  return {
    type: WORKSHEET_DELETED,
    id,
  }
}
