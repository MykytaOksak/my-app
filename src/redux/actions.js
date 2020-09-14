export const addUser = (id, name, email, phone, position , position_id, registration_timestamp, photo) => {
    const newUser = {
        id: id, 
        name: name, 
        email: email, 
        phone: phone, 
        position: position, 
        position_id: position_id, 
        registration_timestamp: registration_timestamp, 
        photo: photo
    }
    return ({newUser: newUser, type: ADD_USER})
}
export const updateNextUrl = (url) => {
    return ({url: url, type: UPDATE_URL})
}
export const userFetching = (isFetching) => { 
    return ({isFetching, type: USER_IS_FETCHING})
}

export const ADD_USER = 'ADD_USER'
export const UPDATE_URL = 'UPDATE_URL'
export const USER_IS_FETCHING = 'USER_IS_FETCHING'

