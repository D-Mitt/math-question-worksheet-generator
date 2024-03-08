export const CREATE_ADDITION_QUESTIONS_REQUEST = "CREATE_ADDITION_QUESTIONS_REQUEST"
export type CREATE_ADDITION_QUESTIONS_REQUEST = typeof CREATE_ADDITION_QUESTIONS_REQUEST

export const CREATE_ADDITION_QUESTIONS_SUCCESS = "CREATE_ADDITION_QUESTIONS_SUCCESS"
export type CREATE_ADDITION_QUESTIONS_SUCCESS = typeof CREATE_ADDITION_QUESTIONS_SUCCESS

export const CREATE_ADDITION_QUESTIONS_FAILURE = "CREATE_ADDITION_QUESTIONS_FAILURE"
export type CREATE_ADDITION_QUESTIONS_FAILURE = typeof CREATE_ADDITION_QUESTIONS_FAILURE

export interface CreateAdditionQuestionsRequest {
  type: CREATE_ADDITION_QUESTIONS_REQUEST
}

export interface CreateAdditionQuestionsSuccess {
  type: CREATE_ADDITION_QUESTIONS_SUCCESS
  data: any
}

export interface CreateAdditionQuestionsFailure {
  type: CREATE_ADDITION_QUESTIONS_FAILURE
}

export type AdditionAction =
  | CreateAdditionQuestionsRequest
  | CreateAdditionQuestionsSuccess
  | CreateAdditionQuestionsFailure
