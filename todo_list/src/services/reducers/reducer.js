import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../types"
const initialState = {
    list: []
}
function listItems(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM: return {
            ...state,
            list: [
                ...state.list,
                action.data
            ]
        }
            break;
        case DELETE_ITEM:
            const filteredList = state.list.filter((itm, index) => index !== action.id)
            return {
                ...state,
                list: filteredList
            }
            break;
        case EDIT_ITEM:
            state.list[action.id] = action.data
            return {
                ...state,
                list: state.list
            }
        default: return state
    }
}

export default listItems