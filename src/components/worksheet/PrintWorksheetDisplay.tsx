import * as React from "react"
import { useSelector } from "react-redux"
import { useRouteMatch } from "react-router-dom"
import { State } from "../../store/store"
import AnswerCard from "./AnswerCard"
import QuestionCard from "./QuestionCard"

const PrintWorksheetDisplay = (props: any) => {
  const match = useRouteMatch("/worksheets/:id")
  const storedWorksheet = useSelector(
    (state: State) => state.savedWorksheets.worksheets[match ? match.params["id"] : ""]
  )
  const title = useSelector((state: State) => state.worksheet.title)
  const questions = useSelector((state: State) => state.worksheet.questions)
  const answers = useSelector((state: State) => state.worksheet.answers)
  const selectedCategory = useSelector((state: State) => state.worksheet.selectedCreationCategory)
  const selectedSubCategory = useSelector(
    (state: State) => state.worksheet.selectedCreationSubCategory
  )
  const worksheet = storedWorksheet
    ? storedWorksheet
    : {
        title,
        questions,
        answers,
        category: selectedCategory,
        subCategory: selectedSubCategory,
      }

  const questionDisplay = (qs: any[]) => {
    const qArr: any[] = []
    let index = 0
    qs.forEach(q => {
      index++
      qArr.push(
        <>
          <div className="no-break-inside" />
          <QuestionCard key={`question-${index}`} question={q} index={index} />
        </>
      )
    })

    return qArr
  }

  const answerDisplay = (as: any[]) => {
    const aArr: any[] = []
    let index = 0
    as.forEach(a => {
      index++
      aArr.push(<AnswerCard key={`answer-${index}`} answer={a} index={index} />)
    })

    return aArr
  }

  const questionsTab = () => {
    return (
      <>
        <div className="page-break" />
        <div className="printing-questions-title">Questions</div>
        <div className="question-rows mx-3 mt-5 align-items-center">
          {questionDisplay(worksheet.questions)}
        </div>
        <br />
      </>
    )
  }

  const answersTab = () => {
    return (
      <>
        <div className="page-break" />
        <div className="printing-answers-title">Answers</div>
        <div className="question-rows mx-3 mt-5 align-items-center">
          {answerDisplay(worksheet.answers)}
        </div>
        <br />
      </>
    )
  }

  return (
    <div ref={props.printRef} className="container worksheet-container">
      <div className="worksheet-tabs pt-4">
        {questionsTab()}
        {answersTab()}
      </div>
    </div>
  )
}

const FancyRow = React.forwardRef((props, ref) => (
  <PrintWorksheetDisplay printRef={ref} {...props} />
))

export default FancyRow
