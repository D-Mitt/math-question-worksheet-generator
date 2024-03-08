import {
  SET_IS_INLINE,
  SET_NUM_OF_QUESTIONS,
  SET_NUM_PER_QUESTION,
  SingleDigitAdditionAction,
} from "./singleDigitAdditionConstants"

const singleDigitAdditionReducer = (
  state = {
    isInline: false,
    numOfQuestions: 1,
    numPerQuestion: [2, 2],
  },
  action: SingleDigitAdditionAction
) => {
  let newState = state

  switch (action.type) {
    case SET_IS_INLINE:
      newState = {
        ...newState,
        isInline: action.isInline,
      }
      break
    case SET_NUM_OF_QUESTIONS:
      newState = {
        ...newState,
        numOfQuestions: action.numOfQuestions,
      }
      break
    case SET_NUM_PER_QUESTION:
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

export default singleDigitAdditionReducer
