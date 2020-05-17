import { GET_TASKS, DELETE_TASK, ADD_TASK, COLOR_TASK, IMP_TASK } from "../actions/types.js";

const initialState = {
    tasks: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                // '...' is called the spread operator and it basically includes whatever is in the state.
                // so we are returning everything that in the state
                tasks: action.payload
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case COLOR_TASK:
        case IMP_TASK: 
            return {
                ...state,
                tasks: [...state.tasks,action.payload]
            }
        default:
            return state;
    }
}