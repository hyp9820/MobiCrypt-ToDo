import axios from "axios";
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from "./auth";
import { GET_TASKS, DELETE_TASK, ADD_TASK, COLOR_TASK, IMP_TASK } from "./types";

//GET Tasks
export const getTasks = () => (dispatch, getState) => {
    axios.get('/api/tasks/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TASKS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//Delete Tasks
export const deleteTask = (id) => (dispatch, getState) => {
    axios.delete(`/api/tasks/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteTask: 'Task Deleted' }));
            dispatch({
                type: DELETE_TASK,
                payload: id
            });
        }).catch(err => console.log(err));
};

//Add Task
export const addTask = (task) => (dispatch, getState) => {
    axios.post('/api/tasks/', task, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addTask: 'Task Added' }));
            dispatch({
                type: ADD_TASK,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//Update Task
export const colorTask = (task) => (dispatch, getState) => {

    const id = task.id
    task.isdone = !task.isdone;

    axios.put(`/api/tasks/${id}/`, task, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ colorTask: 'Marked Done' }));
            dispatch({
                type: DELETE_TASK,
                payload: id
            });
            dispatch({
                type: COLOR_TASK,
                payload: res.data
            });

            
        }).catch(err => console.log(err));
};

export const impTask = (task) => (dispatch, getState) => {

    const id = task.id
    task.isimp = !task.isimp;

    axios.put(`/api/tasks/${id}/`, task, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ colorTask: 'Marked Done' }));
            dispatch({
                type: DELETE_TASK,
                payload: id
            });
            dispatch({
                type: IMP_TASK,
                payload: res.data
            });

            
        }).catch(err => console.log(err));
};