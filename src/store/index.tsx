import { combineReducers } from "redux"
import additionReducer from "./addition/AdditionReducer"
import doubleDigitAdditionReducer from "./addition/doubleDigitAddition/doubleDigitAdditionReducer"
import largeNumberAdditionReducer from "./addition/largeNumberAddition/LargeNumberAdditionReducer"
import singleDigitAdditionReducer from "./addition/singleDigitAddition/singleDigitAdditionReducer"
import dashboardReducer from "./dashboard/DashboardReducer"
import loginReducer from "./login/LoginReducer"
import savedWorksheetReducer from "./savedWorksheet/SavedWorksheetReducer"
import signUpReducer from "./signup/SignUpReducer"
import worksheetReducer from "./worksheet/WorksheetReducer"

export default combineReducers({
  addition: additionReducer,
  dashboard: dashboardReducer,
  login: loginReducer,
  signup: signUpReducer,
  worksheet: worksheetReducer,
  workSheetSettings: combineReducers({
    singleDigitAddition: singleDigitAdditionReducer,
    doubleDigitAddition: doubleDigitAdditionReducer,
    largeNumberAddition: largeNumberAdditionReducer,
  }),
  savedWorksheets: savedWorksheetReducer,
})
