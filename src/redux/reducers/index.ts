import { combineReducers } from "redux";
import userReducer from "./../reducers/userReducer";
import themeReducer from "./../reducers/themeReducer";
import homePanelVisibReducer from "./homePanelVisibReducer";

export default combineReducers({
    userRed: userReducer,
    themeRed: themeReducer,
    visibilityRed: homePanelVisibReducer
})

