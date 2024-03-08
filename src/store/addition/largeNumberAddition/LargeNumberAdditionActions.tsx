import { NumberRange } from "@blueprintjs/core"
import {
  SetNumPerQuestion,
  SetQuestionsPerWorksheet,
  SetRangeOfDigits,
  SET_LARGE_NUMBER_NUM_PER_QUESTION,
  SET_LARGE_NUMBER_QUESTIONS_PER_WORKSHEET,
  SET_LARGE_NUMBER_RANGE_OF_DIGITS,
} from "./LargeNumberAdditionConstants"

export const setQuestionsPerWorksheet = (
  questionsPerWorksheet: number
): SetQuestionsPerWorksheet => {
  return {
    type: SET_LARGE_NUMBER_QUESTIONS_PER_WORKSHEET,
    questionsPerWorksheet,
  }
}

export const setNumPerQuestion = (numPerQuestion: NumberRange): SetNumPerQuestion => {
  return {
    type: SET_LARGE_NUMBER_NUM_PER_QUESTION,
    numPerQuestion,
  }
}

export const setRangeOfDigits = (range: NumberRange): SetRangeOfDigits => {
  return {
    type: SET_LARGE_NUMBER_RANGE_OF_DIGITS,
    range,
  }
}
