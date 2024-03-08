import { NumberRange } from "@blueprintjs/core"

export const SET_IS_INLINE = "SET_IS_INLINE"
export type SET_IS_INLINE = typeof SET_IS_INLINE

export const SET_NUM_OF_QUESTIONS = "SET_NUM_OF_QUESTIONS"
export type SET_NUM_OF_QUESTIONS = typeof SET_NUM_OF_QUESTIONS

export const SET_NUM_PER_QUESTION = "SET_NUM_PER_QUESTION"
export type SET_NUM_PER_QUESTION = typeof SET_NUM_PER_QUESTION

export interface SetIsInline {
  type: SET_IS_INLINE
  isInline: boolean
}

export interface SetNumOfQuestions {
  type: SET_NUM_OF_QUESTIONS
  numOfQuestions: number
}

export interface SetNumPerQuestion {
  type: SET_NUM_PER_QUESTION
  numPerQuestion: NumberRange
}

export type SingleDigitAdditionAction = SetIsInline | SetNumOfQuestions | SetNumPerQuestion
