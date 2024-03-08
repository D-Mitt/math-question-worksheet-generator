import { NumberRange } from "@blueprintjs/core"
import {
  SetNumPerQuestion,
  SetQuestionsPerWorksheet,
  SET_DOUBLE_DIGIT_NUM_PER_QUESTION,
  SET_DOUBLE_DIGIT_QUESTIONS_PER_WORKSHEET,
} from "./doubleDigitAdditionConstants"

export const setQuestionsPerWorksheet = (
  questionsPerWorksheet: number
): SetQuestionsPerWorksheet => {
  return {
    type: SET_DOUBLE_DIGIT_QUESTIONS_PER_WORKSHEET,
    questionsPerWorksheet,
  }
}

export const setNumPerQuestion = (numPerQuestion: NumberRange): SetNumPerQuestion => {
  return {
    type: SET_DOUBLE_DIGIT_NUM_PER_QUESTION,
    numPerQuestion,
  }
}
