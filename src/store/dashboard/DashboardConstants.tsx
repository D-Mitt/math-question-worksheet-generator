export const SET_IS_WORKSHEET_DIALOG_DISPLAYED = "SET_IS_WORKSHEET_DIALOG_DISPLAYED"
export type SET_IS_WORKSHEET_DIALOG_DISPLAYED = typeof SET_IS_WORKSHEET_DIALOG_DISPLAYED

export const SET_IS_LESSON_DIALOG_DISPLAYED = "SET_IS_LESSON_DIALOG_DISPLAYED"
export type SET_IS_LESSON_DIALOG_DISPLAYED = typeof SET_IS_LESSON_DIALOG_DISPLAYED

export const SET_DELETE_DIALOG_DISPLAYED = "SET_DELETE_DIALOG_DISPLAYED"
export type SET_DELETE_DIALOG_DISPLAYED = typeof SET_DELETE_DIALOG_DISPLAYED

export interface SetIsWorksheetDialogDisplayed {
  type: SET_IS_WORKSHEET_DIALOG_DISPLAYED
  isDisplayed: boolean
}

export interface SetIsLessonDialogDisplayed {
  type: SET_IS_LESSON_DIALOG_DISPLAYED
  isDisplayed: boolean
}

export interface SetDeleteDialogDisplayed {
  type: SET_DELETE_DIALOG_DISPLAYED
  isDisplayed: boolean
  id: string
  title: string
}

export type DashboardAction =
  | SetIsWorksheetDialogDisplayed
  | SetIsLessonDialogDisplayed
  | SetDeleteDialogDisplayed
