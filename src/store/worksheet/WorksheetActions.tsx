import { History } from "history"
import { Dispatch } from "redux"
// import { setIsWorksheetDialogDisplayed } from "../dashboard/DashboardActions"
import {
  GenerateWorksheetFailure,
  GenerateWorksheetRequest,
  GenerateWorksheetSuccess,
  GENERATE_WORKSHEET_FAILURE,
  GENERATE_WORKSHEET_REQUEST,
  GENERATE_WORKSHEET_SUCCESS,
  SelectCategory,
  SelectedTabId,
  SelectSubCategory,
  SetSelectedWorksheetCategory,
  SetSelectedWorksheetSubCategory,
  SetSelectedWorksheetTab,
  SET_SELECTED_WORKSHEET_CATEGORY,
  SET_SELECTED_WORKSHEET_SUB_CATEGORY,
  SET_SELECTED_WORKSHEET_TAB,
  Worksheet,
  WorksheetTitleErrorOccured,
  WorksheetTitleUpdated,
  WORKSHEET_TITLE_ERROR_OCCURED,
  WORKSHEET_TITLE_UPDATED,
} from "./WorksheetConstants"

export const setSelectedWorksheetCategory = (
  category: SelectCategory
): SetSelectedWorksheetCategory => {
  return {
    type: SET_SELECTED_WORKSHEET_CATEGORY,
    category,
  }
}

export const setSelectedWorksheetSubCategory = (
  subCategory: SelectSubCategory
): SetSelectedWorksheetSubCategory => {
  return {
    type: SET_SELECTED_WORKSHEET_SUB_CATEGORY,
    subCategory,
  }
}

export const setSelectedWorksheetTab = (tab: SelectedTabId): SetSelectedWorksheetTab => {
  return {
    type: SET_SELECTED_WORKSHEET_TAB,
    tab,
  }
}

export const generateWorksheetRequest = (): GenerateWorksheetRequest => {
  return {
    type: GENERATE_WORKSHEET_REQUEST,
  }
}

export const generateWorksheetSuccess = (
  subCategory: SelectSubCategory,
  data: Worksheet
): GenerateWorksheetSuccess => {
  return {
    type: GENERATE_WORKSHEET_SUCCESS,
    subCategory,
    data,
  }
}

export const generateWorksheetFailure = (): GenerateWorksheetFailure => {
  return {
    type: GENERATE_WORKSHEET_FAILURE,
  }
}

export const updateTitle = (title: string): WorksheetTitleUpdated => {
  return {
    type: WORKSHEET_TITLE_UPDATED,
    title,
  }
}

export const setWorkSheetTitleError = (): WorksheetTitleErrorOccured => {
  return {
    type: WORKSHEET_TITLE_ERROR_OCCURED,
  }
}

export const generateWorksheet = (
  cat: SelectCategory,
  subCat: SelectSubCategory,
  settings: {},
  history: History<any>
) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(generateWorksheetRequest())
    // try {
    // let response
    // const payload = {
    //   category: cat.name,
    //   subCategory: subCat.name,
    //   config: settings,
    // }

    // response = await API.post("worksheets", "/generate", {
    //   body: payload,
    // })

    // if (response) {
    //   dispatch(generateWorksheetSuccess(subCat, response))
    //   dispatch(setIsWorksheetDialogDisplayed(false))
    history.push("/worksheets")
    // }
    // } catch (error) {
    //   console.error(error)
    //   dispatch(generateWorksheetFailure())
    // }
  }
}
