import { Button, Classes, InputGroup, Intent, Tab, TabId, Tabs } from "@blueprintjs/core"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, useRouteMatch } from "react-router-dom"
import ReactToPrint from "react-to-print"
import { setIsWorksheetDialogDisplayed } from "../../store/dashboard/DashboardActions"
import { verifyUserIsLoggedIn } from "../../store/login/LoginActions"
import { saveWorksheet } from "../../store/savedWorksheet/SavedWorksheetActions"
import { State } from "../../store/store"
import {
  setSelectedWorksheetTab,
  setWorkSheetTitleError,
  updateTitle,
} from "../../store/worksheet/WorksheetActions"
import { SelectedTabId } from "../../store/worksheet/WorksheetConstants"
import TopNavigation from "../TopNavigation"
import WorksheetDialog from "../worksheetDialog/WorksheetDialog"
import AnswerCard from "./AnswerCard"
import FancyRow from "./PrintWorksheetDisplay"
import QuestionCard from "./QuestionCard"

const WorksheetDisplay = () => {
  const componentRef = React.useRef(null)
  const match = useRouteMatch("/worksheets/:id")
  const storedWorksheet = useSelector(
    (state: State) => state.savedWorksheets.worksheets[match ? match.params["id"] : ""]
  )
  const title = useSelector((state: State) => state.worksheet.title)
  const titleError = useSelector((state: State) => state.worksheet.titleError)
  const questions = useSelector((state: State) => state.worksheet.questions)
  const answers = useSelector((state: State) => state.worksheet.answers)
  const selectedTabId = useSelector((state: State) => state.worksheet.selectedTabId)
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
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const verifyUserAuth = () => {
    dispatch(verifyUserIsLoggedIn(history, location.pathname))
  }

  React.useEffect(() => {
    verifyUserAuth()
  }, [])

  const questionDisplay = (qs: any[]) => {
    const qArr: any[] = []
    let index = 0
    qs.forEach(q => {
      index++
      qArr.push(<QuestionCard key={`question-${index}`} question={q} index={index} />)
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

  const saveNewWorksheet = () => {
    if (title === "") {
      dispatch(setWorkSheetTitleError())
      return
    }
    dispatch(
      saveWorksheet(
        worksheet.title,
        worksheet.questions,
        worksheet.answers,
        worksheet.category,
        worksheet.subCategory
      )
    )
  }

  const openCreateWorksheetDialog = () => {
    dispatch(setIsWorksheetDialogDisplayed(true))
  }

  const handleTitleChange = (str: string) => {
    dispatch(updateTitle(str))
  }

  const questionsTab = () => {
    return (
      <div className="question-rows mx-3 mt-5 align-items-center">
        {questionDisplay(worksheet.questions)}
      </div>
    )
  }

  const answersTab = () => {
    return (
      <div className="question-rows mx-3 mt-5 align-items-center">
        {answerDisplay(worksheet.answers)}
      </div>
    )
  }

  const handleTabChange = (tabId: TabId) => {
    dispatch(setSelectedWorksheetTab(tabId as SelectedTabId))
  }

  const displayTitleError = () => {
    let error = ""
    if (titleError && title === "") {
      error = "No title entered"
    }
    return <div className="worksheet-title-error pl-3">{error}</div>
  }

  return (
    <>
      <TopNavigation isLoggedIn />
      <WorksheetDialog />
      <div className={`${Classes.DARK} container worksheet-container dark-mode-background`}>
        <Tabs
          className="worksheet-tabs pt-4"
          id="worksheet-tabs"
          selectedTabId={selectedTabId}
          onChange={handleTabChange}
        >
          <Tab id={SelectedTabId.Questions} title="Questions" panel={questionsTab()} />
          <Tab id={SelectedTabId.Answers} title="Answers" panel={answersTab()} />

          <div id="worksheet-title-section" className="d-block ml-5">
            <InputGroup
              onChange={(e: any) => {
                handleTitleChange(e.target.value)
              }}
              placeholder="Enter title..."
              value={worksheet.title}
              round
              intent={titleError ? Intent.DANGER : Intent.PRIMARY}
              leftIcon={titleError ? "cross" : undefined}
            />
            {displayTitleError()}
          </div>

          <Button
            className="px-3 mr-2"
            intent={Intent.PRIMARY}
            text="Save worksheet"
            onClick={saveNewWorksheet}
          />
          <Button
            className="px-3 mr-2"
            intent={Intent.PRIMARY}
            text="Create new"
            onClick={openCreateWorksheetDialog}
          />
          <ReactToPrint
            trigger={() => <Button className="px-3 mr-2" intent={Intent.PRIMARY} text="Print" />}
            content={() => componentRef.current}
          />
          <div className="d-none">
            <FancyRow ref={componentRef} />
          </div>
        </Tabs>
      </div>
    </>
  )
}

export default WorksheetDisplay
