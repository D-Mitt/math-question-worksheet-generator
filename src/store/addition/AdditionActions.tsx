import axios from "axios"
import { Dispatch } from "redux"
import {
  AdditionAction,
  CreateAdditionQuestionsFailure,
  CreateAdditionQuestionsRequest,
  CreateAdditionQuestionsSuccess,
  CREATE_ADDITION_QUESTIONS_FAILURE,
  CREATE_ADDITION_QUESTIONS_REQUEST,
  CREATE_ADDITION_QUESTIONS_SUCCESS,
} from "./AdditionConstants"

const createAdditionQuestionsRequest = (): CreateAdditionQuestionsRequest => {
  return {
    type: CREATE_ADDITION_QUESTIONS_REQUEST,
  }
}

const createAdditionQuestionsSuccess = (data: any): CreateAdditionQuestionsSuccess => {
  return {
    data,
    type: CREATE_ADDITION_QUESTIONS_SUCCESS,
  }
}

export const createAdditionQuestionsFailure = (): CreateAdditionQuestionsFailure => {
  return {
    type: CREATE_ADDITION_QUESTIONS_FAILURE,
  }
}

export const createAdditionQuestions = () => {
  return async (dispatch: Dispatch<AdditionAction>) => {
    dispatch(createAdditionQuestionsRequest())
    try {
      const response = await axios.post("http://localhost:5555/additions/singleDigit", {
        numOfQuestions: 10,
        numPerQuestion: 5,
        isInline: false,
      })

      dispatch(createAdditionQuestionsSuccess(response.data))
    } catch (error) {
      console.error(error)
      dispatch(createAdditionQuestionsFailure())
    }
  }
}
