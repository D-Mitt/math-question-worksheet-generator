export const SET_SELECTED_WORKSHEET_CATEGORY = "SET_SELECTED_WORKSHEET_CATEGORY"
export type SET_SELECTED_WORKSHEET_CATEGORY = typeof SET_SELECTED_WORKSHEET_CATEGORY

export const SET_SELECTED_WORKSHEET_SUB_CATEGORY = "SET_SELECTED_WORKSHEET_SUB_CATEGORY"
export type SET_SELECTED_WORKSHEET_SUB_CATEGORY = typeof SET_SELECTED_WORKSHEET_SUB_CATEGORY

export const GENERATE_WORKSHEET_REQUEST = "GENERATE_WORKSHEET_REQUEST"
export type GENERATE_WORKSHEET_REQUEST = typeof GENERATE_WORKSHEET_REQUEST

export const GENERATE_WORKSHEET_SUCCESS = "GENERATE_WORKSHEET_SUCCESS"
export type GENERATE_WORKSHEET_SUCCESS = typeof GENERATE_WORKSHEET_SUCCESS

export const GENERATE_WORKSHEET_FAILURE = "GENERATE_WORKSHEET_FAILURE"
export type GENERATE_WORKSHEET_FAILURE = typeof GENERATE_WORKSHEET_FAILURE

export const SET_SELECTED_WORKSHEET_TAB = "SET_SELECTED_WORKSHEET_TAB"
export type SET_SELECTED_WORKSHEET_TAB = typeof SET_SELECTED_WORKSHEET_TAB

export const WORKSHEET_TITLE_UPDATED = "WORKSHEET_TITLE_UPDATED"
export type WORKSHEET_TITLE_UPDATED = typeof WORKSHEET_TITLE_UPDATED

export const WORKSHEET_TITLE_ERROR_OCCURED = "WORKSHEET_TITLE_ERROR_OCCURED"
export type WORKSHEET_TITLE_ERROR_OCCURED = typeof WORKSHEET_TITLE_ERROR_OCCURED

export enum SelectedTabId {
  Questions = "questions-tab",
  Answers = "answers-tab",
}

export interface SetSelectedWorksheetCategory {
  type: SET_SELECTED_WORKSHEET_CATEGORY
  category: SelectCategory
}

export interface SetSelectedWorksheetTab {
  type: SET_SELECTED_WORKSHEET_TAB
  tab: SelectedTabId
}

export interface SetSelectedWorksheetSubCategory {
  type: SET_SELECTED_WORKSHEET_SUB_CATEGORY
  subCategory: SelectSubCategory
}

export interface GenerateWorksheetRequest {
  type: GENERATE_WORKSHEET_REQUEST
}

export interface GenerateWorksheetSuccess {
  type: GENERATE_WORKSHEET_SUCCESS
  subCategory: SelectSubCategory
  data: Worksheet
}

export interface GenerateWorksheetFailure {
  type: GENERATE_WORKSHEET_FAILURE
}

export interface WorksheetTitleUpdated {
  type: WORKSHEET_TITLE_UPDATED
  title: string
}

export interface WorksheetTitleErrorOccured {
  type: WORKSHEET_TITLE_ERROR_OCCURED
}

export type WorksheetAction =
  | SetSelectedWorksheetCategory
  | SetSelectedWorksheetTab
  | SetSelectedWorksheetSubCategory
  | GenerateWorksheetRequest
  | GenerateWorksheetSuccess
  | GenerateWorksheetFailure
  | WorksheetTitleUpdated
  | WorksheetTitleErrorOccured

export enum Category {
  None = "Select a Category...",
  Addition = "Addition",
  Subtraction = "Subtraction",
  Multiplication = "Multiplication",
  Division = "Division",
  AddFractions = "Adding Fractions",
  SubFractions = "Subtracting Fractions",
  MultiplyFractions = "Multiplying Fractions",
  DivideFractions = "Divding Fractions",
  OrderOfOperations = "Order of Operations",
  NumberTheory = "Number Theory",
}

export enum DefaultSubCategory {
  None = "Select a Sub-Category...",
}

export enum AdditionSubCategory {
  None = "Select a Sub-Category...",
  SingleDigit = "Single Digit Addition",
  DoubleDigit = "Double Digit Addition",
  LargeNumbers = "Large Numbers",
}

export interface Worksheet {
  questions: string[]
  answers: string[]
}

export const categories: SelectCategory[] = [
  {
    name: Category.None,
    isSelectable: false,
  },
  {
    name: Category.Addition,
    isSelectable: true,
  },
  {
    name: Category.Subtraction,
    isSelectable: false,
  },
  {
    name: Category.Multiplication,
    isSelectable: false,
  },
  {
    name: Category.Division,
    isSelectable: false,
  },
  {
    name: Category.AddFractions,
    isSelectable: false,
  },
  {
    name: Category.SubFractions,
    isSelectable: false,
  },
  {
    name: Category.MultiplyFractions,
    isSelectable: false,
  },
  {
    name: Category.DivideFractions,
    isSelectable: false,
  },
  {
    name: Category.OrderOfOperations,
    isSelectable: false,
  },
  {
    name: Category.NumberTheory,
    isSelectable: false,
  },
]

export const defaultSubCategories: SelectSubCategory[] = [
  { name: DefaultSubCategory.None, isSelectable: false },
]

export const additionSubCategories: SelectSubCategory[] = [
  {
    name: AdditionSubCategory.None,
    isSelectable: false,
  },
  {
    name: AdditionSubCategory.SingleDigit,
    isSelectable: true,
  },
  {
    name: AdditionSubCategory.DoubleDigit,
    isSelectable: true,
  },
  {
    name: AdditionSubCategory.LargeNumbers,
    isSelectable: true,
  },
]

export interface SelectCategory {
  name: Category
  isSelectable: boolean
}

export interface SelectSubCategory {
  name: string
  isSelectable: boolean
}
