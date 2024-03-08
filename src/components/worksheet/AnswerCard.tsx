import * as React from "react"
import { Context, Node } from "react-mathjax2"
import { useSelector } from "react-redux"
import { State } from "../../store/store"
import { Category } from "../../store/worksheet/WorksheetConstants"

interface AnswerCardInterface {
  answer: string
  index: number
}

const AnswerCard = (props: AnswerCardInterface) => {
  const selectedCategory = useSelector((state: State) => state.worksheet.selectedCreationCategory)
  // Will need later
  // const selectedSubCategory = useSelector(
  //   (state: State) => state.worksheet.selectedCreationSubCategory
  // )
  // const worksheetSettings = useSelector((state: State) => state.workSheetSettings)

  const calculatePadding = () => {
    switch (selectedCategory.name) {
      case Category.Addition:
        return "pt-17"
    }
    return "pt-60"
  }

  const paddingClass = calculatePadding()

  return (
    <div className="d-inline-flex w17 answer-card-mb">
      <div className="worksheet-numbering">{props.index}.</div>
      <div className={`equation-section ${paddingClass}`}>
        <div className="w100 absolute-zero-position-no-top">
          <Context className="" delay={1000} input="tex">
            <Node>{props.answer}</Node>
          </Context>
        </div>
      </div>
    </div>
  )
}

export default AnswerCard
