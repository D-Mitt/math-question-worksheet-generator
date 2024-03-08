import {
  LargrNumberAdditionAction,
  SET_LARGE_NUMBER_NUM_PER_QUESTION,
  SET_LARGE_NUMBER_QUESTIONS_PER_WORKSHEET,
  SET_LARGE_NUMBER_RANGE_OF_DIGITS,
} from "./LargeNumberAdditionConstants"

const largeNumberAdditionReducer = (
  state = {
    isInline: false,
    questionsPerWorksheet: 1,
    numPerQuestion: [2, 2],
    rangeOfDigitsPerNumber: [1, 3],
  },
  action: LargrNumberAdditionAction
) => {
  let newState = state

  switch (action.type) {
    case SET_LARGE_NUMBER_QUESTIONS_PER_WORKSHEET:
      newState = {
        ...newState,
        questionsPerWorksheet: action.questionsPerWorksheet,
      }
      break
    case SET_LARGE_NUMBER_NUM_PER_QUESTION:
      newState = {
        ...newState,
        numPerQuestion: action.numPerQuestion,
      }
      break
    case SET_LARGE_NUMBER_RANGE_OF_DIGITS:
      newState = {
        ...newState,
        rangeOfDigitsPerNumber: action.range,
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

export default largeNumberAdditionReducer
