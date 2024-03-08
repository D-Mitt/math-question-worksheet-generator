import {
  additionSubCategories,
  categories,
  Category,
  defaultSubCategories,
  GENERATE_WORKSHEET_SUCCESS,
  SelectCategory,
  SelectedTabId,
  SET_SELECTED_WORKSHEET_CATEGORY,
  SET_SELECTED_WORKSHEET_SUB_CATEGORY,
  SET_SELECTED_WORKSHEET_TAB,
  WorksheetAction,
  WORKSHEET_TITLE_ERROR_OCCURED,
  WORKSHEET_TITLE_UPDATED,
} from "./WorksheetConstants"

const setSubCategorylist = (category: SelectCategory) => {
  switch (category.name) {
    case Category.Addition:
      return additionSubCategories
    default:
      return []
  }
}

const worksheetReducer = (
  state = {
    selectedCreationCategory: categories[0],
    selectedCreationSubCategory: defaultSubCategories[0],
    creationSubCategoryList: defaultSubCategories,
    questions: [] as string[],
    answers: [] as string[],
    selectedTabId: SelectedTabId.Questions,
    title: "",
    titleError: false,
  },
  action: WorksheetAction
) => {
  let newState = state

  switch (action.type) {
    case SET_SELECTED_WORKSHEET_CATEGORY:
      newState = {
        ...newState,
        selectedCreationCategory: action.category,
        creationSubCategoryList: setSubCategorylist(action.category),
      }
      break
    case SET_SELECTED_WORKSHEET_SUB_CATEGORY:
      newState = {
        ...newState,
        selectedCreationSubCategory: action.subCategory,
      }
      break
    case GENERATE_WORKSHEET_SUCCESS:
      newState = {
        ...newState,
        title: "",
        questions: action.data.questions,
        answers: action.data.answers,
      }
      break
    case SET_SELECTED_WORKSHEET_TAB:
      newState = {
        ...newState,
        selectedTabId: action.tab,
      }
      break
    case WORKSHEET_TITLE_UPDATED:
      newState = {
        ...newState,
        title: action.title,
        titleError: false,
      }
      break
    case WORKSHEET_TITLE_ERROR_OCCURED:
      newState = {
        ...newState,
        titleError: true,
      }
      break
    default:
      newState = {
        ...newState,
      }
      break
  }
  return newState
}

export default worksheetReducer
