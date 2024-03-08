import { Label, NumberRange, Position, RangeSlider, Slider, Tooltip } from "@blueprintjs/core"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setNumPerQuestion,
  setQuestionsPerWorksheet,
} from "../../store/addition/doubleDigitAddition/doubleDigitAdditionActions"
import { State } from "../../store/store"

const DoubleDigitAdditionSettings = () => {
  const dispatch = useDispatch()
  const questionsPerWorksheet = useSelector(
    (state: State) => state.workSheetSettings.doubleDigitAddition.questionsPerWorksheet
  )
  const numPerQuestion = useSelector(
    (state: State) => state.workSheetSettings.doubleDigitAddition.numPerQuestion
  )

  const setNumberOfQuestions = () => {
    return (value: number) => dispatch(setQuestionsPerWorksheet(value))
  }

  const setNumbersPerQuestion = () => {
    return (value: NumberRange) => dispatch(setNumPerQuestion(value))
  }

  return (
    <div id="worksheet-creation-settings" className="worksheet-creation-settings">
      <div className="mt-3 mb-4">
        <Tooltip
          content="Sets the number of questions the worksheet will contain"
          position={Position.RIGHT}
          hoverOpenDelay={1000}
          className="question-slider-tooltip"
        >
          <div>
            <Label htmlFor="question-slider">Number of questions</Label>
            <div id="question-slider">
              <Slider
                max={50}
                min={0}
                initialValue={1}
                value={questionsPerWorksheet}
                labelStepSize={10}
                stepSize={1}
                onChange={setNumberOfQuestions()}
              />
            </div>
          </div>
        </Tooltip>
      </div>
      <div className="mb-4">
        <Tooltip
          content="Sets the range for the amount of numbers a question can contain"
          position={Position.RIGHT}
          hoverOpenDelay={1000}
          className="number-slider-tooltip"
        >
          <div>
            <Label htmlFor="number-range-slider">Numbers per question</Label>
            <div id="number-range-slider">
              <RangeSlider
                max={5}
                min={2}
                value={numPerQuestion}
                labelStepSize={1}
                stepSize={1}
                onChange={setNumbersPerQuestion()}
              />
            </div>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default DoubleDigitAdditionSettings
