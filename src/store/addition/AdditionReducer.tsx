import { AdditionAction, CREATE_ADDITION_QUESTIONS_SUCCESS } from "./AdditionConstants"

const additionReducer = (
  state = {
    questions: [],
    answers: [],
  },
  action: AdditionAction
) => {
  let newState = state

  switch (action.type) {
    case CREATE_ADDITION_QUESTIONS_SUCCESS:
      newState = {
        ...newState,
        questions: action.data.questions,
        answers: action.data.answers,
      }
      break
  }
  return newState
}

export default additionReducer
