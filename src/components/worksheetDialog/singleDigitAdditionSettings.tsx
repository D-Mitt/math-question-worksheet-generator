import {
  Label,
  NumberRange,
  Position,
  RangeSlider,
  Slider,
  Switch,
  Tooltip,
} from "@blueprintjs/core"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setIsInline,
  setNumOfQuestions,
  setNumPerQuestion,
} from "../../store/addition/singleDigitAddition/singleDigitAdditionActions"
import { State } from "../../store/store"

const SingleDigitAdditionSettings = () => {
  const dispatch = useDispatch()
  const isInline = useSelector(
    (state: State) => state.workSheetSettings.singleDigitAddition.isInline
  )
  const numOfQuestions = useSelector(
    (state: State) => state.workSheetSettings.singleDigitAddition.numOfQuestions
  )
  const numPerQuestion = useSelector(
    (state: State) => state.workSheetSettings.singleDigitAddition.numPerQuestion
  )

  const setInline = (inline: boolean) => {
    dispatch(setIsInline(inline))
  }

  const setNumberOfQuestions = () => {
    return (value: number) => dispatch(setNumOfQuestions(value))
  }

  const setNumbersPerQuestion = () => {
    return (value: NumberRange) => dispatch(setNumPerQuestion(value))
  }

  return (
    <div id="worksheet-creation-settings" className="worksheet-creation-settings">
      <div className="d-inline-flex">
        <div className="mt-3 mb-4">
          <Tooltip
            content="Turning this on will display questions horizontally"
            position={Position.RIGHT}
            hoverOpenDelay={1000}
          >
            <Switch
              className="mb-0"
              checked={isInline}
              label="Horizontal"
              onChange={e => setInline(!isInline)}
            />
          </Tooltip>
        </div>
      </div>
      <div className="mb-4">
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
                value={numOfQuestions}
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
                value={isInline ? [2, 2] : numPerQuestion}
                labelStepSize={1}
                stepSize={1}
                onChange={setNumbersPerQuestion()}
                disabled={isInline}
              />
            </div>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default SingleDigitAdditionSettings
