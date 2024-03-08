import { NumberRange } from "@blueprintjs/core"

export const SET_LARGE_NUMBER_QUESTIONS_PER_WORKSHEET = "SET_LARGE_NUMBER_QUESTIONS_PER_WORKSHEET"
export type SET_LARGE_NUMBER_QUESTIONS_PER_WORKSHEET = typeof SET_LARGE_NUMBER_QUESTIONS_PER_WORKSHEET

export const SET_LARGE_NUMBER_NUM_PER_QUESTION = "SET_LARGE_NUMBER_NUM_PER_QUESTION"
export type SET_LARGE_NUMBER_NUM_PER_QUESTION = typeof SET_LARGE_NUMBER_NUM_PER_QUESTION

export const SET_LARGE_NUMBER_RANGE_OF_DIGITS = "SET_LARGE_NUMBER_RANGE_OF_DIGITS"
export type SET_LARGE_NUMBER_RANGE_OF_DIGITS = typeof SET_LARGE_NUMBER_RANGE_OF_DIGITS

export interface SetQuestionsPerWorksheet {
  type: SET_LARGE_NUMBER_QUESTIONS_PER_WORKSHEET
  questionsPerWorksheet: number
}

export interface SetNumPerQuestion {
  type: SET_LARGE_NUMBER_NUM_PER_QUESTION
  numPerQuestion: NumberRange
}

export interface SetRangeOfDigits {
  type: SET_LARGE_NUMBER_RANGE_OF_DIGITS
  range: NumberRange
}

export type LargrNumberAdditionAction =
  | SetQuestionsPerWorksheet
  | SetNumPerQuestion
  | SetRangeOfDigits
