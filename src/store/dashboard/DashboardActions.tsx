import { SetDeleteDialogDisplayed, SetIsLessonDialogDisplayed, SetIsWorksheetDialogDisplayed, SET_DELETE_DIALOG_DISPLAYED, SET_IS_LESSON_DIALOG_DISPLAYED, SET_IS_WORKSHEET_DIALOG_DISPLAYED } from "./DashboardConstants"

export const setIsWorksheetDialogDisplayed = (
  isDisplayed: boolean
): SetIsWorksheetDialogDisplayed => {
  return {
    type: SET_IS_WORKSHEET_DIALOG_DISPLAYED,
    isDisplayed,
  }
}

export const setIsLessonDialogDisplayed = (isDisplayed: boolean): SetIsLessonDialogDisplayed => {
  return {
    type: SET_IS_LESSON_DIALOG_DISPLAYED,
    isDisplayed,
  }
}

export const setDeleteDialogDisplayed = (
  isDisplayed: boolean,
  id: string,
  title: string
): SetDeleteDialogDisplayed => {
  return {
    type: SET_DELETE_DIALOG_DISPLAYED,
    isDisplayed,
    id,
    title,
  }
}
