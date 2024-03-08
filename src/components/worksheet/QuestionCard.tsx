import * as React from "react"
import { Context, Node } from "react-mathjax2"
import { useSelector } from "react-redux"
import { State } from "../../store/store"
import { AdditionSubCategory, Category } from "../../store/worksheet/WorksheetConstants"

interface QuestionCardInterface {
  question: string
  index: number
}

const QuestionCard = (props: QuestionCardInterface) => {
  const selectedCategory = useSelector((state: State) => state.worksheet.selectedCreationCategory)
  const selectedSubCategory = useSelector(
    (state: State) => state.worksheet.selectedCreationSubCategory
  )
  const worksheetSettings = useSelector((state: State) => state.workSheetSettings)

  const calculatePadding = () => {
    switch (selectedCategory.name) {
      case Category.Addition:
        if (selectedSubCategory.name === AdditionSubCategory.SingleDigit) {
          if (worksheetSettings.singleDigitAddition.isInline) {
            return "pt-07"
          }

          const numberPerQuestion = worksheetSettings.singleDigitAddition.numPerQuestion
          switch (numberPerQuestion[1]) {
            case 2:
              return "pt-20"
            case 3:
              return "pt-30"
            case 4:
              return "pt-40"
            case 5:
              return "pt-50"
          }
          return "pt-60"
        } else if (selectedSubCategory.name === AdditionSubCategory.DoubleDigit) {
          const numberPerQuestion = worksheetSettings.doubleDigitAddition.numPerQuestion
          switch (numberPerQuestion[1]) {
            case 2:
              return "pt-20"
            case 3:
              return "pt-30"
            case 4:
              return "pt-40"
            case 5:
              return "pt-50"
          }
          return "pt-60"
        } else if (selectedSubCategory.name === AdditionSubCategory.LargeNumbers) {
          const numberPerQuestion = worksheetSettings.largeNumberAddition.numPerQuestion
          switch (numberPerQuestion[1]) {
            case 2:
              return "pt-20"
            case 3:
              return "pt-30"
            case 4:
              return "pt-40"
            case 5:
              return "pt-50"
          }
          return "pt-60"
        }
    }
    return "pt-60"
  }

  const paddingClass = calculatePadding()

  return (
    <div className="break-inside w17 question-card-mb">
      <div className="worksheet-numbering">{props.index}.</div>
      <div className={`equation-section ${paddingClass} w100`}>
        <div className="w100 absolute-zero-position-no-top">
          <Context
            className=""
            // script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML&delayStartupUntil=onload"
            // options={{ delayStartupUntil: "onload" }}
            // noGate
            // onLoad={() => console.log("DONE LOADING")}
            delay={1500}
            input="tex"
          >
            <Node>{props.question}</Node>
          </Context>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
