import {
    combineReducers
} from "redux";
import tasks from "./tasks";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
    tasks: tasks,
    // You can do just 'tasks' if u decide to name reducer and file same.
    errorReducer: errors,
    messages,
    auth
});