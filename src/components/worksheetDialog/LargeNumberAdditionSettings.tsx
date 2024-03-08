import { Label, NumberRange, Position, RangeSlider, Slider, Tooltip } from "@blueprintjs/core"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setNumPerQuestion,
  setQuestionsPerWorksheet,
  setRangeOfDigits,
} from "../../store/addition/largeNumberAddition/LargeNumberAdditionActions"
import { State } from "../../store/store"

const LargeNumberAdditionSettings = () => {
  const dispatch = useDispatch()
  const questionsPerWorksheet = useSelector(
    (state: State) => state.workSheetSettings.largeNumberAddition.questionsPerWorksheet
  )
  const numPerQuestion = useSelector(
    (state: State) => state.workSheetSettings.largeNumberAddition.numPerQuestion
  )
  const rangeOfDigitsPerNumber = useSelector(
    (state: State) => state.workSheetSettings.largeNumberAddition.rangeOfDigitsPerNumber
  )

  const setNumberOfQuestions = () => {
    return (value: number) => dispatch(setQuestionsPerWorksheet(value))
  }

  const setNumbersPerQuestion = () => {
    return (value: NumberRange) => dispatch(setNumPerQuestion(value))
  }

  const setRangeofDigitsPerNumber = () => {
    return (value: NumberRange) => dispatch(setRangeOfDigits(value))
  }

  return (
    <div id="worksheet-creation-settings" className="worksheet-creation-settings">
      <div className="d-inline-flex w100">
        <div className="mb-4 w42">
          <Tooltip
            content="Sets the number of questions the worksheet will contain"
            position={Position.RIGHT}
            hoverOpenDelay={1000}
            className="large-number-question-slider-tooltip"
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
        <div className="ml-auto mb-4 w42">
          <Tooltip
            content="Sets the range for the amount of digits in a number"
            position={Position.RIGHT}
            hoverOpenDelay={1000}
            className="large-number-digit-range-slider-tooltip"
          >
            <div>
              <Label htmlFor="digit-range-slider">Range of digits in numbers</Label>
              <div id="digit-range-slider">
                <RangeSlider
                  max={6}
                  min={1}
                  value={rangeOfDigitsPerNumber}
                  labelStepSize={1}
                  stepSize={1}
                  onChange={setRangeofDigitsPerNumber()}
                />
              </div>
            </div>
          </Tooltip>
        </div>
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

export default LargeNumberAdditionSettings
