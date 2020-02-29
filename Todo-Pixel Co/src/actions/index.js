
export const CREATE_TASK = 'CREATE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const PRIORITY_FILTER_SET = 'PRIORITY_FILTER_SET'
export const SEARCH_TEXT_SET = 'SEARCH_TEXT_SET'


let nextTodoId = 0
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})