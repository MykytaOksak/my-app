import { ADD_USER, UPDATE_URL, USER_IS_FETCHING } from "./actions"

let initialState = {
    users: [],
    url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
    isFetching: true,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: 
            return {...state, users: [...state.users, action.newUser]}
        case UPDATE_URL: 
            return {...state, url: action.url}
        case USER_IS_FETCHING: 
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export default usersReducer