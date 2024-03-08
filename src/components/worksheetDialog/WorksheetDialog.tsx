import { Button, Classes, Dialog, Intent } from "@blueprintjs/core"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { setIsWorksheetDialogDisplayed } from "../../store/dashboard/DashboardActions"
import { State } from "../../store/store"
import { generateWorksheet } from "../../store/worksheet/WorksheetActions"
import { AdditionSubCategory, Category } from "../../store/worksheet/WorksheetConstants"
import WorksheetDialogCategorySelector from "./WorksheetDialogCategorySelector"
import WorksheetDialogSettings from "./WorksheetDialogSettings"

const WorksheetDialog = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isWorksheetDialogDisplayed = useSelector(
    (state: State) => state.dashboard.isWorksheetDialogDisplayed
  )
  const selectedCategory = useSelector((state: State) => state.worksheet.selectedCreationCategory)
  const selectedSubCategory = useSelector(
    (state: State) => state.worksheet.selectedCreationSubCategory
  )

  const showCreateWorksheetDialog = (shouldDisplayWorksheetDialog: boolean) => {
    dispatch(setIsWorksheetDialogDisplayed(shouldDisplayWorksheetDialog))
  }

  const noSelectedCategory = () => {
    if (selectedCategory && selectedCategory.name !== Category.None) {
      return true
    }
    return false
  }

  const noSelectedSubCategory = () => {
    if (selectedSubCategory && selectedSubCategory.name !== AdditionSubCategory.None) {
      return true
    }
    return false
  }

  const getAdditionSingleDigitSettings = useSelector(
    (state: State) => state.workSheetSettings.singleDigitAddition
  )

  const getAdditionDoubleDigitSettings = useSelector(
    (state: State) => state.workSheetSettings.doubleDigitAddition
  )

  const getAdditionLargeNumbersSettings = useSelector(
    (state: State) => state.workSheetSettings.largeNumberAddition
  )

  const generate = () => {
    let settings: any

    switch (selectedSubCategory.name) {
      case AdditionSubCategory.SingleDigit.toString():
        settings = getAdditionSingleDigitSettings
        break
      case AdditionSubCategory.DoubleDigit.toString():
        settings = getAdditionDoubleDigitSettings
        break
      case AdditionSubCategory.LargeNumbers.toString():
        settings = getAdditionLargeNumbersSettings
        break
      default:
        break
    }

    dispatch(generateWorksheet(selectedCategory, selectedSubCategory, settings, history))
  }

  if (isWorksheetDialogDisplayed) {
    return (
      <Dialog
        className={`${Classes.DARK} ${Classes.INTENT_SUCCESS} w50`}
        icon="add"
        isOpen
        title="Create a new worksheet"
        onClose={e => showCreateWorksheetDialog(false)}
      >
        <div className={`${Classes.DIALOG_BODY} bottom-divider-dark-mode`}>
          <WorksheetDialogCategorySelector />
          <WorksheetDialogSettings />
        </div>
        <div className={`${Classes.DIALOG_FOOTER}`}>
          <div className={`${Classes.DIALOG_FOOTER_ACTIONS}`}>
            <Button
              className="px-3 mr-2"
              intent={Intent.NONE}
              text="Cancel"
              onClick={() => showCreateWorksheetDialog(false)}
            />
            <Button
              className="px-3"
              rightIcon="arrow-right"
              intent={Intent.SUCCESS}
              text="Continue"
              disabled={!noSelectedCategory() || !noSelectedSubCategory()}
              onClick={() => generate()}
            />
          </div>
        </div>
      </Dialog>
    )
  }
  return null
}

export default WorksheetDialog
