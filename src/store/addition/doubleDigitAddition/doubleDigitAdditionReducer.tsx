import {
  DoubleDigitAdditionAction,
  SET_DOUBLE_DIGIT_NUM_PER_QUESTION,
  SET_DOUBLE_DIGIT_QUESTIONS_PER_WORKSHEET,
} from "./doubleDigitAdditionConstants"

const doubleDigitAdditionReducer = (
  state = {
    questionsPerWorksheet: 1,
    numPerQuestion: [2, 2],
  },
  action: DoubleDigitAdditionAction
) => {
  let newState = state

  switch (action.type) {
    case SET_DOUBLE_DIGIT_QUESTIONS_PER_WORKSHEET:
      newState = {
        ...newState,
        questionsPerWorksheet: action.questionsPerWorksheet,
      }
      break
    case SET_DOUBLE_DIGIT_NUM_PER_QUESTION:
      newState = {
        ...newState,
        numPerQuestion: action.numPerQuestion,
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

export default doubleDigitAdditionReducer
