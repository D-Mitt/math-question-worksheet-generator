import { NumberRange } from "@blueprintjs/core"
import configureStore from "./configureStore"
import {
  categories,
  defaultSubCategories,
  SelectCategory,
  SelectedTabId,
  SelectSubCategory,
} from "./worksheet/WorksheetConstants"

export interface State {
  addition: {
    questions: string[]
    answers: string[]
  }
  dashboard: {
    isWorksheetDialogDisplayed: boolean
    isLessonDialogDisplayed: boolean
    isDeleteDialogDisplayed: boolean
    worksheetToDelete: {
      title: string
      id: string
    }
  }
  login: {
    isFormValidated: boolean
    isLoggingIn: boolean
  }
  signup: {
    isFormValidated: boolean
    isVerifyFormValidated: boolean
    isSigningUp: boolean
    isConfirmingCode: boolean
    signedUpUser: any
  }
  // TODO: remove after worksheets stored in backend
  savedWorksheets: {
    isSavingWorksheet: boolean
    isSaveError: boolean
    worksheets: {
      [s: string]: {
        title: string
        questions: string[]
        answers: string[]
        category: SelectCategory
        subCategory: SelectSubCategory
      }
    }
  }
  worksheet: {
    selectedCreationCategory: SelectCategory
    selectedCreationSubCategory: SelectSubCategory
    creationSubCategoryList: SelectSubCategory[]
    questions: string[]
    answers: string[]
    selectedTabId: SelectedTabId
    selectedWorksheet: string
    title: string
    titleError: boolean
  }
  workSheetSettings: {
    singleDigitAddition: {
      isInline: boolean
      numOfQuestions: number
      numPerQuestion: NumberRange
    }
    doubleDigitAddition: {
      questionsPerWorksheet: number
      numPerQuestion: NumberRange
    }
    largeNumberAddition: {
      questionsPerWorksheet: number
      numPerQuestion: NumberRange
      rangeOfDigitsPerNumber: NumberRange
    }
  }
}

const initialState: State = {
  addition: {
    questions: [],
    answers: [],
  },
  dashboard: {
    isWorksheetDialogDisplayed: false,
    isLessonDialogDisplayed: false,
    isDeleteDialogDisplayed: false,
    worksheetToDelete: {
      title: "",
      id: "",
    },
  },
  login: {
    isFormValidated: false,
    isLoggingIn: false,
  },
  signup: {
    isFormValidated: false,
    isVerifyFormValidated: false,
    isSigningUp: false,
    isConfirmingCode: false,
    signedUpUser: null,
  },
  worksheet: {
    selectedCreationCategory: categories[0],
    selectedCreationSubCategory: defaultSubCategories[0],
    creationSubCategoryList: defaultSubCategories,
    questions: [],
    answers: [],
    selectedTabId: SelectedTabId.Questions,
    selectedWorksheet: "",
    title: "",
    titleError: false,
  },
  // TODO: remove after worksheets stored in backend
  savedWorksheets: {
    isSavingWorksheet: false,
    isSaveError: false,
    worksheets: {},
  },
  workSheetSettings: {
    singleDigitAddition: {
      isInline: false,
      numOfQuestions: 1,
      numPerQuestion: [2, 2],
    },
    doubleDigitAddition: {
      questionsPerWorksheet: 1,
      numPerQuestion: [2, 2],
    },
    largeNumberAddition: {
      questionsPerWorksheet: 1,
      numPerQuestion: [2, 2],
      rangeOfDigitsPerNumber: [1, 3],
    },
  },
}

export const store = configureStore(initialState)
