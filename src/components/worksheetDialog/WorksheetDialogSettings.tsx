import * as React from "react"
import { useSelector } from "react-redux"
import { State } from "../../store/store"
import { AdditionSubCategory } from "../../store/worksheet/WorksheetConstants"
import DoubleDigitAdditionSettings from "./doubleDigitAdditionSettings"
import LargeNumberAdditionSettings from "./LargeNumberAdditionSettings"
import SingleDigitAdditionSettings from "./singleDigitAdditionSettings"

const WorksheetDialogSettings = () => {
  const selectedSubCategory = useSelector(
    (state: State) => state.worksheet.selectedCreationSubCategory
  )

  switch (selectedSubCategory.name) {
    case AdditionSubCategory.SingleDigit:
      return <SingleDigitAdditionSettings />
    case AdditionSubCategory.DoubleDigit:
      return <DoubleDigitAdditionSettings />
    case AdditionSubCategory.LargeNumbers:
      return <LargeNumberAdditionSettings />
    default:
      return <div className="worksheet-creation-settings" />
  }
}

export default WorksheetDialogSettings
