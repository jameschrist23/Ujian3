import { SET_VIDEO } from './actionTypes.js'

export const setVideo = (data) => {
    return {
        type: SET_VIDEO,
        payload: data
    }
}