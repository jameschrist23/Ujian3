import { SET_VIDEO } from './actionTypes'

const initialState = {
    video: []
}

const reducers = (state = initialState, action) => {
    if(action.type === SET_VIDEO) {
        return {
            ...state,
            video: action.payload
        }
    }

    return state

}

export default reducers