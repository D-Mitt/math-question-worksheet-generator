import { NumberRange } from "@blueprintjs/core"

export const SET_DOUBLE_DIGIT_QUESTIONS_PER_WORKSHEET = "SET_DOUBLE_DIGIT_QUESTIONS_PER_WORKSHEET"
export type SET_DOUBLE_DIGIT_QUESTIONS_PER_WORKSHEET = typeof SET_DOUBLE_DIGIT_QUESTIONS_PER_WORKSHEET

export const SET_DOUBLE_DIGIT_NUM_PER_QUESTION = "SET_DOUBLE_DIGIT_NUM_PER_QUESTION"
export type SET_DOUBLE_DIGIT_NUM_PER_QUESTION = typeof SET_DOUBLE_DIGIT_NUM_PER_QUESTION

export interface SetQuestionsPerWorksheet {
  type: SET_DOUBLE_DIGIT_QUESTIONS_PER_WORKSHEET
  questionsPerWorksheet: number
}

export interface SetNumPerQuestion {
  type: SET_DOUBLE_DIGIT_NUM_PER_QUESTION
  numPerQuestion: NumberRange
}

export type DoubleDigitAdditionAction = SetQuestionsPerWorksheet | SetNumPerQuestion
