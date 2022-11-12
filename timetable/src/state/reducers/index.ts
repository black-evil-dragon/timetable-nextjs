import { combineReducers } from "redux";

import timetableReducer from "./timetableReducer";


const reducers = combineReducers({
    timetable: timetableReducer,
})

export default reducers;