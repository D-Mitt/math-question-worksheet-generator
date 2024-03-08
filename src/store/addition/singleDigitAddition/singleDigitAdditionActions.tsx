import { NumberRange } from "@blueprintjs/core"
import {
  SetIsInline,
  SetNumOfQuestions,
  SetNumPerQuestion,
  SET_IS_INLINE,
  SET_NUM_OF_QUESTIONS,
  SET_NUM_PER_QUESTION,
} from "./singleDigitAdditionConstants"

export const setIsInline = (isInline: boolean): SetIsInline => {
  return {
    type: SET_IS_INLINE,
    isInline,
  }
}

export const setNumOfQuestions = (numOfQuestions: number): SetNumOfQuestions => {
  return {
    type: SET_NUM_OF_QUESTIONS,
    numOfQuestions,
  }
}

export const setNumPerQuestion = (numPerQuestion: NumberRange): SetNumPerQuestion => {
  return {
    type: SET_NUM_PER_QUESTION,
    numPerQuestion,
  }
}
