import { SelectCategory, SelectSubCategory } from "../worksheet/WorksheetConstants"

export const SAVE_WORKSHEET_REQUEST = "SAVE_WORKSHEET_REQUEST"
export type SAVE_WORKSHEET_REQUEST = typeof SAVE_WORKSHEET_REQUEST

export const SAVE_WORKSHEET_SUCCESS = "SAVE_WORKSHEET_SUCCESS"
export type SAVE_WORKSHEET_SUCCESS = typeof SAVE_WORKSHEET_SUCCESS

export const SAVE_WORKSHEET_FAILURE = "SAVE_WORKSHEET_FAILURE"
export type SAVE_WORKSHEET_FAILURE = typeof SAVE_WORKSHEET_FAILURE

export const WORKSHEET_DELETED = "WORKSHEET_DELETED"
export type WORKSHEET_DELETED = typeof WORKSHEET_DELETED

export interface SaveWorksheetRequest {
  type: SAVE_WORKSHEET_REQUEST
}

export interface SaveWorksheetSuccess {
  type: SAVE_WORKSHEET_SUCCESS
  worksheetData: {
    title: string
    questions: string[]
    answers: string[]
    category: SelectCategory
    subCategory: SelectSubCategory
  }
}

export interface SaveWorksheetFailure {
  type: SAVE_WORKSHEET_FAILURE
}

export interface WorksheetDeleted {
  type: WORKSHEET_DELETED
  id: string
}

export type WorksheetAction =
  | SaveWorksheetRequest
  | SaveWorksheetSuccess
  | SaveWorksheetFailure
  | WorksheetDeleted
